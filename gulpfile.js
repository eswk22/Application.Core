var gulp = require("gulp");
var tsc  = require("gulp-typescript-compiler");
var  ts = require('gulp-typescript');
var rename = require("gulp-rename");
var util = require("gulp-util");
var docco = require("gulp-docco");
var nodemon = require("gulp-nodemon");

// pull in the project TypeScript config
var tsProject = ts.createProject('tsconfig.json');

var tsGlob = ['src/**/*.ts', '!{node_modules,node_modules/**}', '!{docs,doc/**}',
  '!{dist,dist/**}', '!{coverage,coverage/**}', '!src/{res,res/**}'];
gulp.task("default", ["compile", "watch", "nodemon"]);


gulp.task("watch", function () {
   return gulp.watch("src/**/*.*", ["compile"]); 
});


//convert typescript to javascript
gulp.task('compile', () => {
   gulp.watch(tsGlob, function (event) {
      const tsResult = tsProject.src()
      .pipe(tsProject());
      return tsResult.js.pipe(gulp.dest('lib'));
   });
});

//generate declaration file.
gulp.task('declaration', () => {
   gulp.watch(tsGlob, function (event) {
      const tsResult = tsProject.src()
      .pipe(tsProject());
      return tsResult.dts.pipe(gulp.dest('lib'));
   });
});

// gulp.task("compile", function () {
//   return gulp
//     .src("src/**/*.ts") 
//     .pipe(tsc({
//         module: "commonjs",
//         target: "ES5",
//         sourcemap: false,
//         logErrors: true
//     }))
//     .pipe(gulp.dest("lib"));
// });

gulp.task("nodemon", function () {
  nodemon({ script: "lib/index.js" });
});
