function ver(){
	document.getElementById("version").innerHTML="4.0 beta 5";
	document.getElementById("buildid").innerHTML="15A1103e";
	
}
function check(){
	setTimeout(function(){alert("已是最新版本!");
	document.getElementById("upnew").style.display = "inherit";
	//document.getElementById("uphave").style.display = "inherit";
},2000 );  
}
function check_en(){
	setTimeout(function(){alert("Is already the latest version!");
	document.getElementById("upnew").style.display = "inherit";
	//document.getElementById("uphave").style.display = "inherit";
},2000 );  
}
function index_ver(){
	document.getElementById("version-nav").innerHTML="Midnight UI 4 Developer Beta 5 (15A1103e)"
	document.getElementById("fooder-ver").innerHTML="4.0 Beta 5 (15A1103e)"
	
}