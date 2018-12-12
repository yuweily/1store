console.log('加载成功');

//配置我们要引入的模块的路径了
require.config({
	paths: {
		"jquery": "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"store":"store",
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ['jquery']
	},
	/*
		定义不遵从AMD规范的js文件

	 */
	"parabola": {
		exports: "_"
	}
	
})


//引入模块调用

require(['index','store'], function(index,store){
	index.index(); 
	store.store();
})

















