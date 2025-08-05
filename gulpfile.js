const gulp        = require('gulp');
const browserSync = require('browser-sync'); //аналог лайвсервер
const sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles',function()){ //создаем компилятор
    return gulp.src("src/sass/*.(scss|sass)")
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
}
gulp.task //изменения в программе
gulp.task('default',gulp.parallel('server','styles')) //