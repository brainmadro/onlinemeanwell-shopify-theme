const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
})

gulp.task('watch', () => {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})

/* gulp.task("css", () => {
    return gulp
      .src("assets/scss/app.scss")
      .pipe(plumber())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(gulp.dest("public/css"))
      .pipe(notify({
            message: "main SCSS processed"
      }))
      .pipe(browsersync.stream())
      .pipe(livereload())
}); */

//gulp.task("default", gulp.series( "sass", () => {
//    livereload.listen();
//    gulp.watch(["styles/**/*.scss"], gulp.series("sass"));
//}));