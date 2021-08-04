const { readFileSync } = require('fs');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const through2 = require('through2');
const parseXML = require('@rgrove/parse-xml');
const { optimize } = require('svgo');
const { template } = require('lodash');
const { resolve } = require('path');
// import SVGO from 'svgo';//报错：Cannot use import statement outside a module
// import { readFileSync } from 'fs';//报错：Cannot use import statement outside a module

const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');

const tsDefaultReporter = ts.reporter.defaultReporter();
const { _SUCCESS, emoji } = require('./utils/chalkTip');
const transformLess = require('./utils/transformLess.js');
const svgOptions = require('./svgo/svgOptions');

const componentsDir = '../components';

const iconTemplate = readFileSync(
  resolve(__dirname, './svgo/template/icon.ejs'),
  'utf8'
);

// 将svg文件转换为dom对象。
gulp.task('svg', () =>
  gulp
    .src('../components/assets/svg/**/*.svg')
    .pipe(
      through2.obj(function (file, encoding, next) {
        const svgString = file.contents.toString(encoding);
        // const result = optimize(svgString);
        const { data } = optimize(svgString, {
          plugins: svgOptions.plugins,
        });
        // const optimizedSvgString = result.data;
        const domStr = parseXML(data);
        const iconcontent = JSON.stringify(domStr);
        const iconname = `${file.path.match(/([^\\]+)\.svg/)[1]}Icon`;

        const compiled = template(iconTemplate);
        const compileTemplateRes = compiled({ iconname, iconcontent });
        file.contents = Buffer.from(compileTemplateRes);
        file.path = file.path.replace(/\.svg$/, '.js');
        next(null, file);
      })
    )
    .pipe(gulp.dest('../components/icon'))
);

gulp.task(
  'cleanall',
  () =>
    // gulp-clean：确保返回流，以便gulp知道clean任务是异步的
    gulp
      .src(['../lib', '../es', '../dist'], {
        allowEmpty: true,
      })
      .pipe(clean({ force: true })) // 不添加force:true属性不能删除上层目录，因此加上。
  // cb(); // 使用cb不管用，因为gulp-clean是异步的。
);

gulp.task(
  'clean-all',
  gulp.series('cleanall', (done) => {
    console.log(
      _SUCCESS('清除旧构建文件成功！'),
      emoji.get('heavy_check_mark')
    );
    done();
  })
);

// 复制静态资源目录
function copyAssets(modules) {
  const assetsStream = gulp
    .src(`${componentsDir}/assets/**/*`, { allowEmpty: true })
    .pipe(gulp.dest(modules === false ? '../es/assets/' : '../lib/assets/'));
  assetsStream.on('finish', () => {
    console.log(
      _SUCCESS('复制静态资源目录成功！'),
      emoji.get('heavy_check_mark')
    );
  });
}

// 编译less
function compileLess(modules) {
  // 编译src下面的所以less文件，但是排除src下的assets文件夹。
  const lessStr = gulp
    .src([`${componentsDir}/**/*.less`, `!${componentsDir}/assets/**/*`], {
      cwd: '../',
    })
    .pipe(
      through2.obj(function (file, encoding, next) {
        // 将源文件复制一份放流里面
        this.push(file.clone());
        // 匹配所有less文件
        if (file.path.match(/\.less$/)) {
          transformLess(file.path)
            .then((css) => {
              // File.contents can only be a Buffer, a Stream, or null.
              file.contents = Buffer.from(css);
              // 将转换后的less文件路径修改文件成css
              file.path = file.path.replace(/\.less$/, '.css');
              // 将修改文件路径后的文件放流里面
              this.push(file);
              next();
            })
            .catch((e) => {
              console.error(e);
            });
        } else {
          next();
        }
      })
    )
    .pipe(postcss())
    .pipe(gulp.dest(modules === false ? '../es' : '../lib'));
  // .pipe(gulp.dest('../lib'));
  // 旧版使用gulp-less解析less,源文件会被解析成css文件，即原less文件会变成css文件。
  // return gulp
  //   .src("../components/**/*.less")
  //   .pipe(gulpLess())
  //   .pipe(postcss())
  //   .pipe(gulp.dest("../lib"));
  lessStr.on('finish', () => {
    console.log(_SUCCESS('编译less成功！'), emoji.get('heavy_check_mark'));
  });
}

