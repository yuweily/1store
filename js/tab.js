define(['jquery'], function($){
	function tab(){
		$.ajax({
			url: "../data/tab.json",
			success: function(data){
				//先要创建所有的按钮，添加到页面上
				var titleArr = data.title;
				for(var i = 0; i < titleArr.length; i++){
					if(i == 0){
						$(`<button class = 'active'>${titleArr[i]}</button>`).appendTo($("#div1"));
					}else{
						$(`<button>${titleArr[i]}</button>`).appendTo($("#div1"));
					}
				}
				//创建div
				var descArr = data.descs;
				for(var i = 0; i < descArr.length; i++){
					if(i == 0){
						$(`<div style = 'display: block'>${descArr[i].text}</div>`).appendTo($("#div1"));
					}else{
						$(`<div>${descArr[i].text}</div>`).appendTo($("#div1"));
					}
				}
			}
		})
		//我们通过事件委托
		$("#div1").on("click", 'button', function(){
			$(this).attr("class", 'active')
			.siblings().attr("class", '');

			$("#div1").find("div").css("display", 'none')
			.eq($(this).index()).css("display", 'block');
		})

	}
	return {
		tab: tab
	}
})





