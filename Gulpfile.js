var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    mainBowerFiles = require('main-bower-files');

var config = {
    bowerDir: './bower_components',
    viewDir: './public/themes/cyberduck/views',
    scssDir: './public/themes/cyberduck/scss',
    jsDir: './public/themes/cyberduck/js',
    cssDir: './public/themes/cyberduck/css'
};

gulp.task('default', ['style', 'js']);

gulp.task('bower', function() {
    return bower().pipe(gulp.dest(config.bowerDir));
});


// Compile Sass files
gulp.task('style', function() {
    gulp.src(config.scssDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minify())
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


// Watch for changes
gulp.task('watch', function() {
    watch(config.scssDir + '/**/*.scss', function () {
        gulp.start('style');
    });

    watch(config.jsDir + '/src/*.js', function () {
        gulp.start('js');
    });

    watch(config.jsDir + '/scripts.js', function () {
        gulp.start('compress');
    });

});