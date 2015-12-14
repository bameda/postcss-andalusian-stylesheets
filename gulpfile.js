var gulp = require('gulp');

var srcFiles = ['src/**.js'];
var srcTestFiles = ['test/*.js'];
var jsFiles = ['gulpfile.js'].concat(srcFiles, srcTestFiles);
var jsonFiles = ['src/*.json'];
var watchedFiles = jsFiles.concat(jsonFiles);
var testFiles = ['dist/test/*.js'];
var dist = ['dist/**'];


gulp.task('clean', function () {
    var del = require('del');
    return del(dist);
});

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    return gulp.src(jsFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('toES5:srcFiles', function () {
    var babel = require('gulp-babel');
    return gulp.src(srcFiles)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:Json', function () {
    return gulp.src(jsonFiles)
        .pipe(gulp.dest('dist'));
});

gulp.task('toES5:srcTestFiles', function () {
    var babel = require('gulp-babel');
    return gulp.src(srcTestFiles)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist/test'));
});

gulp.task('run:test', function () {
    var mocha = require('gulp-mocha');
    return gulp.src(testFiles, { read: false })
        .pipe(mocha());
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('lint', 'toES5:srcFiles', 'toES5:srcTestFiles', 'copy:Json'),
    'run:test'
));

gulp.task('watch', function () {
    gulp.watch(watchedFiles, gulp.series('build'));
});

gulp.task('default', gulp.series('build', 'watch'));

