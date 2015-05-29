var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/* Jade*/
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

/* sass*/
gulp.task('sass', function() {
  gulp.src(['sass/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'))
  .pipe(reload({stream:true}));
});

// // Static server
gulp.task('browser-sync', function() {
    browserSync.init(['./public/*.html' , './public/css/.css' , '/sass/*.scss'], {
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('watch', ['templates', 'sass', 'browser-sync'], function() {
  gulp.watch('./jade/*.jade', ['templates'])
  gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['watch']);


