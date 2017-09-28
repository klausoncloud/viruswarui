'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


//////////////
// - SCSS/CSS
//////////////

var SCSS_SRC = './src/stylesheets/scss/**/*.scss';
var SCSS_DEST = './src/stylesheets/css';

// Compile SCCS
gulp.task('compile_scss', function(){

	return gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));

});

gulp.task('sass', function() {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(SCSS_DEST));
});

// detect chnges in SCSS
gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

// Run tasks

gulp.task('default', ['watch_scss']);