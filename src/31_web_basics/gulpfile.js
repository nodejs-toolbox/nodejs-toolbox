/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var rev    = require('gulp-rev');
var del    = require('del');

gulp.task('clean:css', function(cb) {
    del(['web/lib/css/all*.css'], cb);
});

// now that we have imported all our dependencies we can define our task:
gulp.task('compile', ['clean:css'], function () {
    gulp.src('src/*.scss')
        .pipe(concat('all.scss'))
        .pipe(sass())
        .pipe(rev())
        .pipe(gulp.dest('web/lib/css'));
});


//
gulp.task('watch', function () {
    gulp.watch('src/*.scss', ['sass']);
});

//
gulp.task('clean', [
    'clean:css'
]);

gulp.task('build', [
    'compile'
]);

// that's it for our task, we can now define a default task that described the
// workflow for our tasks.
gulp.task('default', [
    'compile',
    'watch'
]);
