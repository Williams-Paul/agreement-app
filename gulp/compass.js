/**
 * Compass related tasks.
 */

var gulp = require('gulp')
  , compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('./assets/sass/source/*.sass')
    .pipe(compass({
      config_file: './assets/sass/config.rb',
      css: './assets/styles',
      sass: './assets/sass/source',
      import_path: [
        './assets/sass/library',
        './assets/sass/partials'
      ]
    }));
});


