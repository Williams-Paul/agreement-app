var gulp = require('gulp');

var paths = {
  scripts: ['./assets/src/**/*']
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});
