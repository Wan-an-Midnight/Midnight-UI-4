function ver(){
	document.getElementById("version").innerHTML="4.0";
	document.getElementById("buildid").innerHTML="15H29A";
	
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