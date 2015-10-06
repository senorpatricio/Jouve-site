var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	ugly = require('gulp-uglify')
	prefix = require('gulp-autoprefixer');

	gulp.task('sass', function () {
		gulp.src('dev/scss/**/*.scss')
		.pipe(sass())
		.pipe(prefix({
			browsers: ['last 2 versions']
			}))
		.pipe(concat('styles.css'))
		//.pipe(ugly())
		.pipe(gulp.dest('_/css'));

		});

	gulp.task('scripts', function () {
		return gulp.src(['dev/js/**/*.js'])
		.pipe(concat('allFrigganFiles.js'))
		.pipe(ugly())
		.pipe(gulp.dest('_/js'))
		})

//watcher task
gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('dev/scss/*.scss', ['sass']);
   // Watch .js files
  gulp.watch('dev/js/**/*.js', ['scripts']);
 });

// Default tasks
gulp.task('default', ['sass', 'scripts']);