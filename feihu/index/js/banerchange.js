	 
	$(function(){
				
				//通过ajax获取jsonwen文件
				   $.getJSON("../js/banner.json",function(obj){
					   	 arr=obj.data
					   	
							   for(var i=0;i<arr.length-1;i++){
								      obj=arr[i]
								   var li1=$("<li> </li>").appendTo($("#banlist1"))
//								   var li2=$("<li> </li>").appendTo($("#list2"))
								   	$("<a href=# ><img src="+ obj.img +" ></a>").appendTo(li1);
//								   	$("<img src="+ obj.img +" >").appendTo(li2);
						       }
							    size=arr.length-1
				   })//getjson
				   var num=0
				  //通过JQ设置透明
				   	function move(){
					$("#banlist1 li").eq(num).fadeIn(3000).siblings().fadeOut()
//					$("#banberlist2 li").eq(num).addClass("active").siblings().removeClass("active"); 
				}
				   var timer=setInterval(function(){
				   	    	num++
				   	    	if(num>size){num=0}
				   	    	move()
				   },2000)
			 
			 //添加鼠标移入事件
			 $("#ban").mouseenter(function(){
			 	clearInterval(timer)
			 	
			 })
		     $("#ban").mouseleave(function(){
		     	
				var timer=setInterval(function(){
					   	    num++
					   	    if(num>size){num=0}
					   	    move()
					   	          
					   },5000)
			 	
			 })
		     
		     
			
			})//$