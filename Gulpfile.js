/*
 * Main Gulpfile for any type of projects
 * Cyber-Duck Ltd - www.cyber-duck.co.uk
 */

const gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-cssnano'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    csslint = require('gulp-stylelint');


/*
 * Main configuration object
 */
const config = {
    scssDir: './scss',
    cssDir: './css',
};



/*
 * Compile Sass for development
 * with sourcemaps and not minified
 */
gulp.task('style-dev', () => {
    'use strict';
    return gulp.src(config.scssDir + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.cssDir));
});



/*
 * Compile Sass for production
 * with no sourcemaps and minified
 */
gulp.task('style', () => {
    'use strict';
    return gulp.src(config.scssDir + '/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(minify({
            zindex: false, 
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest(config.cssDir));
});



/*
 * Lint CSS/Scss using Style Lint
 */
gulp.task('lint-css', function lintCssTask() {
    return gulp.src(config.scssDir + '/**/*.scss')
        .pipe(csslint({
            failAfterError: true,
            reportOutputDir: 'reports/lint',
            reporters: [
                {formatter: 'verbose', console: true},
                {formatter: 'json', save: 'report.json'},
            ],
        debug: true
    }));
});


/*
 * Clean non used JS files, and sourcemaps for production
 */
gulp.task('clean', ['style', 'compress'], () => {
    'use strict';
    del(config.cssDir + '/maps/*');
    del(config.cssDir + '/maps/');
});



/*
 * Optimise images uploaded in the CMS
 */
gulp.task('imgoptim', (cb) => {
    'use strict';
    return gulp.src([
        config.imgSrc + '/**/*.png',
        config.imgSrc + '/**/*.jpg',
        config.imgSrc + '/**/*.gif',
        config.imgSrc + '/**/*.jpeg'
    ])
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.imgSrc)).on('end', cb).on('error', cb);
});



/*
 * Production task
 * Compiles Sass with no sourcemaps, minifies CSS
 * Compress JS
 * Clean sourcemaps and uncompressed JS
*/
gulp.task('build', () => {
    'use strict';
    gulp.start('style');
    gulp.start('clean');
});



/*
 * Development mode, watching for changes
 * This mode creates non compressed CSS, non compressed JS
 * and creates sourcemaps.
*/
gulp.task('watch', () => {
    'use strict';
    // Development task for compiling Sass
    watch(config.scssDir + '/**/*.scss', () => {
        gulp.start('style-dev');
    });
});



/*
 * Default task, runs the build task
 */
gulp.task('default', ['build']);
