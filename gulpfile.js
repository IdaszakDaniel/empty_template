var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('reload', function() {

	browserSync.reload();

});

gulp.task('serve', ['sass'], function() {

	browserSync({
		server:'projekt'
	});

	gulp.watch('projekt/*.html', ['reload']);
	gulp.watch('projekt/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {

	return gulp.src('projekt/scss/**/*.scss')	
		   .pipe(sass().on('error', sass.logError))
		   .pipe(gulp.dest('projekt/css'))
		   .pipe(browserSync.stream());      
});

gulp.task('default', ['serve'], function() {


});