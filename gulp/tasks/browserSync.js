module.exports = () => {
  $.gulp.task("server", () => {
    $.browserSync.init({
      server: {
        baseDir: "./build"
      },
      notify: false
    });
    $.browserSync.watch("build", $.browserSync.reload);
  });
};
