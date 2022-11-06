 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-10-13 13:43:08
 // * @Program name : about.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 
 
 function rank_all(){
 	document.getElementById("rank-list-all").className = "rank-button-after";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("climb-card22723").style.display = "block";
	document.getElementById("climb-card22724").style.display = "block";
	document.getElementById("go-card").style.display = "block";
	document.getElementById("keep-card").style.display = "block";
	document.getElementById("tool-card").style.display = "block";
 }
 function rank_climb(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-after";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("climb-card22723").style.display = "block";
	document.getElementById("climb-card22724").style.display = "block";
	document.getElementById("go-card").style.display = "none";
	document.getElementById("keep-card").style.display = "none";
	document.getElementById("tool-card").style.display = "none";
	
 }
 function rank_go(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-after";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("climb-card22723").style.display = "none";
	document.getElementById("climb-card22724").style.display = "none";
	document.getElementById("go-card").style.display = "block";
	document.getElementById("keep-card").style.display = "none";
	document.getElementById("tool-card").style.display = "none";
	
 }
 function rank_keep(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-after";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("climb-card22723").style.display = "none";
	document.getElementById("climb-card22724").style.display = "none";
	document.getElementById("go-card").style.display = "none";
	document.getElementById("keep-card").style.display = "block";
	document.getElementById("tool-card").style.display = "none";
	
 }
 function rank_tool(){

 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-after";
	
	document.getElementById("climb-card22723").style.display = "none";
	document.getElementById("climb-card22724").style.display = "none";
	document.getElementById("go-card").style.display = "none";
	document.getElementById("keep-card").style.display = "none";
	document.getElementById("tool-card").style.display = "block";
	
 }