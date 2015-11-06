var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    watch = require('gulp-watch');

// Modify these variables according to your project
var config = {
    scssDir: './scss',
    cssDir: './css'
};

gulp.task('default', ['style']);

// Compile Sass files
gulp.task('style', function() {
    gulp.src(config.scssDir + '/*.scss')
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



// Production
gulp.task('build', function() {
    gulp.start('style');
});

// Watch for changes
gulp.task('watch', function() {
    watch(config.scssDir + '/**/*.scss', function() {
        gulp.start('style-dev');
    });
});