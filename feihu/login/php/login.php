<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf8');

    $username= $_POST["username"];
	$password= $_POST["password"];


	//PHP返回
//

$conn3 = new mysqli("127.0.0.1", "root", "", "mydb") or die("连接失败！");
$sql3 = "select * from users where username='$username' and password='$password'";
$result = $conn3->query($sql3);

	
if ($result && $result->num_rows>0) {
    //登录成功
    $obj = array("status"=>1, "msg"=>"登录成功！");
    echo json_encode($obj);
}
else {
    //登录失败
    $obj = array("status"=>0, "msg"=>"登录失败，用户名或密码错误！");

    echo json_encode($obj);
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

?>