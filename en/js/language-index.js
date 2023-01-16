 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-10-28 00:27:04
 // * @Program name : language-index.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 

function close_language(){
	setTimeout(function(){document.getElementById("language-change").style.display = "none";},1000);
	setTimeout(function(){document.getElementById("index-main").style.display = "inherit";},600);
	document.getElementById("index-main").style.display = "block";
	// document.getElementsByTagName('body')[0].classList.remove('show-language');
	// document.getElementsByTagName('html')[0].style.overflow = "inherit";
	 document.getElementById("language-change").classList.remove("languagebox-show");
}
function open_language(){
	setTimeout(function(){	document.getElementById("language-change").classList.add("languagebox-show");
},1000);
	setTimeout(function(){document.getElementById("index-main").style.display = "none";},1200);

	document.getElementById("language-change").style.display = "block";
	// document.getElementById("index-main").style.display = "none";
	// document.getElementsByTagName('body')[0].className += 'show-language';
	// document.getElementsByTagName('html')[0].style.overflow = "hidden";
}