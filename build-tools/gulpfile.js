// const SVGO = require('svgo');

// import SVGO from 'svgo';

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// const postcss = require('gulp-postcss');
const through2 = require('through2');
const { chdir, cwd } = require('process');
const path = require('path');
const webpackConfig = require('./webpack.common');
// const babelConfig = require("../babel.config.js");
const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');
const transformLess = require('./utils/transformLess.js');

const tsDefaultReporter = ts.reporter.defaultReporter();
const { _SUCCESS, emoji } = require('./utils/chalkTip');

const componentsDir = '../components';

gulp.task('clean-all', (done) => {
  // gulp-clean：确保返回流，以便gulp知道clean任务是异步的
  const res = gulp
    .src(['../lib', '../es'], {
      allowEmpty: true,
    })
    .pipe(clean({ force: true })); // 不添加force:true属性不能删除上层目录，因此加上。
  // cb(); // 使用cb不管用，因为gulp-clean是异步的。
  res.on('finish', function () {
    console.log(
      _SUCCESS('清除旧构建文件成功！'),
      emoji.get('heavy_check_mark')
    );
    done();
  });
});

gulp.task('dist', (done) => {
  chdir(path.resolve(__dirname, '../'));
  // res1会删除dist，res不会删除dist，因此，得将res1放在res的前面
  webpackConfig({ production: true, productionMin: true }).then((res) => {
    webpackConfig({ production: true, productionMin: false }).then((res1) => {
      console.log(res, 3333);
      console.log(res1, 4444);
      // res1会删除dist，res不会删除dist，因此，得将res1放在res的前面
      webpack([res1, res], (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        const info = stats.toJson();
        if (stats.hasErrors()) {
          // console.error(info.errors);
        }
        if (stats.hasWarnings()) {
          // console.warn(info.warnings);
        }
        const buildInfo = stats.toString({
          colors: true,
          children: true,
          chunks: false,
          modules: false,
          chunkModules: false,
          hash: false,
          version: false,
        });
        // console.log(buildInfo);
        done();
      });
    });
  });
});

// 复制静态资源目录
function copyAssets(modules) {
  return function copyassets(done) {
    const assetsStream = gulp
      .src(`${componentsDir}/assets/**/*`, { allowEmpty: true })
      .pipe(gulp.dest(modules === false ? '../es/assets/' : '../lib/assets/'));
    assetsStream.on('finish', () => {
      console.log(
        _SUCCESS('复制静态资源目录成功！'),
        emoji.get('heavy_check_mark')
      );
      done();
    });
    return assetsStream;
  };
}

// 编译less
function compileLess(modules) {
  return function compileless(done) {
    // 编译src下面的所有less文件，但是排除src下的assets文件夹。
    const lessStream = gulp
      .src([`components/**/*.less`, `!components/assets/**/*`], {
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
      // .pipe(postcss()) // gulp-postcss不能在这里使用，因为上面gulp.pipe的结果是promise异步的
      .pipe(gulp.dest(modules === false ? '../es' : '../lib'));
    // .pipe(gulp.dest('../lib'));
    // 旧版使用gulp-less解析less,源文件会被解析成css文件，即原less文件会变成css文件。
    // return gulp
    //   .src("../components/**/*.less")
    //   .pipe(gulpLess())
    //   .pipe(postcss())
    //   .pipe(gulp.dest("../lib"));
    lessStream.on('finish', () => {
      console.log(_SUCCESS('编译less成功！'), emoji.get('heavy_check_mark'));
      done();
    });
    // console.log(lessStream, 98766);
    // return lessStream;
  };
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
gulp.task(
  'compile-es',
  gulp.parallel(
    copyAssets(false),
    compileLess(false),
    function compileEs(done) {
      // console.log("compile es modules");
      compile(false).on('finish', () => {
        console.log(_SUCCESS('构建es完成！'), emoji.get('heavy_check_mark'));
        done();
      });
    }
  )
);

// commonjs
gulp.task(
  'compile-lib',
  gulp.parallel(
    copyAssets(undefined),
    compileLess(undefined),
    function compileLib(done) {
      // console.log("compile es modules");
      compile(undefined).on('finish', () => {
        console.log(_SUCCESS('构建lib完成！'), emoji.get('heavy_check_mark'));
        done();
      });
    }
  )
);

gulp.task(
  'default',
  gulp.series(
    'clean-all',
    // gulp.parallel('copy-assets', 'compile-es')
    // gulp.parallel('copy-assets', 'compile-es', 'compile-lib')
    // gulp.parallel('compile-es'),
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
