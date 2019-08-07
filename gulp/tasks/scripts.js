module.exports = () => {
  $.gulp.task("scripts", () => {
    return $.gulp
      .src("src/scripts/*.js")
      .pipe(
        $.babel({
          presets: "env"
        })
      )
      .pipe($.uglify())
      .pipe($.concat("main.min.js"))

      .pipe($.gulp.dest("build/js"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
