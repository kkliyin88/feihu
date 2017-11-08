$(function(){
	
		     var username=$(".ipt input").eq(0).val()
		      var password=$(".ipt input").eq(1).val()
	        var data={username:username,password:password}     
	        $.post("http://127.0.0.1/feihu/register/php/login.php",data,function(obj){
//	    
	        })//post
})//$
