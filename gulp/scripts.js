var gulp = require('gulp')
  , browserify = require('browserify')
  , reactify = require('reactify')
  , source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  browserify('./assets/src/app.js')
    .transform({es6: true}, reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/js/'));
});