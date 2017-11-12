$(function(){
     //获取cookie
      $.cookie("mycart")
     console.log(JSON.parse( $.cookie("mycart")))
     
    if( $.cookie("mycart")){  
    	var arr=JSON.parse( $.cookie("mycart"))
    	   
    	for(var i=0;i<arr.length;i++){
    	
    		   obj=arr[i]
    		   console.log(obj.img) 
    		var tr=$("<tr class=goods></tr>" ).appendTo(".table")
    		     $("<td class=goodsselect><input type=checkbox check="+obj.checked+ "/></td>" ).appendTo(tr) 
			$("<td class=pic><img src="+obj.img+"/></td>" ).appendTo(tr)
		    $("<td class=name>"+obj.name+"</td>" ).appendTo(tr)
		    $("<td class=num>"+obj.num+"</td>" ).appendTo(tr)
		    $("<td class=price>"+obj.prices+"</td>" ).appendTo(tr)
		    $("<td class=price>"+obj.prices+"</td>" ).appendTo(tr)
		    $("<td class=operator><span>删除</span><span>收藏</span></td>" ).appendTo(tr)
    	}
    }else{
    	//如果购物车为空则将商品列表删除
    	$(".table").hide()
    	$(".empty").show()
     }
 
 })//$ 