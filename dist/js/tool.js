
//阻止默认行为
function preDef(evt){
	var e = evt || window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
function insertAfter(newNode, oldNode){
				var parentNode = oldNode.parentNode;
				if(oldNode.nextSibling){
					parentNode.insertBefore(newNode, oldNode.nextSibling);
				}else{
					parentNode.appendChild(newNode);
				}
			}

function randomColor(){
				var str = "rgba(" + Math.floor(Math.random() * 256) + "," +  Math.floor(Math.random() * 256)+ "," + Math.floor(Math.random() * 256) + ",1)";
				return str;
			}
function removeSpaceNode(nodes){
				var arr = []; //存储不是空白的节点
				for(var i = 0; i < nodes.length; i++){
					if(!(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))){
						arr.push(nodes[i]);
					}
				}
				return arr;
			}
function removeSpaceNode2(parentNode){
				var nodes = parentNode.childNodes;
				for(var i = 0; i < nodes.length; i++){
					if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
						//如果，判断当前的某一个节点是空白节点，直接从父节点上将这个节点铲除掉。
						parentNode.removeChild(nodes[i]);
					}
				}
			}

//各个浏览器都兼容的  （拓展）
			function elementsByClassName(node, classStr){
				//1、先去获取node节点下，所有的子节点
				var nodes = node.getElementsByTagName("*");
				//2、通过遍历，找出符合条件的元素
				var arr = [];
				for(var i = 0; i < nodes.length; i++){
					if(nodes[i].className == classStr){
						arr.push(nodes[i]);
					}
				}
				return arr;
			}


//跨浏览器的获取当前有效样式的方法
			function getStyle(node, styleStr){
				return node.currentStyle ? node.currentStyle[styleStr] : getComputedStyle(node)[styleStr];
			}

function bubbleSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = 0; j < (arr.length - i - 1); j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

function changeSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		//被比较的数
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

function showTime(){
				var d = new Date();
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var date = d.getDate();
				var hour = d.getHours();
				var min = d.getMinutes();
				var sec = d.getSeconds();
				var week = d.getDay();

				week = chineseFromNumber(week);
				hour = doubleNumber(hour);
				min = doubleNumber(min);
				sec = doubleNumber(sec);

				var str = year + '年' + month + '月' + date + '日 星期' + week + " " + hour + ":" + min + ":" + sec;
				return str; 
			}

			//传入数字，转成双位数写法
			function doubleNumber(num){
				if(num < 10){
					return "0" + num;
				}else{
					return num;
				}
			}

			//传入数字，返回对应中文
			function chineseFromNumber(num){
				switch(num){
					case 0:
						return '日';
						break;
					case 1:
						return '一';
						break;
					case 2:
						return "二";
						break;
					case 3:
						return '三';
						break;
					case 4:
						return '四';
						break;
					case 5:
						return '五';
						break;
					case 6:
						return '六'
						break;
					default:
						console.log("error");
						break;

				}
			}
