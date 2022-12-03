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
	
	document.getElementById("ranking-climb-all").style.display = "block";
	document.getElementById("ranking-go-all").style.display = "block";
	document.getElementById("ranking-keep-all").style.display = "block";
	document.getElementById("ranking-tool-all").style.display = "block";
	
 }
 function rank_climb(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-after";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("ranking-climb-all").style.display = "block";
	document.getElementById("ranking-go-all").style.display = "none";
	document.getElementById("ranking-keep-all").style.display = "none";
	document.getElementById("ranking-tool-all").style.display = "none";
	
 }
 function rank_go(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-after";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("ranking-climb-all").style.display = "none";
	document.getElementById("ranking-go-all").style.display = "block";
	document.getElementById("ranking-keep-all").style.display = "none";
	document.getElementById("ranking-tool-all").style.display = "none";
	
 }
 function rank_keep(){
 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-after";
 	document.getElementById("rank-list-tool").className = "rank-button-befor";
	
	document.getElementById("ranking-climb-all").style.display = "none";
	document.getElementById("ranking-go-all").style.display = "none";
	document.getElementById("ranking-keep-all").style.display = "block";
	document.getElementById("ranking-tool-all").style.display = "none";
	
 }
 function rank_tool(){

 	document.getElementById("rank-list-all").className = "rank-button-befor";
 	document.getElementById("rank-list-climb").className = "rank-button-befor";
 	document.getElementById("rank-list-go").className = "rank-button-befor";
 	document.getElementById("rank-list-keep").className = "rank-button-befor";
 	document.getElementById("rank-list-tool").className = "rank-button-after";
	
	document.getElementById("ranking-climb-all").style.display = "none";
	document.getElementById("ranking-go-all").style.display = "none";
	document.getElementById("ranking-keep-all").style.display = "none";
	document.getElementById("ranking-tool-all").style.display = "block";
	
 }
 function rank_none(){
	 document.getElementById("ranking-climb-card").style.display = "none";
	 document.getElementById("ranking-go-card").style.display = "none";
	 document.getElementById("ranking-keep-card").style.display = "none";
	 document.getElementById("ranking-tool-card").style.display = "none";
	 

	 document.getElementById("ranking-climb-none").style.display = "inherit";
	 document.getElementById("ranking-go-none").style.display = "inherit";
	 document.getElementById("ranking-keep-none").style.display = "inherit";
	 document.getElementById("ranking-tool-none").style.display = "inherit";
 }