gulp.task('concat-css', () =>
  gulp.src('../lib/**/*.css').pipe(concat('all.css')).pipe(gulp.dest('../lib'))
);

const tsFiles = [
  `${componentsDir}/**/*.js`,
  `${componentsDir}/**/*.jsx`,
  `${componentsDir}/**/*.ts`,
  `${componentsDir}/**/*.tsx`,
];

function compile(modules) {
  copyAssets(modules);
  compileLess(modules);
  let error;
  const tsResult = gulp.src(tsFiles).pipe(
    ts(tsProject.compilerOptions, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    })
  );
  function check() {
    if (error && !argv['ignore-error']) {
      console.log('退出');
      process.exit(1);
    }
  }

  const stream = tsResult.js
    .pipe(
      babel(babelConfig(modules))
      // babel({
      //   presets: ["@babel/env"],
      //   plugins: ["transform-vue-jsx"],
      // })
    )
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone());
        // mac环境下的正则没问题，windows的有问题。
        if (file.path.match(/[\\/]style[\\/]index\.(js|jsx|ts|tsx)$/)) {
          // if (file.path.match(/[\\/]style[\\/]index\.(js|jsx|ts|tsx)$/)) {
          // if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
          // 匹配所有组件(文件夹)下的style目录下面的文件。
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(
            content
              // .replace(/\/style\/?'/g, "/style/css'")
              // .replace(/\/style\/?"/g, '/style/css"')
              .replace(/\.less/g, '.css')
          );
          file.path = file.path.replace(/index\.(js|ts)$/, 'css.js');
          this.push(file);
        } else {
          // console.log("匹配到了", file.path);
          const content = file.contents.toString(encoding);
          // console.log(typeof content);
          // console.log(content);
          file.contents = Buffer.from(
            content
              // .replace(/\/style\/?'/g, "/style/css'")
              // .replace(/\/style\/?"/g, '/style/css"')
              .replace(/\.less/g, '.css')
          );
          // file.path = file.path.replace(/index\.(js|ts)$/, "css.js");
          this.push(file);
        }
        next();
      })
    );
  gulp
    .src([`${componentsDir}/**/*.@(jpg|png|svg)`])
    .pipe(gulp.dest(modules === false ? '../es' : '../lib'));
  tsResult.dts.pipe(gulp.dest(modules === false ? '../es' : '../lib'));
  tsResult.on('finish', check);
  tsResult.on('end', check);
  return stream.pipe(gulp.dest(modules === false ? '../es' : '../lib'));
}

// es modules
gulp.task('compile-es', (done) => {
  // console.log("compile es modules");
  compile(false).on('finish', () => {
    console.log(_SUCCESS('构建es完成！'), emoji.get('heavy_check_mark'));
    done();
  });
});

// commonjs
gulp.task('compile-lib', (done) => {
  // console.log("compile es commonjs");
  compile().on('finish', () => {
    console.log(_SUCCESS('构建lib完成！'), emoji.get('heavy_check_mark'));
    done();
  });
});

gulp.task(
  'default',
  gulp.series(
    'clean-all',
    // gulp.parallel('copy-assets', 'compile-es')
    // gulp.parallel('copy-assets', 'compile-es', 'compile-lib')
    gulp.parallel('compile-es', 'compile-lib'),
    // "concat-css",
    function allTasksDone(done) {
      console.log(
        _SUCCESS('所有任务执行完成！'),
        emoji.get('white_check_mark')
      );
      done();
    }
  )
);
