 // * @Author       : Junchen Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-09-11 02:19:51
 // * @Program name : index.js
 // * Copyright (c) 2022 by Junchen Yi Taohua-Nong, All Rights Reserved. 
 function chinese(){
	 document.getElementById("into-chinese").setAttribute("href","index.html");
	 document.getElementById("into-div-chinese").style.display = "inherit";
	 document.getElementById("into-div-english").style.display = "none";
	 
	 
 }
 function english(){
	 document.getElementById("into-english").setAttribute("href","https://www.en.midnightnth.club");
	 document.getElementById("into-div-english").style.display = "inherit";
	 document.getElementById("into-div-chinese").style.display = "none";
 }