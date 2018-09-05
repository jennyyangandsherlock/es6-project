import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']))//server放在最后面执行.