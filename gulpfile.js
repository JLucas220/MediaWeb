var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
gulp.task('sass', function (){

    return gulp.src('./sass/**/*.scss')
    .pipe(sass().once('error', sass.logErros))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
  gulp.src('./styles/**/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('run'['sass', 'css']);

gulp.task('watch', function(){

    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./css/*.css', ['css']);
});

gulp.task('defailt', ['run', 'watch']);