module.exports = () => {
  $.gulp.task("watch", () => {
    $.gulp.watch("src/pug/**/*.pug", $.gulp.series("pug"));
    $.gulp.watch("src/less/**/*.less", $.gulp.series("less"));
    $.gulp.watch("src/scripts/**/*.js", $.gulp.series("scripts"));
  });
};
