/**
 * Created by Administrator on 2016/9/20.
 */
var gulp  = require('gulp');
var gulpReact = require('gulp-react');
gulp.task('default',['html','img'],function(){
   return gulp.src('./build/**/*.js')
                .pipe(gulpReact())
                .pipe(gulp.dest('dist'));
});
gulp.task('html',function(){
    return gulp.src('./build/**/*.html')
                .pipe(gulp.dest('dist'));
});
gulp.task('img',function(){
    return gulp.src('./build/**/*.jpg')
                .pipe(gulp.dest('dist'));
});