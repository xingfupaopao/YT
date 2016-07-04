/*
   getClass(classname)
   获取指定class的对象的集合
   className   指定的类名
   range 指定的范围
   若果传入范围，就是指定范围
   否则就是document
*/
/*function getClass(className,range){
 	//设置范围
 	var range=range?range:document;
 	//判断浏览器
 	if(document.getElementsByClassName){
		//w3c
	   return range.getElementsByClassName(className);
	}else{
 		//ie
 		//保存指定的className对象
 	    var newarr=[];
 	    //获取所有元素
 	    var all=range.getElementsByTagName('*');
 	    for(var j=0;j<all.length;j++){

 	    	//判断当前元素的classname是否包含指定的classname
 	    	if(checkClass(all[j].className,className)){
 	    		newarr.push(all[j]);
 	    	}
 	    }
 	}
     return newarr;
 }
/*
检查obj里面是否包含classname
*/
// function checkClass(obj,className){
//    var arr=obj.split(' ');
//    for(var i=0;i<arr.length;i++){
//    	if(arr[i]==className){
//    		return true;
//    	}
//    }
//    return false;
// }*/


function getClass(className,range){
  var  range=range?range:document; 
  if(document.getElementsByClassName){
    return range.getElementsByClassName(className);
  }else{
    var all=document.getElementsByTagName('*');
    var newarr=[];
    for(var i=0;i<all.length;i++){
      if(checkClass(all[i].className,className)){
         newarr.push(all[i]);
      }
    }
  }
  return newarr;
}
function checkClass(obj,className){
  var arr=obj.split(' ');
  for(var i=0;i<arr.length;i++){
    if(arr[i]==className){
      return true;
    }
  }
  return false;
}



//获取标签内容

  function getContent(obj,val){
      if(obj.innerText){
        if(val==undefined){
          return obj.innerText;
        }else{
          obj.innerText=val;
        }
      }else{
        if(val==undefined){
          return obj.textContent;
        }else{
          obj.textContent=val;
        }
      }
     }


  /*getStyle(obj,attr)
     获取指定元素指定的样式
     obj 指定的元素
     attr 指定的样式
     */
    function getStyle(obj,attr){
        if(obj.currentStyle){
          return obj.currentStyle[attr];
        }else{
          return getComputedStyle(obj,null)[attr]
        }
     }


/*
&('')
.one 获取类名
#one  获取ID
div  获取标签
正则表达式也是对象
*/

function $(selecter,ranges){
  var ranges=ranges?ranges:document;
  if(selecter.charAt(0)=='.'){
    return getClass(selecter.slice(1),ranges);
  }else if(selecter.charAt(0)=='#'){
    return document.getElementById(selecter.slice(1));
  }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
    return ranges.getElementsByTagName(selecter);
  }
}


/*
简易动画
animate(obj,attr,end,speed)
对象 属性 结束值 速度
*/


 // function animate(obj, attr, end, speed) {
 //    var t = setInterval(function() {
 //      var width = parseInt(getStyle(obj,attr));
 //      width += speed;
 //      if (width >= end) {
 //        clearInterval(t);
 //      }
 //      obj.style[attr] = width + 'px';
 //    }, 50)
 //  }