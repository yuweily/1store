define(['ballMove', 'parabola', 'jquery', 'jquery-cookie'] , function(ballMove, parabola, $){
	function goods(){
		$(function(){
			//首页动态效果
			//为客户服务li3添加下滑菜单
			$("#indexBox .index-right .li3").hover(function(){
				$(".hidden").css("display","block");
				$(this).css("background","#fff");
				$(".server").hover(function(){
					$(".li3-span-a").css("color","#ff4040")
				},function(){
					$(".li3-span-a").css("color","#666")
				})
			},function(){
				$(".hidden").css("display","none");
				$(this).css("background","none");
				$(".li3-span-a").css("color","#aaaaaa")
			})
			//为pp下载添加二维码
			$("#indexBox .index-right .li4").hover(function(){
				$(".li4-code").css("display","block");

			},function(){
				$(".li4-code").css("display","none");
			})



			
			

			//点击清空购物车
			// $("#clearBtn").click(function(){
			// 	$.cookie("goods", null);
			// 	$(".sc_right .sc_num").html(0);

			// })
			// alert($.cookie("goods"))
			

			$.ajax({
			url: 'data/global.json',
			success: function(res){
				var oUl = $("#contBox").find(".goods").find(".global");
				var html = "";
				for(var i = 0; i < res.length; i++){
					html = `<li class = 'goods_item goods_box'>
						<div class = 'goods_pic'>
							<a href="details.html"><img src="${res[i].img}" alt=""></a>
						</div>
						<div class = 'goods_title'>
							<p>${res[i].title}</p>
							<p>${res[i].price}</p>
							<p>${res[i].price2}</p>
						</div>
						<div class = 'sc'>
							<div id ="${res[i].id}" class = 'sc_btn'><p class = "sc_click">加入购物车</p></div>
						</div>
					</li>`;
					$(html).appendTo($(oUl));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})




			sc_car();
			//给购物车按钮添加事件
			//页面控件非常多，非常容易叠加，很容易造成事件冒泡
			$("body").on("click", ".sc_btn", function(){
				//抛物线运动	
				ballMove.ballMove(this);
				
			
				// alert(this.id);
				//是否是第一次添加cookie
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加  [{id:id,num:2}]
					$.cookie("goods", '[{id:' + id + ', num:1}]', {
						expires: 7
					});
				}else{

					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品

					//遍历所有的对象，判断是否id相同
					for(var i in arr){

						if(arr[i].id == id){
							arr[i].num = arr[i].num + 1;
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr,  {
								expires: 7
							});
							same = true;
							break;
						}
					}

					//没有相同的商品
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
					
				}
				sc_car();
				// alert($.cookie("goods"));


				return false;
			})


			/*
				mouseenter  移入
				mouseleave  移出
			*/
			$(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				})
				sc_msg();
			});
			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -270
				})
			});

			//购物车数字
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){ //判断字符串是否存在
					var sc_arr = eval(sc_str);
					var sc_num = 0;
					for(var i in sc_arr){
						sc_num = Number(sc_arr[i].num) + sc_num;
					}
					$(".sc_right .sc_num").html(sc_num);
				}
			}

			//已经存储在cookie数据进行加载
			function sc_msg(){
				$.ajax({
					url: "data/global.json",
					type: "get",
					success: function(res){
						if($.cookie("goods")){
			
							var sc_arr = eval($.cookie("goods"));
							var html = '';
							for(var i in sc_arr){
								html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>'+res[sc_arr[i].id].title+'</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">数量: '+sc_arr[i].num+'</div></li>';
							}
							$(".sc_right ul").html(html);
						}
					}
				})
			}
			

		})
	}
	return {
		goods: goods
	}
})