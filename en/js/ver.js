function ver(){
	document.getElementById("version").innerHTML="4.0 beta 4";
	document.getElementById("buildid").innerHTML="15A1097d";
	
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