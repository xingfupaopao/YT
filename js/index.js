window.onload=function(){
    //banner 轮播
    var banner=$('.banner');
    var bi=$('.banner_img')[0];
    var ai=$('a',bi);
    var dian=$('.dian')[0];
    var dl=$('li',dian);
    var num=0;
    var flag=true;
    var len=dl.length;
    var bg=['url(img/bg1.jpg)','url(img/bg2.jpg)','url(img/bg3.jpg)','url(img/bg4.jpg)','url(img/bg5.jpg)','url(img/bg6.jpg)'];
    var bannerL=$('.bannerL');
    var bannerR=$('.bannerR');
//初始化

    dl.eq(0).css({background:'#E5004F'})
    ai.css({opacity:0}).eq(0).css({opacity:1})
    banner.css({opacity:1})
var t1=setInterval(mover,2000);
//左右爪子

banner.hover(function(){
	
	clearInterval(t1);
    bannerL.css({display:'block'})
    bannerR.css({display:'block'})
},function(){
    bannerL.css({display:'none'})
    bannerR.css({display:'none'})
    t1=setInterval(mover,2000);
})
bannerL.click(function(){
	if(flag){
    		flag=false;
    	movel();
    	}
})
bannerR.click(function(){
	if(flag){
    		flag=false;
    	mover();
    	}
})

//轮播点

   for(var i=0;i<len;i++){
		dl[i].index=i;
		dl[i].onmouseover=function(){
			num=this.index;
			for(var j=0;j<len;j++){
				dl[j].style.backgroundColor='#211616';
				animate(ai[j],{opacity:0});
			}
			dl[this.index].style.backgroundColor='#E5004F';
			animate(ai[this.index],{opacity:1});
			animate(banner[0],{backgroundImage:bg[num],opacity:1})
			//banner[0].style.backgroundImage=bg[num];
		}
	}
//动画函数
 function movel(){
    	num--;
    	if(num<0){
    		num=len-1;
    	}
    	for(var i=0;i<len;i++){
    		animate(ai[i],{opacity:0});
    		dl[i].style.backgroundColor='#211616';
    	}
    	animate(ai[num],{opacity:1},function(){
    		 flag=true;
    	});
    	dl[num].style.backgroundColor='#E5004F';
    	banner[0].style.backgroundImage=bg[num];
    }

	function mover(){
		num++;
		if(num==len){
			num=0;
		}
		for(var i=0;i<len;i++){
			animate(ai[i],{opacity:0});
			dl[i].style.backgroundColor='#211616';
		}
		animate(ai[num],{opacity:1},function(){
		   flag=true;
		});
		dl[num].style.backgroundColor='#E5004F';
		banner[0].style.backgroundImage=bg[num];
	}



//头部隐藏区域


    var wx=$('.wx')[0];
    var diswx=$('.diswx')[0];
    var im=$('.lemon')[0];
    var aa=$('.aa')[0];
    var img=$('.img')[0];

    var sjyt=$('.sjyt')[0];
    var dissjyt=$('.dissjyt')[0];
    var ii=$('.sleep')[0];

    var iii=$('.iii')[0];
    var dismy=$('.my')[0];
    var wode=$('.wode')[0]
    head(wode,dismy,iii);
     head(wx,diswx,im);
    head(sjyt,dissjyt,ii);
//logo动画
var logo=$('.logo')[0];
var logo_left=$('.logo_left',logo)[0];
var logoimg=$('.logoimg',logo_left)[0];
var logo1=$('img',logoimg);
var num1=0

var t=setInterval(function(){
        num1++;
		if(num1==logo1.length){
			num1=0;
		}
		for(var i=0;i<logo1.length;i++){
			animate(logo1[i],{display:'none'});
		}
		animate(logo1[num1],{display:'block'});

},1000);




//chao
var chao_left_top=$('.chao_left_top')[0];
var chaoa=$('a',chao_left_top);
var chao_left_bottom=$('.chao_left_bottom');


for(var i=0;i<chaoa.length;i++){
	if(i==0){
		chao_left_bottom[i].style.display='block';
		continue;
	}
	chao_left_bottom[i].style.display='none';
}

for(var i=0;i<chaoa.length;i++){
	chaoa[i].index=i;
	chaoa[i].onmouseover=function(){
		for(var j=0;j<chao_left_bottom.length;j++){
			chao_left_bottom[j].style.display='none';
		}
		chao_left_bottom[this.index].style.display='block';
	}
}







function xian(obj){
					for(var i=0;i<obj.length;i++){
		    obj[i].index=i;
			obj[i].onmouseover=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.right',obj[this.index])[0];
				var left=$('.left',obj[this.index])[0];
				var top=$('.top',obj[this.index])[0];
				var bottom=$('.bottom',obj[this.index])[0];
				animate(bottom,{width:objW});
				animate(top,{width:objW});
				animate(left,{height:objH});
				animate(right,{height:objH});
			}
			obj[i].index=i;
			obj[i].onmouseout=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.right',obj[this.index])[0];
				var left=$('.left',obj[this.index])[0];
				var top=$('.top',obj[this.index])[0];
				var bottom=$('.bottom',obj[this.index])[0];
				animate(top,{width:0});
				animate(bottom,{width:0});
				animate(left,{height:0});
				animate(right,{height:0});
			}
	      }
		}
