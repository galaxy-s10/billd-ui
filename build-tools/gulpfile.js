const path = require('path');
const { chdir, cwd } = require('process');

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const through2 = require('through2');
const webpack = require('webpack');

// const postcss = require('gulp-postcss');

const tsProject = require('../tsconfig.json');
const { distDir } = require('./constant');
const babelConfig = require('./getBabelCommonConfig');
const { chalkSUCCESS, chalkINFO } = require('./utils/chalkTip');
const transformLess = require('./utils/transformLess.js');
const webpackConfig = require('./webpack/webpack.common');

const tsDefaultReporter = ts.reporter.defaultReporter();

const componentsDir = path.resolve(__dirname, '../components');

const tsFiles = [
  `${componentsDir}/**/*.js`,
  `${componentsDir}/**/*.jsx`,
  `${componentsDir}/**/*.ts`,
  `${componentsDir}/**/*.tsx`,
];

// 删除目录
function delDir(path) {
  // gulp-clean：确保返回流，以便gulp知道clean任务是异步的
  const res = gulp
    .src(path, {
      allowEmpty: true,
    })
    .pipe(clean({ force: true })); // 不添加force:true属性不能删除上层目录，因此加上。
  return new Promise((resolve) => {
    res.on('finish', function () {
      console.log(chalkSUCCESS('清除旧构建文件成功！'));
      resolve();
    });
  });
}

// 复制静态资源目录
function copyAssets(modules) {
  return function copyassets(done) {
    const assetsStream = gulp
      .src(`${componentsDir}/assets/**/*`, { allowEmpty: true })
      .pipe(gulp.dest(modules === false ? '../es/assets/' : '../lib/assets/'));
    assetsStream.on('finish', () => {
      console.log(chalkSUCCESS('复制静态资源目录成功！'));
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
      console.log(chalkSUCCESS('编译less成功！'));
      done();
    });
    // console.log(lessStream, 98766);
    // return lessStream;
  };
}

// 编译
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
      process.exit(1);
    }
  }
  tsResult.dts.pipe(gulp.dest(modules === false ? '../es' : '../lib'));
  tsResult.on('finish', check);
  tsResult.on('end', check);
  const stream = tsResult.js.pipe(babel(babelConfig(modules)));
  return stream.pipe(gulp.dest(modules === false ? '../es' : '../lib'));
}

gulp.task('concat-css', () =>
  gulp.src('../lib/**/*.css').pipe(concat('all.css')).pipe(gulp.dest('../lib'))
);

// es modules
gulp.task(
  'es',
  gulp.series(
    async function (done) {
      await delDir(['../es']);
      done();
    },
    gulp.parallel(
      copyAssets(false),
      compileLess(false),
      function compileEs(done) {
        console.log(chalkINFO('开始编译es版本...'));
        compile(false).on('finish', () => {
          console.log(chalkSUCCESS('编译es版本完成！'));
          done();
        });
      }
    )
  )
);

// commonjs
gulp.task(
  'lib',
  gulp.series(
    async function (done) {
      await delDir(['../lib']);
      done();
    },
    gulp.parallel(
      copyAssets(undefined),
      compileLess(undefined),
      function compileLib(done) {
        console.log(chalkINFO('开始编译lib版本...'));
        compile(undefined).on('finish', () => {
          console.log(chalkSUCCESS('编译lib版本完成！'));
          done();
        });
      }
    )
  )
);

// umd
gulp.task(
  'dist',
  gulp.series(
    async function (done) {
      await delDir([distDir]);
      done();
    },
    async (done) => {
      chdir(path.resolve(__dirname, '../'));
      console.log(chalkINFO('开始编译dist版本...'), cwd());
      // res1会删除dist，res不会删除dist，因此，得将res1放在res的前面
      const productionMinConfig = await webpackConfig({
        production: true,
        productionMin: true,
      });
      const productionConfig = await webpackConfig({
        production: true,
        productionMin: false,
      });
      // productionConfig会删除dist，productionMinConfig不会删除dist，因此，得将productionConfig放在productionMinConfig的前面
      webpack([productionMinConfig, productionConfig], (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        const info = stats.toJson();
        if (stats.hasErrors()) {
          console.error(info.errors);
        }
        if (stats.hasWarnings()) {
          console.warn(info.warnings);
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
        console.log(buildInfo);
        done();
      });
    }
  )
);

// es、commonjs、umd
gulp.task(
  'default',
  gulp.series(
    async function (done) {
      await delDir(['../lib', '../es', '../dist']);
      done();
    },
    gulp.parallel('es', 'lib'),
    'dist',
    function allTasksDone(done) {
      console.log(chalkSUCCESS('所有任务执行完成！'));
      done();
    }
  )
);
