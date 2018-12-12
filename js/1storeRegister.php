<?php 
	header('content-type:text/html;charset="utf-8"');
	//接受提交过来的数据
	// var_dump($_POST);
	//将所有提交过来的数据取出来
	$username = $_POST['user'];
	$password = $_POST['password'];
	$phone = $_POST['phone'];

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

	//5、准备sql语句
	$sql = "INSERT INTO user(username, password, phone) VALUES('{$username}','{$password}',{$phone});";
	// echo $sql;

	//6、发送sql语句
	$res = mysql_query($sql);

	//7、处理结果
	if($res){
		echo "插入成功";
	}else{
		echo '插入失败';
		// echo "<a href = 'insertStudents.html'>返回</a>";
	}

	//8、关闭数据库
	mysql_close($link);
 ?>