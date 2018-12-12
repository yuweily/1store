console.log('加载成功');

//配置我们要引入的模块的路径了
require.config({
	paths: {
		"jquery": "jquery-1.10.1.min",
	},
	
})


//引入模块调用

require(['details'], function(details){
	details.details();

})
