$(function(){
	 $(".btn button").click(function(){
	    var username=$(".ipt input").eq(0).val()
	    var password=$(".ipt input").eq(1).val()
	    var data={username:username,password:password}  
	    console.log("点击")
		$.post("http://127.0.0.1/FeiHuProject/feihu/login/php/login.php",data,function(obj){      
				var obj=JSON.parse(obj);
				console.log(obj.msg);
            if(obj.status==1){
              $(".prompt").find("span").html(obj.msg)
               alert("登录成功，点击确认跳转到主页")
             location.href = "../../index/html/index.html";
            }else{
            	$(".prompt").find("span").html("&nbsp;&nbsp;你输入的用户名不存在！").addClass("promptsp")
            }
         
	        })//posts
    })//btn
})//$
