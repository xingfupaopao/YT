
/*--------------------头部箭头旋转--------------------------------------*/
function head(obj,disobj,imgobj){
     obj.onmouseover=function(){
       disobj.style.display='block';
       imgobj.style.transition='all .5s ease';
       animate(imgobj,{transform:'rotateZ(360deg)'},50);
    }
      obj.onmouseout=function(){
        disobj.style.display='none';
        imgobj.style.transition='all .5s ease';
        animate(imgobj,{transform:'rotateZ(-360deg)'},50);
    }
   }