	var _head=document.getElementById("header1");
			var Left=850;
			var headertimer;
			
				function auto(){
					Left--;
					if(Left<20){
						Left=850;	
					}
					_head.style.left=Left+"px";
				}
				headertimer=setInterval(auto,20);
			
	
		document.getElementsByClassName("ul1-li1")[0].onmouseover=function(){
			document.getElementsByClassName("a1")[0].style.color="red";
			document.getElementsByClassName("a1")[0].style.borderBottom="solid";
			document.getElementsByClassName("a1")[0].style.borderWidth="5px";
			document.getElementsByClassName("a1")[0].style.borderColor="red";

		document.getElementById("nav-li1").style.display="block";
	}
	document.getElementById("nav-li1").onmouseover=function(){
		document.getElementsByClassName("a1")[0].style.borderBottom="solid";
			document.getElementsByClassName("a1")[0].style.borderWidth="5px";
			document.getElementsByClassName("a1")[0].style.borderColor="red";
		document.getElementsByClassName("a1")[0].style.color="red";
		document.getElementById("nav-li1").style.display="block";
	}
	document.getElementsByClassName("ul1-li1")[0].onmouseout=function(){
		document.getElementsByClassName("a1")[0].style.borderBottom="";
			document.getElementsByClassName("a1")[0].style.borderWidth="";
			document.getElementsByClassName("a1")[0].style.borderColor="";
		document.getElementsByClassName("a1")[0].style.color="";
		document.getElementById("nav-li1").style.display="none";
		
	}
	document.getElementById("nav-li1").onmouseleave=function(){
		document.getElementsByClassName("a1")[0].style.color="";
		document.getElementsByClassName("a1")[0].style.borderBottom="";
			document.getElementsByClassName("a1")[0].style.borderWidth="";
			document.getElementsByClassName("a1")[0].style.borderColor="";
		document.getElementById("nav-li1").style.display="none";
	}
	
	
	document.getElementsByClassName("ul1-li2")[0].onmouseover=function(){
			document.getElementsByClassName("a2")[0].style.color="red";
			document.getElementsByClassName("a2")[0].style.borderBottom="solid";
			document.getElementsByClassName("a2")[0].style.borderWidth="5px";
			document.getElementsByClassName("a2")[0].style.borderColor="red";

		document.getElementById("nav-li2").style.display="block";
	}
	document.getElementById("nav-li2").onmouseover=function(){
		document.getElementsByClassName("a2")[0].style.borderBottom="solid";
			document.getElementsByClassName("a2")[0].style.borderWidth="5px";
			document.getElementsByClassName("a2")[0].style.borderColor="red";
		document.getElementsByClassName("a2")[0].style.color="red";
		document.getElementById("nav-li2").style.display="block";
	}
	document.getElementsByClassName("ul1-li2")[0].onmouseout=function(){
		document.getElementsByClassName("a2")[0].style.borderBottom="";
			document.getElementsByClassName("a2")[0].style.borderWidth="";
			document.getElementsByClassName("a2")[0].style.borderColor="";
		document.getElementsByClassName("a2")[0].style.color="";
		document.getElementById("nav-li2").style.display="none";
		
	}
	document.getElementById("nav-li2").onmouseleave=function(){
		document.getElementsByClassName("a2")[0].style.color="";
		document.getElementsByClassName("a2")[0].style.borderBottom="";
			document.getElementsByClassName("a2")[0].style.borderWidth="";
			document.getElementsByClassName("a2")[0].style.borderColor="";
		document.getElementById("nav-li2").style.display="none";
	}
	
	
		document.getElementsByClassName("ul1-li3")[0].onmouseover=function(){
			document.getElementsByClassName("a3")[0].style.color="red";
			document.getElementsByClassName("a3")[0].style.borderBottom="solid";
			document.getElementsByClassName("a3")[0].style.borderWidth="5px";
			document.getElementsByClassName("a3")[0].style.borderColor="red";

		document.getElementById("nav-li3").style.display="block";
	}
	document.getElementById("nav-li3").onmouseover=function(){
		document.getElementsByClassName("a3")[0].style.borderBottom="solid";
			document.getElementsByClassName("a3")[0].style.borderWidth="5px";
			document.getElementsByClassName("a3")[0].style.borderColor="red";
		document.getElementsByClassName("a3")[0].style.color="red";
		document.getElementById("nav-li3").style.display="block";
	}
	document.getElementsByClassName("ul1-li3")[0].onmouseout=function(){
		document.getElementsByClassName("a3")[0].style.borderBottom="";
			document.getElementsByClassName("a3")[0].style.borderWidth="";
			document.getElementsByClassName("a3")[0].style.borderColor="";
		document.getElementsByClassName("a3")[0].style.color="";
		document.getElementById("nav-li3").style.display="none";
		
	}
	document.getElementById("nav-li3").onmouseleave=function(){
		document.getElementsByClassName("a3")[0].style.color="";
		document.getElementsByClassName("a3")[0].style.borderBottom="";
			document.getElementsByClassName("a3")[0].style.borderWidth="";
			document.getElementsByClassName("a3")[0].style.borderColor="";
		document.getElementById("nav-li3").style.display="none";
	}


		document.getElementsByClassName("ul1-li6")[0].onmouseover=function(){
			document.getElementsByClassName("a6")[0].style.color="red";
			document.getElementsByClassName("a6")[0].style.borderBottom="solid";
			document.getElementsByClassName("a6")[0].style.borderWidth="5px";
			document.getElementsByClassName("a6")[0].style.borderColor="red";

		document.getElementById("nav-li6").style.display="block";
	}
	document.getElementById("nav-li6").onmouseover=function(){
		document.getElementsByClassName("a6")[0].style.borderBottom="solid";
			document.getElementsByClassName("a6")[0].style.borderWidth="5px";
			document.getElementsByClassName("a6")[0].style.borderColor="red";
		document.getElementsByClassName("a6")[0].style.color="red";
		document.getElementById("nav-li6").style.display="block";
	}
	document.getElementsByClassName("ul1-li6")[0].onmouseout=function(){
		document.getElementsByClassName("a6")[0].style.borderBottom="";
			document.getElementsByClassName("a6")[0].style.borderWidth="";
			document.getElementsByClassName("a6")[0].style.borderColor="";
		document.getElementsByClassName("a6")[0].style.color="";
		document.getElementById("nav-li6").style.display="none";
		
	}
	document.getElementById("nav-li6").onmouseleave=function(){
		document.getElementsByClassName("a6")[0].style.color="";
		document.getElementsByClassName("a6")[0].style.borderBottom="";
			document.getElementsByClassName("a6")[0].style.borderWidth="";
			document.getElementsByClassName("a6")[0].style.borderColor="";
		document.getElementById("nav-li6").style.display="none";
	}


