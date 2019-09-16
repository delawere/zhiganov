module.exports = () => {
  $.gulp.task("pug", () => {
    return $.gulp
      .src("src/pug/*.pug")
      .pipe(
        $.pug({
          pretty: true
        })
      )
      .pipe($.gulp.dest("build"))
      .on("end", $.browserSync.reload);
  });
};
