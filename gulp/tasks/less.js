module.exports = () => {
  $.gulp.task("less", () => {
    return $.gulp
      .src("src/less/*.less")
      .pipe($.less())
      .pipe($.gulp.dest("build/css/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
