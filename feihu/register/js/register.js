   $(function(){
				

				
//$.post("test.php", { 'choices[]': ["Jon", "Susan"] });
	//$.post("test.php", { name: "John", time: "2pm" },
// function(data){
//   process(data);
// }, "xml");
//通过ajax获取jsonwen文件
     $(".text button").click(function(e){
     	e.preventDefault()
     	console.log("点击提交")
     var username=$(".ipt").eq(0).val()
     var password=$(".ipt").eq(1).val()
     var email=$(".ipt").eq(3).val()
      var greatpeople=$(".ipt").eq(4).val()
      var activenum=$(".ipt").eq(5).val()
      var activenum=$(".ipt").eq(5).val()
         var btn=$(".ipt").eq(8)
	   //提交数据
	   var  
	      data={username:username,password:password,email:email,greatpeople:greatpeople,activenum:activenum}      
	        $.post("http://127.0.0.1/FeiHuProject/feihu/register/php/register.php",data,function(obj){
//	     obj=JSON.parse(obj)
          console.log(obj)
	        })//getJSON
	  
//	    }
     }) //click 
     
           //验证码在html页面
	      //正则表达式  
	      
            //验证用户名
            
            //定义全局变量falg
         
//          var flag0=0
//	      $(".ipt").eq(0).focus(function(){
//	      	$(".prompt").eq(0).html("4-20字符，可由英文、数字组成")
//	      })
//	      
//	      $(".ipt").eq(0).blur(function(){
//	      	  
//	          var str0=$(".ipt").eq(0).val()
//	          var check_name= /^[0-9a-zA-Z]{4,14}$/.test(str0)
//	          if(check_name){ $(".prompt").eq(0).html(" ");flag0=1} 
//	          if(str0.length<1){$(".prompt").eq(0).html("用户名不能为空");}
//	          if(!check_name){$(".prompt").eq(0).html("用户名长度必须在4-20位之间");}
//	      })
//	      
//	      //验证密码
//	     var flag1=0
//	     $(".ipt").eq(1).focus(function(){
//	      	$(".prompt").eq(1).html("6-16位，可由英文、数字、特殊字符组成")
//	      })
//	      
//	      
//	     $(".ipt").eq(1).blur(function(){
//	      	
//	          var str1=$(".ipt").eq(1).val()
//	          var check_password= /^\w{6,16}$/.test(str1)
//	          if(check_password){ 
//		          	if(/^[0-9]+$/.test(str1))
//		          	     {$(".prompt").html("密码不能全为数字，请用数字、字母、特殊字符字少2种组合")}
//		          	else if(/^[a-zA-Z]+$/.test(str1))
//		          	{$(".prompt").html("密码不能全为字母，请用数字、字母、特殊字符字少2种组合")}
//		          	else{$(".prompt").eq(1).html(" ");flag1=1;}
//		       }
//	          if(str1.length<1){$(".prompt").eq(1).html("密码不能为空");}
//	          if(!check_password){$(".prompt").eq(1).html("密码长度必须在6-16位之间");}
//	          
//	      })
//	      
//	      //验证两次密码是否为一致 
//      $(".ipt").eq(2).focus(function(){
//    		$(".prompt").eq(2).html("请再次输入密码")
//    })
//      $(".ipt").eq(2).blur(function(){
//		      	var str2=$(".ipt").eq(2).val()
//		      	
////先暂时不验证	      	if(str2==str1){$(".prompt").eq(2).html(" ");flag2=1;}
////		      	else{$(".prompt").eq(2).html("两次密码不一致，请检查 ");}
//	      })
//         
//         //验证邮箱  
//       var flag3=0
//      $(".ipt").eq(3).focus(function(){
//    			$(".prompt").eq(3).html("请输入邮箱地址，用于接收找回密码、接收订单通知等")
//         })
//      $(".ipt").eq(3).blur(function(){
//	       	   
//			      	var str3=$(".ipt").eq(3).val()
//			      	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/
//			      	var check_email=reg.test(str3)
//			      	
//			      	if(check_email){$(".prompt").eq(3).html(" ");flag3=1;}
//			      
//			      		else if(str3.length<1){$(".prompt").eq(3).html("邮箱不能为空 ");}
//	                else{$(".prompt").eq(3).html("邮箱格式不正确");}
//		      })
//	        
//	        
//	        //验证码
//	     var flag6=0
//	     $.idcode.setCode();   //加载生成验证码方法
//	    
//	    $("#Txtidcode").blur(function(){
//	    	console.log( $("#Txtidcode").val() )
//	        var IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
//	       	
//	        if(IsBy){
//	            $(".prompt").eq(6).html("验证码正确")
//	            flag6=1
//	        }else {
//	            $(".prompt").eq(6).html("验证码错误")
//	        }
//	    })
   
})//$