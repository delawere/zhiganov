module.exports = () => {
  $.gulp.task("compress", () => {
    return $.pipeline(
      $.gulp.src("src/js/*.js"),
      $.uglify(),
      $.gulp.dest("build/js").pipe(
        $.browserSync.reload({
          stream: true
        })
      )
    );
  });
};
