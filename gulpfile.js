var gulp = require("gulp");
//写个复制的任务
gulp.task("copytosever",function(){
	gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu"));
});

gulp.task("copytoseverjs",function(){
	gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu/js"));
});

gulp.task("watchall",function(){
	gulp.watch(["*.php","*.html"],["copytosever"]);
	gulp.watch(["js/*.js"],["copytoseverjs"]);
});
