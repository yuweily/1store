define(['jquery'],function($){
	function store(){
		$(function(){
			$(".ul1_help").mouseover(function(){
				$(".ul1_help_hidden").css("display","block");

				$(".ul1_help_hidden").css("background","#fff")
				
			})
			$(".ul1_help").mouseout(function(){
				$(".ul1_help_hidden").css("display","none");

				
			})

			//阻止默认行为
			$("#btn").click(function(evt){
				var e = evt || window.event;
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue = false;
				}
			})

			//为username添加移入移出效果
			$(".focu").hover(function(){
				if($("#int1").val() =="邮箱/手机/用户名"){
					$("#int1").val("");
					$("#int1").css("color","#d7ccd7");
				}else{
					$("#int1").css("color","black")
				}
			},function(){
				if($("#int1").val() == ""){
					$("#int1").val("邮箱/手机/用户名","");
				}else{
					$("#int1").css("color","black")
				}
			})
			$(".focu").blur(function(){
				if($("#int1").val() =="邮箱/手机/用户名"){
					$("#int1").css("color","#d7ccd7");
				}
			})

			//连接数据库 登陆
			$("#log").click(function(){
				//需要传输数据的拼接
				var str = `username=${$("#int1").val()}&password=${$("#int2").val()}`;
				ajax({
					method: "post",
					url: "../js/1storeLogin.php",
					data: str,
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})
			})
			$("")



		})
			//注册验证
				$("#username").focus(function(){
					$("#username_span").text("4-20位字符，可由中文、英文、数字或符号“_”组成");
					$("#username_span").css({
						"display":"block",
						"background":"#e4e4e4",
					})
				})
				$("#username").blur(function(){
					var oUsername = document.getElementById("username");
					var oUsername_span = document.getElementById("username_span");
					var oValue = oUsername.value;
					//将勿输入的空格去掉
					oValue = oValue.replace(/\s/g, '');
					oUsername.value = oValue;

					//验证表单中内容是否符合要求
					if(oValue.length < 4 || oValue.length > 20){
						oUsername_span.innerHTML = '请输入正确的用户名,用户名应为4-20位字符';
						$("#username_span").css("background", "#fff4d7");
					}else if(/^\d{4,20}$/.test(oValue)){
						oUsername_span.innerHTML = '请输入正确的用户名,用户名不能全为数字';
						$("#username_span").css("background", "#fff4d7");
					}else if(/\W/i.test(oValue)){
						//判断整个用户名，必须是以数字、字母、下划线组成
						oUsername_span.innerHTML = '用户名格式错误,请输入正确的用户名';
						$("#username_span").css("background", "#fff4d7");
					}else{
						$("#username_span").text("");
						$("#username_span").css({
							"background":"url(../images/right.jpg) no-repeat 10px center #fff",
							"height":"40px",
						});
					}
				})
				//设置密码
				$("#password").blur(function(){
					var oPassword = document.getElementById('password');
					var oPassword_span = document.getElementById("password_span");
					var oValue = oPassword.value;

					$("#password_span").css("height", "20px");
					$("#password_span").css("top", "292px");
					//验证表单中的内容是否符合要求
					if(oValue.length < 6 || oValue.length > 20){
						oPassword_span.innerHTML = '密码长度应为6~20个字符';
						$("#password_span").css("background", "#fff4d7");
					}else if(/^\d{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码不能全位数字';
						$("#password_span").css("background", "#fff4d7");
					}else if(/^\s{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码中不允许有空格';
						$("#password_span").css("background", "#fff4d7");
					}else if(/^[^a-z0-9A-Z]{6,20}$/.test(oValue)){
						oPassword_span.innerHTML = '密码不能全为符号';
						$("#password_span").css("background", "#fff4d7");
					}else{
						$("#password_span").text("");
						$("#password_span").css({
							"background":"url(../images/right.jpg) no-repeat 10px center #fff",
							"height":"20px",
						});
					}
				})
				//密码获取焦点
				$("#password").focus(function(){
					$("#password_span").text("6-20个大小写英文字母、符号或数字的组合");
					$("#password_span").css({
						"display":"block",
						"background":"#e4e4e4",
						"height":"40px",
						"top":"282px"
					})
				})
				//密码确认
				$("#affirmKey").blur(function(){
					var oPassword = document.getElementById('password');
						var oPassw = document.getElementById('affirmKey');
						var oPassw_span = document.getElementById("affirmKey_span");
						if(oPassword.value !== oPassw.value){
							oPassw_span.innerHTML = '两次密码输入不一致';
							$("#affirmKey_span").css("background", "#fff4d7");

						}else if(oPassword.value == ""){
							oPassw_span.innerHTML = '请再次输入密码';
							$("#affirmKey_span").css("background", "#fff4d7");
						}else{
							$("#affirmKey_span").text("");
							$("#affirmKey_span").css({
							"background":"url(../images/right.jpg) no-repeat 10px center #fff",
							});
						}	
				})
				//获取密码确认焦点
				$("#affirmKey").focus(function(){
					$("#affirmKey_span").text("请再次输入密码");
					$("#affirmKey_span").css({
						"display":"block",
						"background":"#e4e4e4",
					})
				})
				//手机号码位数确认	
				$("#phone").blur(function(){
					var oPassword = document.getElementById('phone');
						var oPassword_span = document.getElementById("phone_span");
						var oValue = oPassword.value;
						if((/^[1]\d{10}$/).test(oValue)){
							$("#phone_span").text("");
							$("#phone_span").css({
							"background":"url(../images/right.jpg) no-repeat 10px center #fff",
							"height":"20px",
							});
						}else{
							oPassword_span.innerHTML = '格式错误，请输入正确的手机号码';
							$("#phone_span").css("background", "#fff4d7");
						}
				})
				//手机号获得焦点
				$("#phone").focus(function(){
					$("#phone_span").text("请填写正确的手机号码，以便接收订单通知，找回密码等");
					$("#phone_span").css({
						"display":"block",
						"background":"#e4e4e4",
					})
				})
				//短信验证码
				$("#msgcode").blur(function(){
					$("#msgcode_span").css("display","none");
				})
				//短信验证码获取焦点时
				$("#msgcode").focus(function(){
					$("#msgcode_span").text("如无法接受验证码，请重启手机并确认短信未被拦截！4G用户请关闭4G网络进行接收");
					$("#msgcode_span").css({
						"display":"block",
						"background":"#e4e4e4",
					})
				})

	}
	return{
		store:store
	}
})


