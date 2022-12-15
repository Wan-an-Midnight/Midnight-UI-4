 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-08-13 21:22:30
 // * @Program name : ranking.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 

function li_climb(){
	document.getElementById("ranking-climb").style.display = "block";
	document.getElementById("ranking-go").style.display = "none";
	document.getElementById("ranking-keep").style.display = "none";
	document.getElementById("ranking-tool").style.display = "none";
	document.getElementById("ranking-climb-li").className = "ranking-button-after";
	document.getElementById("ranking-go-li").className = "ranking-button-befor";
	document.getElementById("ranking-keep-li").className = "ranking-button-befor";
	document.getElementById("ranking-tool-li").className = "ranking-button-befor";
}
function li_go(){
	document.getElementById("ranking-climb").style.display = "none";
	document.getElementById("ranking-go").style.display = "block";
	document.getElementById("ranking-keep").style.display = "none";
	document.getElementById("ranking-tool").style.display = "none";
	document.getElementById("ranking-climb-li").className = "ranking-button-befor";
	document.getElementById("ranking-go-li").className = "ranking-button-after";
	document.getElementById("ranking-keep-li").className = "ranking-button-befor";
	document.getElementById("ranking-tool-li").className = "ranking-button-befor";
}
function li_keep(){
	document.getElementById("ranking-climb").style.display = "none";
	document.getElementById("ranking-go").style.display = "none";
	document.getElementById("ranking-keep").style.display = "block";
	document.getElementById("ranking-tool").style.display = "none";
	document.getElementById("ranking-climb-li").className = "ranking-button-befor";
	document.getElementById("ranking-go-li").className = "ranking-button-befor";
	document.getElementById("ranking-keep-li").className = "ranking-button-after";
	document.getElementById("ranking-tool-li").className = "ranking-button-befor";
}
function li_tool(){
	document.getElementById("ranking-climb").style.display = "none";
	document.getElementById("ranking-go").style.display = "none";
	document.getElementById("ranking-keep").style.display = "none";
	document.getElementById("ranking-tool").style.display = "block";
	document.getElementById("ranking-climb-li").className = "ranking-button-befor";
	document.getElementById("ranking-go-li").className = "ranking-button-befor";
	document.getElementById("ranking-keep-li").className = "ranking-button-befor";
	document.getElementById("ranking-tool-li").className = "ranking-button-after";
}