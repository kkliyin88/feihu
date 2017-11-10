
//top开始
    $(function(){
			
				//通过ajax获取jsonwen文件
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
		
		//	//创建放大镜模块
		
		  $.getJSON("../js/phone.json",function(obj){
		  	 
		      var obj=obj.id2050226000450id
		  
		  	  var smallimg=obj.smallimg
		      var bigimg=obj.bigimg
		     var img=$("<img src="+obj.img+" />").appendTo(".img")
		     var scall=$("<div class=scall> </div>").appendTo(".img")
		  	for(var i=0;i<smallimg.length;i++){
			  	$("<li><img src="+smallimg[i]+"/> </li>").appendTo(".smallimg")
			  	}
	     	})	
})//$
 

















