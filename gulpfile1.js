var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade', function () {
  return gulp.src('jade/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
})


// // Static server
gulp.task('browser-sync', function() {
    browserSync.init(['./public/*.html'], {
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('watch', ['templates', 'browser-sync'], function() {
  gulp.watch('./jade/*.jade', ['templates'])
});


