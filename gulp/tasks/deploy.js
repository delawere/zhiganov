module.exports = () => {
    $.gulp.task("deploy", () => {
        return $.gulp.src("./build/**/*")
        .pipe($.ghPages())
    });
  };
  