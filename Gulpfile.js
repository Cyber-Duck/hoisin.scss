var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

// Modify these variables according to your project
var config = {
    scssDir: './scss',
    jsDir: './js',
    cssDir: './css'
};

gulp.task('default', ['style', 'js']);

// Compile Sass files
gulp.task('style', function() {
    gulp.src(config.scssDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest(config.cssDir));
});
gulp.task('style-dev', function() {
    gulp.src(config.scssDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.cssDir));
});


// Concatenate JS files
gulp.task('js', function() {
    return gulp.src(config.jsDir + '/src/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.jsDir));
});


// Compress JS file
gulp.task('compress', function() {
    return gulp.src(config.jsDir + '/scripts.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDir + '/min'));
});
gulp.task('compress-dev', function() {
    return gulp.src(config.jsDir + '/scripts.js')
    .pipe(gulp.dest(config.jsDir + '/min'));
});

// Production
gulp.task('build', function() {
    gulp.start('style');
    gulp.start('compress');
});

// Watch for changes
gulp.task('watch', function() {
    watch(config.scssDir + '/**/*.scss', function () {
        gulp.start('style-dev');
    });

    watch(config.jsDir + '/src/*.js', function () {
        gulp.start('js');
    });

    watch(config.jsDir + '/scripts.js', function () {
        gulp.start('compress-dev');
    });

});