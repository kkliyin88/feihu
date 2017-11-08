
//创建阿贾克斯
function createXHR(){
	if (window.XMLHttpRequest){
		return new XMLHttpRequest()
	}else{
		return new ActiveXObject("Microsoft.XMLHTTP") //兼容IE6
	}
}

//获取异步数据

//function receiveXHR(xhr){
//	xhr.onreadystatechange=function(){
//	    if(xhr.readyState==4 && xhr.status==200){
//	    	return xhr.responseText
//	    }else{
//	    	return 'error. 状态码:'  + xhr.status + '错误信息:'+ xhr.statusText
//	    }
//	}
//}

//Ajax封装


function ajax(obj){
	
	obj.type = obj.type ||"get"; //默认是get
	obj.async = obj.async==undefined ? true : obj.async; //默认是true
	 
	 //创建对象
	 var xhr=createXHR()
	//open()
	var paramstr=getParamStr(obj.data)
	if(obj.type.toLowerCase()=="get"){
     obj.url+=paramstr.length>0 ? ("?" + paramstr) : ""
    }
	xhr.open(obj.type,obj.url,obj.async)
	
	//send()
     if (obj.type.toLowerCase()=="get"){
	  xhr.send(null)
	}else if (obj.type.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		xhr.send(paramstr)
	}
	  
	 //接收数据
	 if(obj.async){
		 	xhr.onreadystatechange = function(){
			 	if(xhr.readyState==4){
			 		callback()
			 	}
			}//onchange
	 }else{callback();
	 }//if
	 
	 
	    function callback(){
     	if (xhr.status==200){
     		if (obj.success) {
				obj.success(xhr.responseText);
			}
     	}
     }//callback
     
}//ajax 
	 
  

//获取参数字符串
// {regname:"zhangsan", pwd:"123456"} -> regname=zhangsan&pwd=123456
	function getParamStr(obj){
		var arr = []
		for (var key in obj) {
			var str = key + "=" + obj[key];  //regname=zhangsan
			arr.push(str);
		}
		return arr.join('&');
	}

