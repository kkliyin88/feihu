
//top开始
    $(function(){
			
			//获取id值
			  
		
		//获取购物车商品数量
		sum=$.cookie("sum")?$.cookie("sum"):0
		 $(".cartnum").html(sum)
		
      $.getJSON("../js/menu.json",function(obj){
			  var arr=obj.menu1
			for(var i=0;i<arr.length;i++){
				//添加图片
				var obj=arr[i]
				var li=$("<li> <a href=# class=menua>"+obj.name+"<span class=iconfont>&#xe679;</span></a></li>").appendTo($(".menulist"))
				var menusec=$("<div class=menusec></div>").appendTo(li)
                var menusecl=$("<div class=menusecl></div>").appendTo(menusec)
                var menusecr= $("<div class=menusecr></div>").appendTo(menusec)
//              var prolist= $("<ul class=prolist> </ul>").appendTo(menusecl)
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
		 
		
		//获取Id名称 
////	
//		var id=location.pathname.split("/")
//		    id=parseInt(id[id.length-1])
		  
		//	//创建放大镜模块  
		
		  $.getJSON("../js/phone.json",function(obj){
		  	 
//		  	var ID="id"+id+"id";
               var url=location.search
			console.log(url)
			var id=url.substring(1)  
			  console.log(id)

		     var obj=obj.id2050226000733id   //全局变量
		  	  var smallimg=obj.smallimg  
		      var bigimg=obj.bigimg
		 //左边商品图片部分
		     var img=$("<img class=pic src="+obj.img+" />").appendTo(".img")
		     
		      $("<img class=bigimg src="+obj.img+"  />").appendTo(".bigdiv") 
		          
		  	for(var i=0;i<smallimg.length;i++){
			  	$("<li><img src="+smallimg[i]+"/> </li>").appendTo(".smallimg")
			  } 
		  	//添加放大镜功能
		  	//添加选择图像
		  	$(".smallimg li").mouseenter(function(){
		  		$(this).css({"opacity":1,}).siblings().css({"opacity":0.6})
		  		  var i=$(this).index()
		  		
		  		 $(".img").html("<img class=pic src="+ bigimg[i] + "/>")
		  		 $(".bigdiv").html("<img class=bigimg src="+ bigimg[i] + "/>")
		     
		  	   })
		  		 	 //放大缩小
			 $(".img").mousemove(function(e){
			 	 	 $(".scall").show()
			 	 	 $(".bigdiv").show()
			 	 	 var scall=$(".bigimg").width() / $(".img").width();
			 	 	 
			 	     var x=e.pageX-$(".img").offset().left-$(".scall").width()/2
		 	        var y=e.pageY-$(".img").offset().top-$(".scall").height()/2
//		 	        //控制边界
		 	        if(x<0){x=0}
		 	        else if (x>$(".img").width()-$(".scall").width())
		 	        {x=$(".img").width()-$("#scall").width();}
		 	        
		 	        if(y < 0){y=0}
		 	        else if(y>$(".img").height()-$(".scall").height())
		 	        {y=$(".img").height()-$(".scall").height()}
//		 	        
		 	        //放大
		 	        $(".scall").css({left:x,top:y})
		 	         $(".bigimg").css({left: -scall*x,top: -scall*y});
		 	         
		 	         
		 	    })//mousemove  
		 	    
		 	    $(".img").mouseleave(function(){
		 	    	 $(".scall").hide()
			 	 	 $(".bigdiv").hide()
		 	    })//leave
		         
		//右边商品介绍部分name
		$("<h1 class=detailname>"+obj.name+"<span style=color:red> "+obj.msg1+"<span></h2>").appendTo(".name")
		$("<h2 class=detailname2>"+obj.name2+"</h2>").appendTo(".name")
		//添加价格栏prices
		$("<span class=pricesl>飞虎价: <strong>"+obj.unit+obj.prices+"<strong></span ><span class=pricesr>商品编号："+obj.id+"</span>").appendTo(".prices")
		//添加提示栏prompt
	     $("<p>"+obj.prompt+"</p>").appendTo(".prompt")
	     $("<p>"+obj.service+"</p>").appendTo(".prompt")
		
		//添加产品出厂信息
		 $("<span>"+obj.supplier+"</span>").appendTo(".supplier")
		 $("<span>"+obj.weight+"</span>").appendTo(".weight")
		 $("<span>"+obj.originplace+"</span>").appendTo(".originplace")
		 $("<span>"+obj.starttime+"</span>").appendTo(".starttime")
		  
		  //添加详情图片
		  var arr3=obj.detailimg
	       for(var kk=0;kk<arr3.length;kk++){
	       	 $("<img src="+arr3[kk]+"/>").appendTo(".introduce")
	       	 
	       }
	       
	       //添加介绍详情切换效果
	       var arr4=obj.message
	       for(var l=0;l<arr4.length;l++){
	       	 	 $("<li><img src="+arr4[l]+"/></li>").appendTo(".tab_list ")
	       	  	 
	       }  
	       
	       $(".demnav_list li").click(function(){
	       	     
	       	   	   $(".tab_list li").hide()
	       	   	   $(this).addClass("over").siblings().removeClass()
	       	   var index=$(this).index()
	       	    console.log(index)
	       	   $(".tab_list li").eq(index).show().siblings().hide()
	       	console.log( $(".tab_list li").eq(0).html() ) 
	       })
	       
	    })//getjson
	    
	    //添加购物跳入效果
	      //添加全局的的购物车商品数量,如果存在sum则取出sum值
	      sum=$.cookie("sum")?parseInt(JSON.parse($.cookie("sum"))):0
	      
	    var offset = $("#cart").offset();  //结束的地方的元素
	$(".addenjoy").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		var addcar = $(this);
		var img = $(".pic").attr('src');
		
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			//开始位置
			start: {
				left: event.clientX,
				top: event.clientY
			},
			//结束位置
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			//结束后
			onEnd: function(){
				flyer.remove();
			}
		});//fly
		
		//加入购物车cookie操作
	    //动态创建页面
	     
			
	          
	          
		   $.getJSON("../js/phone.json",function(obj){
		   	
//		   	for(var i=0;i<obj.length){}
		   	
		   	
		    	var obj=obj.id2050226000450id
			   var cookieobj={
			        id:obj.id,
			         name:obj.name2,
			        price:obj.prices,
			       img:obj.img2,
			      checked:true,
			        num:"1",
			       unit:obj.unit
			    }
			     
			    //购物车总数
			    
			    //获取cookie,判断cookie中是否有此产品的记录
			        var arr=$.cookie("mycart")
			        console.log(arr)
			      if(arr){
				      	var arr=JSON.parse(arr)//获取原来数据
				        //遍历数组查找相同的id好 
				        var flag =true;
				        for(var i=0;i<arr.length;i++){
				        	 if(cookieobj.id==arr[i].id){
				        	     arr[i].num++
				        	     flag =false;
				        	     break;
				        	     console.log("进入true")
				        	  }
				        } 
				        
				        if(flag){
				            
				        	 arr.push(cookieobj) ;
				        	  console.log("进入false")
				         }   
				        
                    }else{
                    	  arr=[];  
                    	 arr.push(cookieobj) ;
                    }
				   //显示购物车总数     
				    	console.log(arr.length)
				    	
				 
				   for(var r=0;r<arr.length;r++){
				     sum=parseInt(arr[r].num)+sum
				    console.log(parseInt(arr[r].num))
				   }
			    $(".cartnum").html(sum)
			  
			   $.cookie("sum",JSON.stringify(sum),{expires:7,path:"/"})
			    $.cookie("mycart",JSON.stringify(arr),{expires:7,path:"/"})
		  })//getJSON
	});//enjoy click  
})//$
   

	
















