define(['jquery', 'jquery-cookie'],function($){
	function index(){
		$(function(){
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
		})
		//轮播图
			var aBtns = $("#banBox").find("ol").find("li");
				var oUl = $("#banBox").find("ul");
				var aLis = oUl.find("li");

				//<2>这个iNow，代表当前显示的图片的下标
				var iNow = 0;
				var timer = null;

				//<3>先给按钮添加点击
				aBtns.click(function(){
					//当点击按钮的时候，改变图片的下标
					iNow = $(this).index();
					tab();
				})

				//<4>切换图片
				function tab(){
					//<5>将btn所有的样式取消，将当前点击按钮的样式设置成active
					aBtns.attr("class", '');
					aBtns.eq(iNow).attr("class", 'active');

					//<6>ul去动
					oUl.stop().animate({left: -1423 * iNow}, 700, function(){
						if(iNow == aLis.size() - 1){
							//切回第一张图片
							iNow = 0;
							oUl.css("left", 0);
						}
					});
				}

				function timerInner(){
					iNow++;
					tab();
					if(iNow == aLis.size() - 1){
						aBtns.eq(0).attr("class", 'active');
					}
				}

				timer = setInterval(timerInner, 3000);

				$("#banBox").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 3000);

				})

		//侧边栏	
		var list = $("#sdb").find(".sdb-left").find("ul")
			$("list li").hover(function(){
				$("list li a").css("color","#666");
				$(this).css("background","#fff")
			},function(){

			})

		// list数据加载
		$.ajax({
			url: 'data/list.json',
			success: function(data){
				var oUl = $("#sdb").find(".sdb-left").find("ul");
				for(var i = 0; i < data.length; i++){
					$(`<li><a href="">${data[i].title}</a></li>`).appendTo($(oUl));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
		$.ajax({
			url: 'data/list.json',
			success: function(data){
				var d1 = data[0]["child1"]
				for(var j = 0;j < d1.length; j++){
						$(`<div class="sdb-right-row cr">
								<dl class="item cr">
									<dt>${d1[j]["title"]}</dt>
								</dl>
							</div>`).appendTo($("#sdb .sdb-right"))	
					for(var k = 0;k < d1[j]["child"].length;k++){
						$(`<dd>${d1[j]["child"][k]}</dd>`).appendTo($("#sdb .sdb-right-row .item"))
					}

				}
			},
			error: function(msg){
				alert(msg);
			}
		})
		$("#sdb .sdb-left").hover(function(){
			$("#sdb .sdb-right").css("display","block")
			$("#sdb .sdb-right").hover(function(){
				$("#sdb .sdb-right").css("display","block")
			},function(){
				$("#sdb .sdb-right").css("display","none")
			})
		},function(){
			$("#sdb .sdb-right").css("display","none")
		})
		//global商品
		$.ajax({
			url: 'data/global.json',
			success: function(res){
				var oUl = $("#contBox").find(".goods").find(".global");
				var html = "";
				for(var i = 0; i < res.length; i++){
					html = `<li class = 'goods_item goods_box'>
						<div class = 'goods_pic'>
							<a href=""><img src="${res[i].img}" alt=""></a>
						</div>
						<div class = 'goods_title'>
							<p>${res[i].title}</p>
							<p>${res[i].price}</p>
							<p>${res[i].price2}</p>
						</div>
						<div class = 'sc'>
							<div id ="${res[i].id}" class = 'sc_btn'><p class = "sc_click">立即购买</p></div>
						</div>
					</li>`;
					$(html).appendTo($(oUl));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})
		// 逛更多more前4项
		$.ajax({
			url: 'data/more4.json',
			success: function(res){
				var html = "",oOl = "",html2 = "",oOl2 = "";
				for(var i = 0; i < 6; i++){
					html = `<li>
							<div class="more-goods">
								<p class="more-title"><a href="">${res[i].title}</a></p>
								<p class="price">${res[i].price}</p>
								<p class="imag"><a href=""><img src="${res[i].img}" alt=""></a></p>
							</div>
						</li>`;
					$(html).appendTo($("#moreBox").find(".oDiv").find("ul"));
				}
				for(var i = 6; i < 9; i++){
					oOl = `<li>
							<div class="more-right">
								<p class="more-right-title"><a href="">${res[i].title}</a></p>
								<p class="more-right-price">${res[i].price}</p>
								<p class="more-right-pic"><a href=""><img src="${res[i].img}" alt=""></a></p>
							</div>
						</li>`
					$(oOl).appendTo($("#moreBox").find(".right").find(".ol1"));	
				}
				for(var i = 9; i < 15; i++){
					html2 = `<li>
							<div class="more-goods">
								<p class="more-title"><a href="">${res[i].title}</a></p>
								<p class="price">${res[i].price}</p>
								<p class="imag"><a href=""><img src="${res[i].img}" alt=""></a></p>
							</div>
						</li>`;
					$(html2).appendTo($("#moreBox").find(".center").find(".ul2"));
				}
				for(var i = 15; i < 18; i++){
					oOl2 = `<li>
							<div class="more-right">
								<p class="more-right-title"><a href="">${res[i].title}</a></p>
								<p class="more-right-price">${res[i].price}</p>
								<p class="more-right-pic"><a href=""><img src="${res[i].img}" alt=""></a></p>
							</div>
						</li>`
					$(oOl2).appendTo($("#moreBox").find(".right").find(".ol2"));	
				}
				for(var i = 9; i < 11; i++){
					html = `<li>
							<div class="more-goods">
								<p class="more-title"><a href="">${res[i].title}</a></p>
								<p class="price">${res[i].price}</p>
								<p class="imag"><a href=""><img src="${res[i].img}" alt=""></a></p>
							</div>
						</li>`;
					$(html).appendTo($("#moreBox").find(".oDiv").find(".ul3"));
				}
			},
			error: function(msg){
				alert(msg);
			}
		})


		// 为图片添加透明度效果
		$("#contBox .brand .brand-1").hover(function(){
			$(this).find("img").css("opacity","0.8");
			$(this).find("img").fadeTo(400, 1, function(){})
		},function(){
			$(this).find("img").css("opacity","1");
		})

	}
	return{
		index:index
	}
})