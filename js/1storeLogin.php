<?php 
	header('content-type:text/html;charset="utf-8"');
	$username = $_POST['username'];
	$password = $_POST['password'];
	//做md5处理
	//1、连接数据库
	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}
	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("1store");
	$sql = "select * from user where username='{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if(!$row){
			echo "用户名不存在";
		}else{
			$sql = "select * from user where username='{$username}' AND password='{$password}'";
			$res = mysql_query($sql);
			$row = mysql_fetch_assoc($res);
			if($row){
				echo '登陆成功';
			}else{
				echo "用户名或密码错误";
			}
		}

 ?>