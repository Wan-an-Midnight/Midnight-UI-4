 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-11-24 14:59:21
 // * @Program name : welcome.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 
 
 function cookice(){
	 if(document.cookie.indexOf("a=hello")==-1){
	     document.cookie="a=hello; expires=Fri, 25 Nov 2022 12:00:00 GMT";
	 }else{
	     alert("再次打开！");
	 }
 }
function wel(){
		document.getElementById("wel-main").style.display = "block";
		setTimeout(function(){	document.getElementById("wel-main").classList.add("wel-main-show")
		},1000);
		setTimeout(function(){	document.getElementById("index-main").style.display = "none";
		},1000);
		setTimeout(function(){	document.getElementById("wel-main").classList.add("wel-main-show-c")
		},1600);
}
function welchange2(){
	document.getElementById("wel-page1").classList.add("wel-page1-out")
	setTimeout(function(){document.getElementById("wel-page1").style.display = "none";
	},150);
	document.getElementById("wel-page2").style.display = "flex";
	setTimeout(function(){	document.getElementById("wel-page2").classList.add("wel-page2-show")
	},250);
	setTimeout(function(){	document.getElementById("page2-ui1").classList.add("wel-page2-ui-1-show")
	},330);
	setTimeout(function(){	document.getElementById("page2-ui2").classList.add("wel-page2-ui-2-show")
	},420);
	setTimeout(function(){	document.getElementById("page2-ui3").classList.add("wel-page2-ui-3-show")
	},490);
	
	
}
function welchange3(){
	document.getElementById("wel-page2").classList.add("wel-page2-out")
	setTimeout(function(){	document.getElementById("wel-page2").style.display = "none";
	},530);
	document.getElementById("wel-page3").style.display = "flex";
	setTimeout(function(){	document.getElementById("wel-page3").classList.add("wel-page3-show")
	},600);
	setTimeout(function(){	document.getElementById("page3-ui1").classList.add("wel-page3-ui-1-show")
	},680);
	setTimeout(function(){	document.getElementById("page3-ui2").classList.add("wel-page3-ui-2-show")
	},740);
}
function welchange4(){
	document.getElementById("wel-page3").classList.add("wel-page3-out")
	setTimeout(function(){	document.getElementById("wel-page3").style.display = "none";
	},530);
	document.getElementById("wel-page4").style.display = "flex";
	setTimeout(function(){	document.getElementById("wel-page4").classList.add("wel-page4-show")
	},600);
	setTimeout(function(){	document.getElementById("page4-ui1").classList.add("wel-page4-ui-1-show")
	},680);
	setTimeout(function(){	document.getElementById("page4-ui2").classList.add("wel-page4-ui-2-show")
	},740);
	setTimeout(function(){	document.getElementById("page4-ui3").classList.add("wel-page4-ui-3-show")
	},800);
}
function welchange5(){
	setTimeout(function(){ document.getElementById("index-main").style.display = "block";
	},800);
	document.getElementById("wel-main").classList.add("wel-main-out")
	document.getElementById("wel-main").classList.add("wel-main-show-co")
	setTimeout(function(){	document.getElementById("wel-main").style.display = "none";
	},1200);
	
}