var bottomli1=$('li',chao_left_bottom[0]); 
var bottomli2=$('li',chao_left_bottom[1]); 
var bottomli3=$('li',chao_left_bottom[2]);
xian(bottomli1);
xian(bottomli2);
for (var i = 0; i < bottomli3.length; i++) {
	bottomli3[i].index = i;
	bottomli3[i].onmouseover = function() {
      animate(bottomli3[this.index], {opacity: 0.7});
      // bottomli3[this.index].style.opacity=0.7;
	}
	bottomli3[i].onmouseout = function() {
      animate(bottomli3[this.index], {opacity: 1});
	}
}





//
var sbrb=$('.special_bottom_right_bottom1')[0];
var sbrbli=$('li',sbrb);

function xian1(obj){
					for(var i=0;i<obj.length;i++){
		    obj[i].index=i;
			obj[i].onmouseover=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.right1',obj[this.index])[0];
				var left=$('.left1',obj[this.index])[0];
				var top=$('.top1',obj[this.index])[0];
				var bottom=$('.bottom1',obj[this.index])[0];
				animate(bottom,{width:objW});
				animate(top,{width:objW});
				animate(left,{height:objH});
				animate(right,{height:objH});
			}
			obj[i].index=i;
			obj[i].onmouseout=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.right1',obj[this.index])[0];
				var left=$('.left1',obj[this.index])[0];
				var top=$('.top1',obj[this.index])[0];
				var bottom=$('.bottom1',obj[this.index])[0];
				animate(top,{width:0});
				animate(bottom,{width:0});
				animate(left,{height:0});
				animate(right,{height:0});
			}
	      }
		}
xian1(sbrbli);


//
var sbrt=$('.special_bottom_right_top')[0];
var sbrta=$('a',sbrt);
var b1=$('.special_bottom_right_bottom')[0];
var b2=$('.special_bottom_right_bottom1')[0];
for(var i=0;i<sbrta.length;i++){
	if(i==0){
		b1.style.display='block';
		continue;
	}
	b2.style.display='none';
}
sbrta[0].onmouseover=function(){
	b1.style.display='block';
	b2.style.display='none';
}
sbrta[1].onmouseover=function(){
    b1.style.display='none';
	b2.style.display='block';
}



//new 轮播
var newM=$('.new_bottom_middle')[0];

var newA=$('a',newM);
var newL=$('.nebl',newM)[0];
var newR=$('.nebr',newM)[0];
var imgL=$('img',newL)[0];
var imgR=$('img',newR)[0];
var neb=$('.neb',newM)[0];
var nebli=$('li',neb);
var index=0;
var next=0;
var flag=true;
var nebW=parseInt(getStyle(newA[0],'width'));

