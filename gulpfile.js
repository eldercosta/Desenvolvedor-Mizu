var gulp = require('gulp');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');

var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
  
    tmp: 'tmp',
    tmpIndex: 'tmp/index.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',

    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
}

gulp.task('html', function () {
    return gulp.src(paths.srcHTML)
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () {
    return gulp.src(paths.srcCSS)
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function () {
    return gulp.src(paths.srcJS)
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', gulp.series('html','css','js'));

gulp.task('serve', gulp.series('copy'),function () {
return gulp.src(paths.tmp)
    .pipe(webserver({
    port: 3000,
    livereload: true
    }));
});