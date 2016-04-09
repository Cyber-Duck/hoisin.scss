var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    scsslint = require('gulp-scss-lint');

// Modify these variables according to your project
var config = {
    scssDir: './scss',
    cssDir: './css'
};

gulp.task('default', ['style']);

// Compile Sass files
gulp.task('style', function () {
    'use strict';
    gulp.src(config.scssDir + '/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9']}))
        .pipe(cssnano())
        .pipe(gulp.dest(config.cssDir));
});
gulp.task('style-dev', function () {
    'use strict';
    gulp.src(config.scssDir + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9']}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('prod', ['style-dev'], function () {
    return gulp.src(config.cssDir + '/style.css')
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('lint', function () {
    'use strict';
    return gulp.src(config.scssDir + '/*.scss')
        .pipe(scsslint({
            config: 'lint.yml'
        }));
});

// Production
gulp.task('build', function () {
    'use strict';
    gulp.start('prod');
});

// Watch for changes
gulp.task('watch', function () {
    'use strict';
    watch(config.scssDir + '/**/*.scss', function () {
        gulp.start('style-dev');
    });
});