const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

const srcFolder = './src/scss/*.scss';
const destFolder = './src/css/';

gulp.task('styles', () => {
    return gulp.src(srcFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destFolder));
});

gulp.task('clean', () => {
    return del([
        './css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', function () {
    gulp.watch(srcFolder, gulp.series('styles'));
});