var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concat    = require('gulp-concat');

var assetsPath = './app/assets';
var distPath   = assetsPath + '/dist';
var jsPath     = assetsPath + '/js';
var cssPath    = assetsPath + '/css';
var sassPath   = cssPath + '/sass'

gulp.task('default', function() {
  console.log('works!');
});

/*
** COMPILE SASS
*/
gulp.task('sass', function () {
  gulp.src(sassPath + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssPath));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassPath + '/**/*.scss', ['sass']);
});


/*
** MINIFY CSS
*/
gulp.task('minify-css', function() {
  return gulp.src(cssPath + '/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(distPath + '/css'));
});


/*
** CONCAT FILES
*/
gulp.task('scripts', function() {
  return gulp.src(jsPath + '/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(distPath +'/js/'));
});

gulp.task('stylesheets', function() {
  return gulp.src(cssPath + '/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest(distPath +'/css/'));
});