var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');

var js_files = [
    'assets/plugins/jquery-3.3.1.min.js',
    'assets/plugins/jquery.lazy.min.js',
    'assets/plugins/popper.min.js',
    'assets/plugins/bootstrap/js/bootstrap.min.js',
    'assets/plugins/back-to-top.js',
    'assets/plugins/jquery-scrollTo/jquery.scrollTo.min.js',
    'assets/plugins/easy-pie-chart/dist/jquery.easypiechart.min.js',
    'assets/plugins/imagesloaded.pkgd.min.js',
    'assets/plugins/isotope.pkgd.min.js',
    'assets/js/main.js',
    'assets/plugins/font-awesome/js/fontawesome-all.min.js',
];

var css_files = [
    'assets/plugins/bootstrap/css/bootstrap.min.css',
    'assets/css/theme-2.css',
    'assets/css/custom.css',
];
var js_dest = 'dist/scripts';
var css_dest = 'dist/styles';

gulp.task('scripts', function() {
    return gulp.src(js_files)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(js_dest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(js_dest));
});

gulp.task('styles', function() {
    return gulp.src(css_files)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(css_dest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(css_dest));
});
