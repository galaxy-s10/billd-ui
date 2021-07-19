const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const gulpLess = require("gulp-less");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const through2 = require("through2");
const less = require("less");
const babelConfig = require("../babel.config.js");
const tsProject = require("../tsconfig.json");
const transformLess = require("./transformLess.js");
const tsDefaultReporter = ts.reporter.defaultReporter();

gulp.task("clean-dist", function() {
  return gulp.src("../lib", { allowEmpty: true }).pipe(clean({ force: true })); //不添加force:true属性不能删除上层目录，因此加上。
});

gulp.task("copyAssets", function() {
  return gulp
    .src("../components/assets/**/*", { allowEmpty: true })
    .pipe(gulp.dest("../lib/assets"));
});

gulp.task("compileLess", function() {
  return gulp
    .src("../components/**/*.less")
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
              file.path = file.path.replace(/\.less$/, ".css");
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
      })
    )
    .pipe(gulp.dest("../lib"));
  // 旧版使用gulp-less解析less,源文件会被解析成css文件，即原less文件会变成css文件。
  // return gulp
  //   .src("../components/**/*.less")
  //   .pipe(gulpLess())
  //   .pipe(postcss())
  //   .pipe(gulp.dest("../lib"));
});

gulp.task("concatCss", function() {
  return gulp
    .src("../lib/**/*.css")
    .pipe(concat("all.css"))
    .pipe(gulp.dest("../lib"));
});

const tsFiles = [
  "../components/**/*.js",
  "../components/**/*.jsx",
  "../components/**/*.ts",
  "../components/**/*.tsx"
];

gulp.task("compileJs", function() {
  let error;
  const tsResult = gulp.src(tsFiles).pipe(
    ts(tsProject.compilerOptions, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish
    })
  );
  function check() {
    if (error && !argv["ignore-error"]) {
      process.exit(1);
    }
  }
  tsResult.on("finish", check);
  tsResult.on("end", check);

  let stream = tsResult.js
    .pipe(
      babel(babelConfig)
      // babel({
      //   presets: ["@babel/env"],
      //   plugins: ["transform-vue-jsx"],
      // })
    )
    .pipe(
      through2.obj(function(file, encoding, next) {
        this.push(file.clone());
        // mac环境下的正则没问题，windows的有问题。
        if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
          // if (file.path.match(/[\\/]style[\\/]index\.(js|jsx|ts|tsx)$/)) {
          // if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
          //匹配所有组件(文件夹)下的style目录下面的文件。
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(
            content
              // .replace(/\/style\/?'/g, "/style/css'")
              // .replace(/\/style\/?"/g, '/style/css"')
              .replace(/\.less/g, ".css")
          );
          file.path = file.path.replace(/index\.(js|ts)$/, "css.js");
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
              .replace(/\.less/g, ".css")
          );
          // file.path = file.path.replace(/index\.(js|ts)$/, "css.js");
          this.push(file);
        }
        next();
      })
    );
  tsResult.dts.pipe(gulp.dest("../lib"));

  return stream.pipe(gulp.dest("../lib"));
});

gulp.task(
  "default",
  gulp.series(
    "clean-dist",
    gulp.parallel("copyAssets", "compileLess", "compileJs"),
    "concatCss",
    done => {
      done();
    }
  )
);
