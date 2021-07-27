const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const through2 = require('through2');
// const babelConfig = require("../babel.config.js");
const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');
const transformLess = require('./transformLess.js');

const tsDefaultReporter = ts.reporter.defaultReporter();
const { _SUCCESS, emoji } = require('./chalkTip');

gulp.task(
  'cleanall',
  () =>
    // gulp-clean：确保返回流，以便gulp知道clean任务是异步的
    gulp
      .src(['../lib', '../es', '../dist'], {
        allowEmpty: true,
      })
      .pipe(clean({ force: true })), // 不添加force:true属性不能删除上层目录，因此加上。
  // cb(); // 使用cb不管用，因为gulp-clean是异步的。
);

gulp.task(
  'clean-all',
  gulp.series('cleanall', done => {
    console.log(
      _SUCCESS('清除旧构建文件成功！'),
      emoji.get('white_check_mark'),
    );
    done();
  }),
);

gulp.task('copy-assets', cb => {
  gulp
    .src('../components/assets/**/*', { allowEmpty: true })
    .pipe(gulp.dest('../lib/assets'));
  console.log(
    _SUCCESS('复制静态资源目录成功！'),
    emoji.get('white_check_mark'),
  );
  cb();
});

gulp.task('compile-less', cb => {
  /**
   * 由于在package.json设置了gulpfile配置文件在build-tools，所以工作目录也会改成了build-tools,
   * 在执行gulp命令的时候可以看到控制台有打印：[13:54:09] Working directory changed to D:\hss\billd-ui\build-tools
   */
  // 编译less的时候，我需要编译components目录下的所有文件，如果当前工作目录在build-tools，就得../返回上层找
  // components，这样没问题。但如果我又想排除components目录下的某个文件或者文件夹，就得用到!（这是glob语法）,
  // 但如果用'!../components/xxx/**/*'的话，glob语法就有问题了，所以gulp.src的时候指定工作目录为components的外层。
  gulp
    .src(['components/**/*.less'], { cwd: '../' })
    .pipe(
      through2.obj(function(file, encoding, next) {
        // 将源文件复制一份放流里面
        this.push(file.clone());
        // 匹配所有less文件
        if (file.path.match(/\.less$/)) {
          transformLess(file.path)
            .then(css => {
              // File.contents can only be a Buffer, a Stream, or null.
              file.contents = Buffer.from(css);
              // 将转换后的less文件路径修改文件成css
              file.path = file.path.replace(
                /\.less$/,
                ".css",
              );
              // 将修改文件路径后的文件放流里面
              this.push(file);
              next();
            })
            .catch(e => {
              console.error(e);
            });
        } else {
          next();
        }
      }),
    )
    .pipe(postcss())
    .pipe(gulp.dest('../lib'));
  // 旧版使用gulp-less解析less,源文件会被解析成css文件，即原less文件会变成css文件。
  // return gulp
  //   .src("../components/**/*.less")
  //   .pipe(gulpLess())
  //   .pipe(postcss())
  //   .pipe(gulp.dest("../lib"));
  console.log(
    _SUCCESS("编译less成功！"),
    emoji.get("white_check_mark"),
  );
  cb();
});

gulp.task('concat-css', () =>
  gulp
    .src('../lib/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../lib')),
);

const tsFiles = [
  '../components/**/*.js',
  '../components/**/*.jsx',
  '../components/**/*.ts',
  '../components/**/*.tsx',
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
    }),
  );
  function check() {
    if (error && !argv['ignore-error']) {
      console.log('退出');
      process.exit(1);
    }
  }

  const stream = tsResult.js
    .pipe(
      babel(babelConfig(modules)),
      // babel({
      //   presets: ["@babel/env"],
      //   plugins: ["transform-vue-jsx"],
      // })
    )
    .pipe(
      through2.obj(function(file, encoding, next) {
        this.push(file.clone());
        // mac环境下的正则没问题，windows的有问题。
        if (
          file.path.match(
            /[\\/]style[\\/]index\.(js|jsx|ts|tsx)$/,
          )
        ) {
          // if (file.path.match(/[\\/]style[\\/]index\.(js|jsx|ts|tsx)$/)) {
          // if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
          // 匹配所有组件(文件夹)下的style目录下面的文件。
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(
            content
              // .replace(/\/style\/?'/g, "/style/css'")
              // .replace(/\/style\/?"/g, '/style/css"')
              .replace(/\.less/g, '.css'),
          );
          file.path = file.path.replace(
            /index\.(js|ts)$/,
            "css.js",
          );
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
              .replace(/\.less/g, '.css'),
          );
          // file.path = file.path.replace(/index\.(js|ts)$/, "css.js");
          this.push(file);
        }
        next();
      }),
    );
  gulp
    .src(['../components/**/*.@(jpg|png|svg)'])
    .pipe(
      gulp.dest(modules === false ? "../es" : "../lib"),
    );
  tsResult.dts.pipe(
    gulp.dest(modules === false ? "../es" : "../lib"),
  );
  tsResult.on('finish', check);
  tsResult.on('end', check);
  return stream.pipe(
    gulp.dest(modules === false ? "../es" : "../lib"),
  );
}

// es modules
gulp.task('compile-es', done => {
  // console.log("compile es modules");
  compile(false).on('finish', () => {
    console.log(
      _SUCCESS("构建es完成！"),
      emoji.get("white_check_mark"),
    );
    done();
  });
});

// commonjs
gulp.task('compile-lib', done => {
  // console.log("compile es commonjs");
  compile().on('finish', () => {
    console.log(
      _SUCCESS("构建lib完成！"),
      emoji.get("white_check_mark"),
    );
    done();
  });
});

gulp.task(
  'all-task',
  gulp.series(
    'clean-all',
    gulp.parallel(
      'copy-assets',
      'compile-less',
      'compile-es',
      'compile-lib',
    ),
    // "concat-css",
    // function allTasksDone(done) {
    //   console.log(_SUCCESS("所有任务执行完成！"));
    //   done();
    // }
  ),
);

gulp.task('default', gulp.series('all-task'), () => {
  console.log('dddd');
});
