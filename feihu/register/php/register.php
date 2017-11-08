<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf8');

    $username= $_POST["username"];
	$password= $_POST["password"];
	$email= $_POST["email"];
	$greatpeople= $_POST["greatpeople"];
	$activenum= $_POST["activenum"];

	//PHP返回
//
//password,email,greatpeople,activenum
//'$password','$email','$greatpeople','$activenum'
$conn3 = new mysqli("127.0.0.1", "root", "", "mydb") or die("连接失败！");
$sql3 = "insert into users(username,password,email,greatpeople,activenum) values('$username','$password','$email','$greatpeople','$activenum')";
$result = $conn3->query($sql3);
if ($result){
	echo "插入数据成功";
}
else {
	echo "插入数据失败";
}
$conn3->close();

//if ($result){
//	    //注册成功
//	   $obj = array("status"=>1, "msg"=>"恭喜您，注册成功！");
////          echo json_encode($obj);
//}
//else {
//
//	  //注册失败
//          $obj = array("status"=>0, "msg"=>"注册失败，请重试！");
////          echo json_encode($obj);
//}
//$conn3->close();

?>;