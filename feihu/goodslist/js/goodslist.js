
//top开始
    $(function(){
    	  brand=1
    	  class1=1
    	  
      $.getJSON("../js/menu.json",function(obj){
			  var arr=obj.menu1
			for(var i=0;i<arr.length;i++){
				//添加图片
				var obj=arr[i]
				var li=$("<li> <a href=# class=menua>"+obj.name+"<span class=iconfont>&#xe679;</span></a></li>").appendTo($(".menulist"))
				var menusec=$("<div class=menusec></div>").appendTo(li)
                var menusecl=$("<div class=menusecl></div>").appendTo(menusec)
                var menusecr= $("<div class=menusecr></div>").appendTo(menusec)
                  var arr2=obj.prolist
                  var arr3=obj.prolist2
                $("<h2>热门品牌</h2> ").appendTo(menusecr)
                for(var k=0;k<arr2.length;k++){
                     $("<a class=alist href=#> "+arr2[k]+"</a> ").appendTo(menusecl)
                }  
                for(var j=0;j<arr3.length;j++){
                 $("<a class=alist2 href=#> "+arr3[j]+"</a> ").appendTo(menusecr)
                }
			}
			//添加隐藏效果
			$(".allpro").mouseenter(function(){
				$(".allpro ul").show()
			})
			//鼠标滑过li弹出二级菜单
			$(".allpro ul li").mouseenter(function(){
				$(".allpro ul li div").hide();
				$(this).find("div").show().css({"border-left":0})
				$(this).addClass("liright")
				//设置二级菜单位置
				var i=$(this).index() 
			    if(i<4){
			    	$(".allpro ul li div").css({"top":"-90px"})
			    }
			     if(i>=4){
			    	$(".allpro ul li .menusec").css({"top":-3*52+"px"})
			    }
			})
				$(".allpro ul li").mouseleave(function(){
				
				$(this).removeClass("liright")
				
			})
				
				$(".allpro ul").mouseleave(function(){
				   $(this).hide()
				})
		})	
		//开始商品列表部分
		reflash()
		function reflash(){
			$("#list").html(".")
			 $.getJSON("../js/goodslist.json",function(obj){
				  
				var  brandId=obj.brand
				var  classId=obj.class1
				 var arr=obj.phone
				arr2=[]
			    if(brand<=1&&class1<=1){
			    	for(var i=0;i<arr.length;i++){
			    		arr2.push(arr[i])
			    	}  
			       console.log(11)
			    	add(arr2)
			    }else if(brand>1&&class1==1){
			    	console.log(22)
			    	console.log("brand="+brand);console.log("class1="+class1)
			    	for(var i=0;i<arr.length;i++){
			    		if(arr[i].brand==brand){
			    			arr2.push(arr[i])
			    		}
			    	}
			    	add(arr2)
			    }else if(brand==1&&class1>1){
			    	console.log(33)
			    	console.log("brand="+brand);console.log("class1="+class1)
			    	for(var i=0;i<arr.length;i++){
			    		if(arr[i].class1==class1){
			    			arr2.push(arr[i])
			    		}
			    	add(arr2)	
			    	}	
			    }else{
			    	console.log(44)
			    	console.log("brand="+brand);console.log("class1="+class1)
			    	console.log(arr.length)
                   
			    	for(var i=0;i<arr.length;i++){
			       		console.log(arr[i].class1==class1);
			    		if(arr[i].class1==class1 && arr[i].brand==brand){
			    			arr2.push(arr[i])
			    			console.log("符合条件的产品")
			    		}
			    	}
			    	add(arr2)
			    }
			    	
		   })//get json
        }//func
        
           $("#brand").on("click","li",function(){
		var index= $(this).index();
		console.log(index)
		$(this).addClass("active").siblings().removeClass("active")
		  brand= index;
		reflash()
	     })
	     
	      $("#class1").on("click","li",function(){
		var index= $(this).index();
	       	console.log(index)
		$(this).addClass("active").siblings().removeClass("active")
		class1=index;
		reflash()
	     })
	       function add(arr){
                 for(var i=0;i<arr.length;i++){
		    	var li=$("<li></li>").appendTo($("#list"))
		    	 var dl=$("<dl></dl>").appendTo($(li))  
		   		 $(" <dt><a href=../../product/html/product.html?id"+arr[i].id+" ><img src="+arr[i].img+"></a></dt>").appendTo( $(dl))
		   		 
		   		 var dd= $("<dd></dd>").appendTo( $(dl))
		   		     $("<a href=../../product/html/product.html?id"+arr[i].id+" class='mainname'>"+arr[i].name+"</a>").appendTo( $(dd))
		   		     
		   		 $("<a href=../../product/html/product.html?id"+arr.id+"><b class=price>"+arr[i].unit+arr[i].price+"</b></a>").appendTo( $(dd))
		   		  } 
		   }		  
		   		  
})//$
   

	
















