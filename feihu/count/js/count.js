
$(function(){
     //获取cookie
    console.log($.cookie("mycart"))
    var arr=JSON.parse($.cookie("mycart"))
         console.log(arr.length)  
         reflash()
    function reflash(){
//  	 $(".goods").empty()
    	
	    if( $.cookie("mycart")){    
	    	
	    	   
	    	 var arr=JSON.parse($.cookie("mycart"))
	    	  console.log(arr) 
        
           	console.log(arr.length)
	    	for(var i=0;i<arr.length;i++){
	    		var  obj=arr[i]
	    		var tr=$("<tr class=goods></tr>" ).appendTo(".table")
	    	    $("<td ><input class=select type=checkbox /></td>" ).appendTo(tr) 
				$("<td class=pic><img src="+obj.img+"/></td>" ).appendTo(tr)
			    $("<td class=name>"+obj.name+"</td>" ).appendTo(tr)
			    var tdnum=$("<td class=num> </td>" ).appendTo(tr)
			    var minus=$( "<span class=iconfont>&#xe61e;</span>").appendTo(tdnum)
			    $(minus).addClass("minus")
			    var ipt=$("<input class=ipt />").appendTo(tdnum)
			    var add=$("<span class=iconfont >&#xe62a;</span>").appendTo(tdnum)
			        $(add).addClass("add")
			    $("<td class=price>"+obj.prices+"</td>" ).appendTo(tr)
			    $("<td class=price>"+obj.prices+"</td>" ).appendTo(tr)
			    $("<td class=operator><span class=del>删除</span><span class=like>收藏</span></td>" ).appendTo(tr)
			    $(".ipt").eq(i).val(obj.num)
			    $(".select").eq(i).prop(obj.checked)
			    
	    	 }//for
	    
	    	//显示商品数量num
	    	
	    	//添加加减事件
	    	//+
	         $(".table").on("click",".add",function(){
	         		var cookieArr = JSON.parse( $.cookie("mycart") );
					var index = $(this).index(".table .add");
					
					cookieArr[index].num++;
					var sum=$.cookie("sum")
					  sum++
				  $.cookie("sum",JSON.stringify(sum), {expires:30})
				$.cookie("mycart", JSON.stringify(cookieArr), {expires:30,path:"/"});
				reflash()
	         })
//	    	
	    	  $(".table").on("click",".minus",function(){
	         		var cookieArr = JSON.parse( $.cookie("mycart") );
					var index = $(this).index(".table .minus");
					if(cookieArr[index].num>0){cookieArr[index].num--;}
				    $.cookie("mycart", JSON.stringify(cookieArr), {expires:30});
				    var sun=$.cookie("sum")
					  sum--
				  $.cookie("sum",JSON.stringify(sum), {expires:30,path:"/"})
				    reflash()
	         })
	    	 // checkbox
	    	   $(".table").on("click",".select",function(){
	    	   	    var cookieArr = JSON.parse( $.cookie("mycart") );
	    	   	    console.log(cookieArr)
					var index = $(this).index(".table .select");
				    cookieArr[index].check = !cookieArr[index].checked;
				    $.cookie("mycart", JSON.stringify(cookieArr), {expires:30,path:"/"});
				    reflash()
	             })
	    	   
	    	   
	    	     
	    }else{
	    	//如果购物车为空则将商品列表删除
	    	$(".table").hide();
	    	$(".empty").show();
	    	console.log("数据为空");
	    	$(".total").hide();
	    }//if
//	    
     } //function
 })//$ 