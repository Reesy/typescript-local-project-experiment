var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require('merge2');  // Requires separate installation

gulp.task('default', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts({
            declaration: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest('dist'))
    ]);
});