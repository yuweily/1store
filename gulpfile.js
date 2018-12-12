//测试
console.log("成功载入");
const gulp =require("gulp");
//拷贝html文件
gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
//拷贝图片
gulp.task("images", function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//数据
gulp.task("data", function(){
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//js文件
gulp.task("scripts", function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
//iconfont
gulp.task("iconfont", function(){
	return gulp.src("iconfont/**/*")
	.pipe(gulp.dest("dist/iconfont"))
	.pipe(connect.reload());
})
//建立工程
gulp.task("build", ['copy-html', 'images', 'scripts', 'data','scss','scss1','scss2','scss3','scss4','scss5'], function(){
	console.log('工程建立成功');
})
//scss文件 gulp-sass-china
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task('scss', function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('scss1', function(){
	return gulp.src("stylesheet/1storeLogin.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("1storeLogin.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('scss2', function(){
	return gulp.src("stylesheet/1storeRegister.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("1storeRegister.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('scss3', function(){
	return gulp.src("stylesheet/checkout.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("checkout.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('scss4', function(){
	return gulp.src("stylesheet/details.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("details.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('scss5', function(){
	return gulp.src("stylesheet/settlement.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("settlement.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//监听
gulp.task("watch",function(){
	gulp.watch("*.html", ['copy-html']);
	gulp.watch("images/**/*", ['images']);
	gulp.watch("data/*.json", ['data']);
	gulp.watch("js/*.js", ['scripts']);
	gulp.watch("stylesheet/index.scss", ['scss']);
	gulp.watch("stylesheet/1storeLogin.scss", ['scss1']);
	gulp.watch("stylesheet/1storeRegister.scss", ['scss2']);
	gulp.watch("stylesheet/checkout.scss", ['scss3']);
	gulp.watch("stylesheet/details.scss", ['scss4']);
	gulp.watch("stylesheet/settlement.scss", ['scss5']);	
})
//启动服务
const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: 'dist', 
		port: 9999,
		livereload: true //设置实时刷新
	})
})

gulp.task("default",["watch",'server']);