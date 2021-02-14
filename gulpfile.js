let gulp = require('gulp')
let babel = require('gulp-babel')
let del = require('del')
let eslint = require('gulp-eslint')
let jest = require('@jacobq/gulp-jest').default

let srcFiles = ['src/**.js']
let srcTestFiles = ['test/*.js']
let jsFiles = ['gulpfile.js'].concat(srcFiles, srcTestFiles)
let jsonFiles = ['src/*.json']
let watchedFiles = jsFiles.concat(jsonFiles)
let testFiles = ['dist/test/*.js']
let dist = ['dist/**']

gulp.task('clean', () => {
  return del(dist)
})

gulp.task('lint', () => {
  return gulp
    .src(jsFiles)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest(file => file.base))
    .pipe(eslint.failAfterError())
})

gulp.task('babel:srcFiles', () => {
  return gulp
    .src(srcFiles)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulp.dest('dist'))
})

gulp.task('copy:Json', () => {
  return gulp.src(jsonFiles).pipe(gulp.dest('dist'))
})

gulp.task('babel:srcTestFiles', () => {
  return gulp
    .src(srcTestFiles)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulp.dest('dist/test'))
})

gulp.task('run:test', () => {
  return gulp.src(testFiles).pipe(jest({}))
})

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('lint', 'babel:srcFiles', 'copy:Json'))
)

gulp.task(
  'test',
  gulp.series('clean', gulp.parallel('build', 'babel:srcTestFiles'), 'run:test')
)

gulp.task('watch', () => {
  gulp.watch(watchedFiles, gulp.series('test'))
})

gulp.task('default', gulp.series('build', 'watch'))