"use strict";

let boxWidth;

//当前滑入图片的left（盒子的宽度---0）
let currLeft;

//滑入滑出的定时器：
let myTimer;
//轮播的定时器;
let bannerTimer;

//当前图片序号（滑入）从1开始；
let currInOrd ;
//当前图片序号（滑出）从1开始；
let currOutOrd;

let huaSpeed;

let huaTime;

//一、自动播放图片的代码
//顺序走一步
function goStep(){
	//1、改变滑入的图片序号和滑出图片序号
	changeInOutOrdSeq();	
	//2、改变图片（滑入滑出效果）
	fadeInOutAll();
	//3、改变按钮背景颜色；
	changeBtnBgColor(currInOrd);	
}
//改变滑入滑出的图片序号（顺序）
function changeInOutOrdSeq(){
	//1.1 改变滑入的图片序号
	currInOrd++;
	if(currInOrd>2){
		currInOrd = 1;
	}
	//1.2 求出滑出的图片序号
	currOutOrd = currInOrd-1;
	if(currOutOrd<=0){
		currOutOrd=2;
	}	
}

function fadeInOutAll(){
	//2.1滑入滑出前的初始化
	fadeInOutInit();//滑入滑出的初始化	
	//2.2滑入滑出
	myTimer=setInterval(fadeInOut,huaSpeed);	
}

function fadeInOutInit(){
	//1、恢复滑入图片left的初始值为盒子的宽度
	currLeft = boxWidth;
	//2、把将要滑入的图片的left定位到盒子的宽度
	//document.getElementById("box").children[currOutOrd-1].style.left = "0px";
	document.getElementById("banner").children[currInOrd-1].style.left = currLeft+"px";
}

//滑入滑出
//已知滑入图片序号，和滑出图片序号，完成滑入滑出的过程。
function fadeInOut(){
	//1、改变left的值
	currLeft=parseInt(currLeft-boxWidth/(huaTime/huaSpeed));
	//console.log(currLeft);
	//2、越界判断
	if(currLeft<=0){//切换完成（滑入滑出）
		currLeft = 0;
		clearInterval(myTimer);
		//return;
	}
		
	document.getElementById("img0"+currOutOrd).style.left = (currLeft-boxWidth)+"px"; 
	document.getElementById("img0"+currInOrd).style.left = currLeft+"px";
	
}

function changeBtnBgColor(ord){
	for(var i=0;i<2;i++){
		document.getElementById("ulBtn").children[i].style.backgroundColor="white";	
	}
	document.getElementById("ulBtn").children[ord-1].style.backgroundColor="gray";	
}



//跳转到指定的图片；
//假定ord是3；

function goImg(ord){
	//???

	//1、确定滑入的图片序号，和滑出的图片序号修改滑入的图片序号
	//1.1修改滑出图片的序号
	currOutOrd = currInOrd;//把滑入的图片序号赋给滑出的序号。	
	//1.2 修改滑入的图片序号
	currInOrd=ord;
	if(currInOrd>2){
		currInOrd = 1;
	}	
	
	//2、改变图片（滑入滑出效果）
	fadeInOutAll();	
	//3、改变按钮背景颜色；
	changeBtnBgColor(currInOrd);
}

//初始化
function init(){
	initData();
	initUI();	
}

function initData(){
	boxWidth = 1340;
	currLeft = boxWidth;
	//当前图片序号（滑入）
	currInOrd=1 ;
	//当前图片序号（滑出）
	currOutOrd=1;	
	huaSpeed = 10;
	huaTime = 2000;
	
}

function initUI(){
	for(let i=0;i<2;i++){
		document.getElementById("img0"+(i+1)).style.left = "-3500px";
	}	
	document.getElementById("img01").style.left = "0px";

	document.getElementById("ulBtn").children[0].style.backgroundColor="gray";	
}


window.onload = function(){
	init();
	bannerTimer=setInterval(goStep,3000);
	
	document.getElementById("banner").onmouseenter=function(){
		window.clearInterval(bannerTimer);
	}
	document.getElementById("banner").onmouseleave=function(){
		bannerTimer=setInterval(goStep,3000);
	}
	
	let ul_li = document.getElementById("ulBtn").children;
	for(let i=0;i<ul_li.length;i++){
		ul_li[i].ord = i;//ord是li的自定义属性。
		ul_li[i].onmousedown = function(){
			goImg(this.ord+1);
		}
	}
	
}


	
	



