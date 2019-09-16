"use strict";

global.$ = {
  gulp: require("gulp"),
  pug: require("gulp-pug"),
  browserSync: require("browser-sync").create(),
  autoprefixer: require("gulp-autoprefixer"),
  less: require("gulp-less"),
  concat: require("gulp-concat"),
  babel: require('gulp-babel'),
  uglify: require('gulp-uglify'),
  pipeline: require('readable-stream').pipeline,
  ghPages: require('gulp-gh-pages'),

  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

$.path.tasks.forEach(taskPath => {
  require(taskPath)();
});

$.gulp.task(
  "build",
  $.gulp.series(
    $.gulp.parallel("pug", "less", "scripts"),
    $.gulp.parallel("deploy")
  )
);

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("pug", "less", "scripts"),
    $.gulp.parallel("watch", "server")
  )
);
