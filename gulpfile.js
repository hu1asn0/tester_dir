var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/* DEFINITON OF watch TASK */
gulp.task('watch', function(){

/* INITALIZE browserSync*/
browserSync.init({
notify: false, 
server:  
{baseDir: "app", index:"tester_page.html"}
});

/*WATCH index.html CHANGES &RELOAD page*/
gulp.watch('./app/*.html', function(){
browserSync.reload();	
});

/*WATCH any .css CHANGES &RELOAD page*/
gulp.watch('./app/*.css', ['cssInject']);
}) //End of watch task

//Update CSS
gulp.task('cssInject', function()
{
gulp.src("app/*.css")
.pipe(browserSync.stream());
});