const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// Paths for SCSS and CSS
const paths = {
  scss: './scss/**/*.scss', // Watch all SCSS files in the scss folder
  css: './css',             // Output compiled CSS here
};

// Task to compile SCSS to CSS
function compileSass() {
  return gulp.src(paths.scss) // Source SCSS files
    .pipe(sourcemaps.init())  // Initialize sourcemaps
    .pipe(sass().on('error', sass.logError)) // Compile SCSS and log errors
    .pipe(sourcemaps.write('./')) // Write sourcemaps to the same directory as CSS
    .pipe(gulp.dest(paths.css)); // Output compiled CSS files
}

// Watch task to recompile on changes
function watchFiles() {
  gulp.watch(paths.scss, compileSass); // Watch SCSS files and run compileSass on change
}

// Default task (run with `gulp`)
exports.default = gulp.series(compileSass, watchFiles);