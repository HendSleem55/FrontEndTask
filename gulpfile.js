 var gulp  = require("gulp"); 
 var sass = require('gulp-sass');
 
gulp.task('sass',function(){
	return gulp.src('src/styles/styles.scss')
	.pipe(sass())
    .pipe(gulp.dest('./dist/css'));

})


gulp.task("default" , function(){
	gulp.watch("src/styles/*.scss",['sass'])
})

