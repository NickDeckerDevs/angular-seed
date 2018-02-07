
/* Gulp Variables */
var local = __dirname;
var directories = local.split('/');
var repo = directories[directories.length - 1];
var scssIncludePaths = ['modules', 'globals'];
var file = '--';
console.log(local);
/* Node Dependencies */

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sassIncl = require('sass-include-paths');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var scripts = {
	js: [
		'node_modules/yelp-api/yelp-api.js'
	]
}

gulp.task('build-scripts', function() {
	return gulp.src(scripts.js)
        .pipe(concat('combined.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('app'))
		.pipe(notify({ message: 'scripts built' }));
});

gulp.task('default', ['watch']);

gulp.task('build-production', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Error: ",
            message: "<%= error.message %>",
            sound: "Pop"
        })(err);
        this.emit('end');

    }
    return gulp.src(local+'/sass/main.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(rename('/-production.scss'))
        .pipe(sass({
            includePaths: scssIncludePaths
        }))
        .pipe(rename('/lunch.css'))
        .pipe(gulp.dest(local+'/app'));
});




gulp.task('watch', function() {
	var watcher = gulp.watch('sass/**/**/*.scss', ['build-production']);
    watcher.on('change', function(e) {
        file = e.path.split('/');
        file = file.slice(-3).join('/');
        console.log('Building after file '+file+' was chanaged...');
    });
});
