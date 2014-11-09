var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer');

gulp.task('doesntWork', function () {
    gulp.src('./src/sample.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/doesntWork'))
});

gulp.task('doesWork', function () {
    gulp.src('./src/sample.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/doesWork'))
});

gulp.task('default', ['doesWork', 'doesntWork']);