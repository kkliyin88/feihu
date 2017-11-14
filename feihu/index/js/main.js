
//top开始
    $(function(){
				
				//通过ajax获取jsonwen文件
      $.getJSON("../js/maindata.json",function(obj){
      	      
			  var arr=obj.secondkill
			for(var i=0;i<arr.length;i++){
				//添加图片
				var obj=arr[i]
				 var li=$("<li> </li>").appendTo($("#kist"))
				var dl=$("<dl> </dl>").appendTo($(li))
				
				var dt=$("<dt> </dt>").appendTo($(dl))
				var dd=$("<dd> </dd>").appendTo($(dl))
				var img=$("<a href='#'><img src="+ obj.img +"/></a>").appendTo($(dt))
				//添加文字
				$("<a href=# class=goodsname ><h3>"+obj.name+"</h3></a>").appendTo($(dd))
				$("<a href=# class=prompt ><span>"+obj.prompt+"</span></a>").appendTo($(dd))
				var wrapprice=$("<a href=# class=wrapprice> </a>").appendTo($(dd))
		    	var dd=$("<h2 >"+obj.unit +obj.killprices +"<span>"+obj.unit+obj.prices+"</span></h2><h4 >"+obj.killmsg+"</h4>").appendTo($(wrapprice))		  			
			}
			//给秒杀页面添加点击动态效果
			$("#kist ").on("mouseenter","img",function(){
				$(this).width($(this).width()+5).fadeTo("fast",0.7)
				$(this).height($(this).height()+5)
			 })		
			$("#kist ").on("mouseleave","img",function(){
				$(this).width($(this).width()-5).fadeTo("fast",1)
				$(this).height($(this).height()-5)
			 })	
			
		})	
			 show_time()
			 addmain("mainphone","../js/phone.json")
			 addmain("mainshoes","../js/shoes.json")
		//添加页面活动效果
	
})//$
 
	function addmain(kk,json){
			 var kk="."+kk
		 $.getJSON(json,function(obj){
			   var arr=obj.phone
			   var arr2=obj.brand
			   var mainl=$("<div class=mainl></div>").appendTo( $(kk))
			   var mainr=$("<div class=mainr></div>").appendTo( $(kk))
			   var ul2=$("<ul class=mainlist></ul>").appendTo( $(mainr))
			    var mainll=$("<div class=mainll></div>").appendTo( $(mainl))
			    var mainlr=$("<div class=mainlr></div>").appendTo( $(mainl))
			    var ul1=$("<ul></ul>").appendTo( $(mainlr))
			   for(var i=0;i<arr.length;i++){
			   		var obj=arr[i]
			   		if(i==0){
			   		   $("<a href=../../goodslist/html/goodslist.html?id"+obj.id+" ><img src="+obj.img+"></a>").appendTo( $(mainll))
			   		}else if(i==1)
			   		{ $("<li><a href=../../product/html/product.html?id"+obj.id+" ><img src="+obj.img+"></a></li>").appendTo( $(ul1))}
			   		else if(i==2)
			   		{{ $("<li><a href=../../product/html/product.html?id"+obj.id+" ><img src="+obj.img+"></a></li>").appendTo( $(ul1))}}
			   		else{
			   		var dl=$("<li><dl></dl></li>").appendTo($(ul2))
			   		 $(" <dt><a href=../../product/html/product.html?id"+obj.id+" ><img src="+obj.img+"></a></dt>").appendTo( $(dl))
			   		  $(" <dd><a href=../../product/html/product.html?id"+obj.id+" class='mainname'>"+obj.name+"</a></dd>").appendTo( $(dl))
			   		 $("<a href=../../product/html/product.html?id"+obj.id+"><b class=mainprice>"+obj.unit+obj.prices+"</b></a>").appendTo( $(dl))	    
			   		}
		        }//for
		        
		       //添加brand
			var mainbrand=$("<ul class=mainbrand></ul>").appendTo($(kk))
			for(var i=0;i<arr2.length;i++){
			{ $("<li><a href=#><img src="+arr2[i]+"></a></li>").appendTo( $(mainbrand))}
			}
			//给brand添加点击动态效果
			
			$(".mainbrand ").on("mouseenter","img",function(){
				$(this).width($(this).width()+5).fadeTo("fast",0.7)
				$(this).height($(this).height()+5)
					
			})
			$(".mainbrand ").on("mouseleave","img",function(){
				$(this).width($(this).width()-5).fadeTo("fast",1)
				$(this).height($(this).height()-5)
			})
				
		    //给右边产品添加点击动态效果
			$(".mainlist ").on("mouseenter","img",function(){
				$(this).width($(this).width()+5).fadeTo("fast",0.7)
					$(this).height($(this).height()+5)
					
			})
			$(".mainlist ").on("mouseleave","img",function(){
				$(this).width($(this).width()-5).fadeTo("fast",1)
				$(this).height($(this).height()-5)
			 })
			//给左边产品添加点击动态效果	
			$(".mainl ").on("mouseenter","img",function(){
				$(this).width($(this).width()+5).fadeTo("fast",0.7)
				$(this).height($(this).height()+5)
			 })		
			$(".mainl ").on("mouseleave","img",function(){
				$(this).width($(this).width()-5).fadeTo("fast",1)
				$(this).height($(this).height()-5)
			 })	
	    })
	}//function



function show_time(){ 
    var start = new Date().getTime(); //设定当前时间
    var end =  new Date("2017/11/15 00:00:00").getTime(); //设定目标时间
    // 计算时间差
     var num= end-start 
     
    setInterval(function(){
	     num--
	     var kk=num
	    // 天
	    
	     var int_day = Math.floor(kk/86400) 
	     if(kk>86400){ kk-=int_day * 86400; }
	    // 时
	    var int_hour = Math.floor(kk/3600) 
	      if(kk>3600){   kk-=int_hour * 3600;  }
//	    // 分 
	    var int_minute = Math.floor(kk/60) 
	    if(kk>60){ kk-=int_minute * 60;  }
//	    // 秒 
	    var int_second= Math.floor(kk)
	    // 时分秒为单数时、前面加零   
	    if(int_day < 10){ 
	        int_day = "0" + int_day; 
	    } 
	    if(int_hour < 10){ 
	        int_hour = "0" + int_hour; 
	    } 
	    if(int_minute < 10){ 
	        int_minute = "0" + int_minute; 
	    } 
	    if(int_second < 10){
	        int_second = "0" + int_second; 
	    } 
	      $("#miaosha ul li span").eq(0).html(int_hour); 
          $("#miaosha ul li span").eq(1).html(int_minute); 
          $("#miaosha ul li span").eq(2).html(int_second); 
        },1000)
}


