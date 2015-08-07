var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', shell.task([
  'mysql.server start',
  'nodemon server.js'
]));