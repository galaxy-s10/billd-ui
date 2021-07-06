const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const less = require("gulp-less");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const through2 = require("through2");
const babelConfig = require("../babel.config.js");
const tsProject = require("../tsconfig.json");
const tsDefaultReporter = ts.reporter.defaultReporter();

gulp.task("clean-dist", function() {
  console.log(process.cwd());
  return gulp.src("../dist", { allowEmpty: true }).pipe(clean({ force: true })); //不添加force:true属性不能删除上层目录，因此加上。
});

gulp.task("copy", function() {
  return gulp
    .src("../components/assets/**/*", { allowEmpty: true })
    .pipe(gulp.dest("../dist/assets"));
});

gulp.task("less", function() {
  return gulp
    .src("../components/**/*.less")
    .pipe(less())
    .pipe(postcss())
    // .pipe(concat('all.css'))
    .pipe(gulp.dest("../dist"));
});

gulp.task("css123", function() {
  console.log("ssss");
  return gulp
    .src("../dist/**/*.css")
    .pipe(concat("all.css"))
    .pipe(gulp.dest("../dist"));
});


const tsFiles = [
  "../components/**/*.js",
  "../components/**/*.jsx",
  "../components/**/*.ts",
  "../components/**/*.tsx",
];

gulp.task("compile", function() {
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
        if (file.path.match(/[\\/]style[\\/]index\.(js|ts)$/)) {
          //匹配所有组件下的style目录下面的文件。
          console.log("匹配到", file.path);
          const content = file.contents.toString(encoding);
          console.log(typeof content);
          console.log(content);
          file.contents = Buffer.from(
            content
              // .replace(/\/style\/?'/g, "/style/css'")
              // .replace(/\/style\/?"/g, '/style/css"')
              .replace(/\.less/g, ".css")
          );
          file.path = file.path.replace(/index\.(js|ts)$/, "css.js");
          this.push(file);
        }else{
          console.log('匹配到了',file.path);
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
  tsResult.dts.pipe(gulp.dest("../dist"));

  return stream.pipe(gulp.dest("../dist"));
});

gulp.task(
  "default",
  gulp.series(
    "clean-dist",
    gulp.parallel("copy", "less", "compile"),
    "css123",
    (done) => {
      done();
    }
  )
);
