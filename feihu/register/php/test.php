<?php

//后台文件设置支持跨域（PHP）
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf8');


$conn3 = new mysqli("127.0.0.1", "root", "", "mydb12") or die("连接失败！");
$sql3 = "insert into books(name,url) values('我去', 'www.aaa.com')";
$result = $conn3->query($sql3);
if ($result){
    echo $result;
}
else {
    echo "插入数据失败！";
}
$conn3->close();
?>