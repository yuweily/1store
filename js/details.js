define(['jquery'],function($){
	function details(){
		$(function(){
		    var oleft=document.getElementById('left');//获得左边原图的div元素
		    var ohk=document.getElementById('huakuai');//获得滑块元素
		    var ocover=document.getElementById('cover');//获得盖子元素
		    var oright=document.getElementById('right');//获得右边div区域
		    var oright_img=document.getElementById('right_img');//获得右边图片区域
		 
		    oleft.onmouseover=function(){//当鼠标移入左边的div时，
		        ohk.style.display='block';//滑块显示
		        oright.style.display='block';//右边div显示
		    }
		     oleft.onmouseout=function(){//鼠标移出，
		        ohk.style.display='none';//滑块隐藏
		        oright.style.display='none';//右边div隐藏
		    }
		    ocover.onmousemove=function(e){//鼠标在盖子上移动的事件
		        var ev=e||window.event;//兼容性
		        var m_left=ev.layerX||ev.offsetX;//兼容性获得鼠标的横坐标
		        var left=m_left-100;//表示滑块到div左边框的距离，鼠标在div中间
		        if(left<0){//如果滑块要超出左边框，另左边距等于0
		            left=0;
		        }
		        if(left>200){//如果滑块要超出右边框，另左边框为最大值200
		            left=200;
		        }
		        huakuai.style.left=left+'px';//将左边距赋值给小滑块
		 
		        var m_top=ev.layerY||ev.offsetY;//同理设置垂直方向的值
		        var top=m_top-100;
		        if(top<0){
		            top=0;
		        }
		        if(top>200){
		            top=200;
		        }
		        huakuai.style.top=top+'px';
		 
		        var right_left=left*-2;//因为大图为小图的2倍，所以乘以2,因为图片要向左上移动，位置像素值为负，所以再乘以-1
		        var right_top=top*-2;//同理，获得垂直方向的值
		        oright_img.style.left=right_left+'px';//赋值
		        oright_img.style.top=right_top+'px';
		    }	
			
		




		})
	}
	return{
		details:details
	}
})
