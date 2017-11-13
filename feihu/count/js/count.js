
$(function(){
     //获取cookie
         reflash()
         console.log($.cookie("mycart"))
    function reflash(){
    	
    	
	    if( $.cookie("mycart")){    
	    	 $(".goods").remove()
	    	  $(".empty").hide();
               $(".total").show();  
	    	 var arr=JSON.parse($.cookie("mycart"))
	    	for(var i=0;i<arr.length;i++){
	    		var  obj=arr[i]
	    		var tr=$("<tr class=goods ></tr>" ).appendTo(".table")
	    	     
	    	     if(obj.checked)
	    	     { $("<td class=goodsselect><input class=select type=checkbox checked=checked /></td>").appendTo(tr);}
			    else{ $("<td><input class=select type=checkbox /></td>").appendTo(tr);}
//	    	    
				$("<td class=pic><img src="+obj.img+"/></td>" ).appendTo(tr)
			    $("<td class=name>"+obj.name+"</td>" ).appendTo(tr)
			    var tdnum=$("<td class=num> </td>" ).appendTo(tr)
			    var minus=$( "<span class=iconfont>&#xe61e;</span>").appendTo(tdnum)
			    $(minus).addClass("minus")
			    $("<input class=ipt type=text value="+ obj.num +">" ).appendTo(tdnum)
			    var add=$("<span class=iconfont >&#xe62a;</span>").appendTo(tdnum)
			        $(add).addClass("add")
			    $("<td class=price>"+obj.price+"</td>" ).appendTo(tr)
			    $("<td class=price>"+obj.price+"</td>" ).appendTo(tr)
			    $("<td class=operator><span class=del>删除</span><span class=like>收藏</span></td>" ).appendTo(tr)
//			  
//			    
	    	 }//for
	    
	    	//显示商品数量num
	    	
	    	//添加加减事件
	    	//+
	         $(".goods").on("click",".add",function(){
	         		var cookieArr = JSON.parse( $.cookie("mycart") );
					var index = $(this).index(".goods .add");
					cookieArr[index].num++;
					$(".ipt").val(cookieArr[index].num)
				$.cookie("mycart", JSON.stringify(cookieArr),{expires:30,path:"/"});
				reflash();
	         })
//	    	
	    	  $(".goods").on("click",".minus",function(){
	         		var cookieArr = JSON.parse( $.cookie("mycart"));
	         		console.log(cookieArr);
					var index = $(this).index(".goods .minus");
					if(cookieArr[index].num>0){cookieArr[index].num--;}
					console.log(cookieArr[index].num);
					$(".ipt").val(cookieArr[index].num)
				    $.cookie("mycart", JSON.stringify(cookieArr), {expires:30,path:"/"});
				    reflash()
	       })  
	    	 // checkbox
	    	   $(".goods").on("click",".select",function(){
	    	   	    var cookieArr = JSON.parse( $.cookie("mycart") );
	    	   	    console.log(cookieArr)
					var index = $(this).index(".goods .select");
					console.log([index])
					console.log(cookieArr[index])
					console.log(cookieArr[index].checked)
				    cookieArr[index].checked=!cookieArr[index].checked
				 
				   //设置选框的值
				  
				    $.cookie("mycart", JSON.stringify(cookieArr), {expires:30,path:"/"});
				    isAllcheck() 
				    reflash()
	             })
	    	   
	    	   //allcheck
	    	   var all=0
	    	    function isAllcheck(){
	    	     	   	if ( !$.cookie("mycart") ){
						return;   }
	    	     	   	
	    	     	   	var cookieArr = JSON.parse( $.cookie("mycart") );
	    	     	   	for (var i=0; i<cookieArr.length; i++) {
						all += cookieArr[i].checked;
					    }
					
					//判断子项目全选了
					if (cookieArr.length!=0 && all==cookieArr.length) {
						$("#allCheck").prop("checked", true);
					} 
					else { //没有全选
						$("#allCheck").prop("checked", false);
					}
				
	    	    }//isallcheck
	    	    
	    	       //点击全选按钮
    	    	$("#allcheck").click( function(){
				//如果没有cookie,则直接返回
				reflash()
				console.log("allcheck")
				
				if ( !$.cookie("mycart") ){
						console.log(22)
					return;
				}
				var cookieArr = JSON.parse( $.cookie("mycart") );
				   //遍历cookieArr
					console.log(11)
				for (var i=0; i<cookieArr.length; i++) {
				
					if ( $(this).prop("checked") ) {
						cookieArr[i].checked = true; 
						//全选
					}
					else {
						cookieArr[i].checked = false; //全不选
					}
				}	
					$.cookie("mycart", JSON.stringify(cookieArr), {expires:30, path:"/"});         
					reflash()
    	    	} )
    	    	
	    	    
	    	    //删除本条
	    	    $(".goods").on("click",".del",function(){
					//如果没有cookie,则直接返回
					  console.log($.cookie("mycart"))
					if ( !$.cookie("mycart") ){return;}
					var cookieArr = JSON.parse( $.cookie("mycart") );
					var index=$(this).index(".goods .del")
					//遍历cookieArr
					console.log(index)
					//删除数组
					cookieArr.splice(index,1)
					console.log(cookieArr)
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("mycart", JSON.stringify(cookieArr), {expires:30, path:"/"});      
					//刷新UI
					reflash();
				})
	    	    
	    	    //清空购物车
	    	    $("#dropcart").click(function(){
	    	    	if ( !$.cookie("mycart") ){return;}
	    	    	$.cookie("mycart", JSON.stringify(null), {expires:7, path:"/"});
	    	    	reflash();
	    	    })
	    	    
	    	    
	    	      //计算商品总价
		    	var cost=0
		    	for(var k=0;k<arr.length;k++){
		    	    if(arr[k].checked){
		    	     	cost=arr[k].num*arr[k].price
		    	    } 	
		    	 }
		    	 $("#totalcost").html(" ¥ "+cost)
	    	      
	         }else{
	    	//如果购物车为空则将商品列表删除
	    	$(".table").hide();
	    	$(".empty").show();
	    	$(".total").hide();
	    }//if
//	    
     } //function
 })//$ 