for(var i=0;i<newA.length;i++){
	if(i==0){
		nebli[i].style.backgroundColor='#DE0D54';
		continue;
	}
	newA[i].style.left=nebW+'px';
}
newM.onmouseover=function(){
	animate(imgL,{left:0});
	animate(imgR,{right:0});
}
newM.onmouseout=function(){
	animate(imgL,{left:-30});
	animate(imgR,{right:-30});
}
imgL.onclick=function(){
	move1();
}
imgR.onclick=function(){
	move();
}
//点击按钮
for (var i = 0; i < newA.length; i++) {
	nebli[i].index = i;
	nebli[i].onclick = function() {
		//按钮

		if (index == this.index) {
			return;
		}
		for (var j = 0; j <newA.length; j++) {
			nebli[j].style.background = '#6E6E6E';
		}

		nebli[this.index].style.background = '#DE0D54';
         
        if(index<this.index){
        	//下一张就位
			newA[this.index].style.left = nebW + 'px';
			//当前离开
			animate(newA[index], {left: -nebW}, Tween.Quad.easeIn);
			//下一张显示
			animate(newA[this.index], {left: 0}, Tween.Quad.easeIn);
			index = this.index;
        }else if(index>this.index){
        	//下一张就位
            newA[this.index].style.left=-nebW+'px';
            //当前离开
        	animate(newA[index], {left:nebW}, Tween.Quad.easeIn);
        	//下一张显示
			animate(newA[this.index], {left: 0}, Tween.Quad.easeIn);
			index = this.index;
        }
   }
}
function move(){
	next++;
	if(next==newA.length){
		next=newA.length-1;
		return;
	}
	//按钮
	nebli[index].style.background = '#6E6E6E';
	nebli[next].style.background = '#DE0D54';
    //下一张就位
	newA[next].style.left = nebW + 'px';
	//当前离开
	animate(newA[index], {left: -nebW}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(newA[next], {left: 0}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index = next;
}
function move1(){
	next--;
	if(next<0){
		next=0;
		return;
	}
	//按钮
	nebli[index].style.background = '#6E6E6E';
	nebli[next].style.background = '#DE0D54';
    //下一张就位
	newA[next].style.left = -nebW + 'px';
	//当前离开
	animate(newA[index], {left: nebW}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(newA[next], {left: 0}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index = next;
}







var newM3=$('.new_bottom_middle')[3];
var newM4=$('.new_bottom_middle')[4];
var newM5=$('.new_bottom_middle')[5];
var newM6=$('.new_bottom_middle')[6];
var newM7=$('.new_bottom_middle')[7];

function news(obj){
var newA=$('a',obj);
var newL=$('.nebl',obj)[0];
var newR=$('.nebr',obj)[0];
var imgL=$('img',newL)[0];
var imgR=$('img',newR)[0];
var neb=$('.neb',obj)[0];
var nebli=$('li',neb);
var index=0;
var next=0;
var flag=true;
var nebW=parseInt(getStyle(newA[0],'width'));

for(var i=0;i<newA.length;i++){
	if(i==0){
		nebli[i].style.backgroundColor='#DE0D54';
		continue;
	}
	newA[i].style.left=nebW+'px';
}
obj.onmouseover=function(){
	animate(imgL,{left:0});
	animate(imgR,{right:0});
}
obj.onmouseout=function(){
	animate(imgL,{left:-30});
	animate(imgR,{right:-30});
}
imgL.onclick=function(){
	move1();
}
imgR.onclick=function(){
	move();
}
//点击按钮
for (var i = 0; i < newA.length; i++) {
	nebli[i].index = i;
	nebli[i].onclick = function() {
		//按钮

		if (index == this.index) {
			return;
		}
		for (var j = 0; j <newA.length; j++) {
			nebli[j].style.background = '#6E6E6E';
		}

		nebli[this.index].style.background = '#DE0D54';
         
        if(index<this.index){
        	//下一张就位
			newA[this.index].style.left = nebW + 'px';
			//当前离开
			animate(newA[index], {left: -nebW}, Tween.Quad.easeIn);
			//下一张显示
			animate(newA[this.index], {left: 0}, Tween.Quad.easeIn);
			index = this.index;
        }else if(index>this.index){
        	//下一张就位
            newA[this.index].style.left=-nebW+'px';
            //当前离开
        	animate(newA[index], {left:nebW}, Tween.Quad.easeIn);
        	//下一张显示
			animate(newA[this.index], {left: 0}, Tween.Quad.easeIn);
			index = this.index;
        }
   }
}
function move(){
	next++;
	if(next==newA.length){
		next=newA.length-1;
		return;
	}
	//按钮
	nebli[index].style.background = '#6E6E6E';
	nebli[next].style.background = '#DE0D54';
    //下一张就位
	newA[next].style.left = nebW + 'px';
	//当前离开
	animate(newA[index], {left: -nebW}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(newA[next], {left: 0}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index = next;
}
function move1(){
	next--;
	if(next<0){
		next=0;
		return;
	}
	//按钮
	nebli[index].style.background = '#6E6E6E';
	nebli[next].style.background = '#DE0D54';
    //下一张就位
	newA[next].style.left = -nebW + 'px';
	//当前离开
	animate(newA[index], {left: nebW}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(newA[next], {left: 0}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index = next;
}
}
news(newM3);
news(newM4);
news(newM5);
news(newM6);
news(newM7);







//九大块线条
function xian2(obj){
					for(var i=0;i<obj.length;i++){
		    obj[i].index=i;
			obj[i].onmouseover=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.newRight',obj[this.index])[0];
				var left=$('.newLeft',obj[this.index])[0];
				var top=$('.newTop',obj[this.index])[0];
				var bottom=$('.newBottom',obj[this.index])[0];
				animate(bottom,{width:objW});
				animate(top,{width:objW});
				animate(left,{height:objH});
				animate(right,{height:objH});
			}
			obj[i].index=i;
			obj[i].onmouseout=function(){
				var objW=obj[this.index].offsetWidth;
			    var objH=obj[this.index].offsetHeight;
			    var right=$('.newRight',obj[this.index])[0];
				var left=$('.newLeft',obj[this.index])[0];
				var top=$('.newTop',obj[this.index])[0];
				var bottom=$('.newBottom',obj[this.index])[0];
				animate(top,{width:0});
				animate(bottom,{width:0});
				animate(left,{height:0});
				animate(right,{height:0});
			}
	      }
		}
var nbr0=$('.new_bottom_right')[0];
var nbr1=$('.new_bottom_right')[1];
var nbr2=$('.new_bottom_right')[2];
var nbr3=$('.new_bottom_right')[3];
var nbr4=$('.new_bottom_right')[4];
var nbr5=$('.new_bottom_right')[5];
var nbr6=$('.new_bottom_right')[6];
var nbr7=$('.new_bottom_right')[7];
var nbr8=$('.new_bottom_right')[8];

var nbrli0=$('li',nbr0);
var nbrli1=$('li',nbr1);
var nbrli2=$('li',nbr2);

var nbrli3=$('li',nbr3);
var nbrli4=$('li',nbr4);
var nbrli5=$('li',nbr5);
var nbrli6=$('li',nbr6);
var nbrli7=$('li',nbr7);
var nbrli8=$('li',nbr8);


xian2(nbrli0);
xian2(nbrli1);
xian2(nbrli2);
xian2(nbrli3);
xian2(nbrli4);
xian2(nbrli5);
xian2(nbrli6);
xian2(nbrli7);
xian2(nbrli8);




//选项卡

var bnli=$('.banner_nav_left_inner');
var xuan=$('.banner_nav_xuan');
var inner=$('.banner_nav_left_inner');
for(var i=0;i<bnli.length;i++){
		bnli[i].index=i;
		bnli[i].onmouseover=function(){
			for(var j=0;j<xuan.length;j++){
				xuan[j].style.display='none';
			}
			xuan[this.index].style.display='block';
		}
		bnli[i].onmouseout=function(){
			for(var j=0;j<xuan.length;j++){
				xuan[j].style.display='none';
			}
		}
	}





//小轮播

var newbrand0=$('.new_bottom_left_bottom')[0];
var newbrand1=$('.new_bottom_left_bottom')[1];
var newbrand2=$('.new_bottom_left_bottom')[2];
var newbrand3=$('.new_bottom_left_bottom')[3];
var newbrand4=$('.new_bottom_left_bottom')[4];
var newbrand5=$('.new_bottom_left_bottom')[5];
var newbrand6=$('.new_bottom_left_bottom')[6];
var newbrand7=$('.new_bottom_left_bottom')[7];
var newbrand8=$('.new_bottom_left_bottom')[8];

function brands(obj){
var brand=$('.brand',obj);
var brandL=$('.brandL',obj)[0];
var brandR=$('.brandR',obj)[0];
var next1=0;
var index1=0;
var brandW=parseInt(getStyle(brand[0],'width'));
obj.onmouseover=function(){
	animate(brandL,{opacity:1});
	animate(brandR,{opacity:1});
}
obj.onmouseout=function(){
	animate(brandL,{opacity:0.5});
	animate(brandR,{opacity:0.5});
}
brandR.onclick=function(){
	if(flag){
	  moveR();
	  flag=false;	
	}
	
}
brandL.onclick=function(){
	if(flag){
		moveL();
		flag=false;
	}
}

function moveR(){
	next1++;
	if(next1==brand.length){
		next1=0;
	}
    //下一张就位
	brand[next1].style.left = brandW+15 + 'px';
	//当前离开
	animate(brand[index1], {left: -brandW-15}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(brand[next1], {left:15}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index1 = next1;
}
function moveL(){
	next1--;
	if(next1<0){
		next1=brand.length-1;
	}
    //下一张就位
	brand[next1].style.left = -brandW-15 + 'px';
	//当前离开
	animate(brand[index1], {left: brandW+15}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	//下一张显示
	animate(brand[next1], {left: 15}, Tween.Quad.easeIn,function(){
		flag=true;
	});
	index1 = next1;
}

}
brands(newbrand0);
brands(newbrand1);
brands(newbrand2);
brands(newbrand3);
brands(newbrand4);
brands(newbrand5);
brands(newbrand6);
brands(newbrand7);
brands(newbrand8);



//ad
var ad=$('.ad')[0];
var ad_top=$('.ad_top',ad)[0];
var adli=$('li',ad_top);
var adimg=$('img',ad_top);
var ad_bottom=$('.ad+bottom',ad)[0];
var font=$('.ad_font',ad_bottom);
var lengths=adli.length;


for(var i=0;i<lengths;i++){
	adli[i].index=i;
	
	adli[i].onmouseover=function(){
		for(var j=0;j<lengths;j++){
			font[j].style.display='none';
		}
		font[this.index].style.display='block';
		adimg[this.index].style.display='none';

	}
	adli[i].onmouseout=function(){
		for(var j=0;j<lengths;j++){
			font[j].style.display='none';
		}
		// font[this.index].style.display='block';
		adimg[this.index].style.display='block';

	}
}


//九大块按需加载
//获取浏览器的可是高度
var ch=document.documentElement.clientHeight;
//各个楼层距离页面顶端的高度
var floor=$('.new');
var floorArr=[];

for(var i=0;i<floor.length;i++){
	floorArr.push(floor[i].offsetTop);
}
//楼层跳转
var ads=$('.ads')[0];
var item=$('li',ads);
var flage=true;//控制onscroll

for (var i = 0; i < item.length; i++) {
	item[i].index = i;
	item[i].onclick = function() {
		flage = false;
		for(var j=0;j<item.length;j++){
			font[j].style.display='none';
		}
		font[this.index].style.display='block';
		adimg[this.index].style.display='none';
		animate(document.body, {scrollTop: floorArr[this.index]},function(){
			flage=true;
		});
		animate(document.documentElement, {scrollTop: floorArr[this.index]},function(){
			flage=true;
		});
		
	}
}
//返回顶部

//返回顶部
var back=$('.back')[0];
var backli=$('li',back)[0];
backli.onclick=function(){
	animate(document.body, {scrollTop: 0});
	animate(document.documentElement, {scrollTop: 0});
}
//按需加载
window.onscroll=function(){
	if(!flage){return;}
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var scrollTop=obj.scrollTop;
	//临界条件  可视窗口的高度+滚轮滚动的距离>=某个楼层的高度
			for(var i=0;i<floorArr.length;i++){
			  if(ch+scrollTop>=floorArr[i]){
			  	//获取当前楼层下的图片并且追加路径
			  	var imgs=$('img',floor[i]);
			  	for(var j=0;j<imgs.length;j++){
			  		imgs[j].src=imgs[j].getAttribute('imgpath');
			  		// item[i].style.background='red';
			  	}
			  }	
			}

			//选中效果
			for(var i=0;i<item.length;i++){
		 	var obj=document.body.scrollTop?document.body:document.documentElement;
		    var scrollTop=obj.scrollTop;
        	if(ch+scrollTop>=floorArr[i]+300){
        		for(var j=0;j<item.length;j++){
        			font[j].style.display='none';
        			adimg[j].style.display='block';
        		}
        		font[i].style.display='block';
        		adimg[i].style.display='none';
        	}

        	var special=$('.special')[0];
        	var tops=special.offsetTop;
        	 	
        	 if(ch+scrollTop>=tops+200){
        	 	ad.style.display='block';
        	 }else{
                 ad.style.display='none';
        	 }
}



}

}


