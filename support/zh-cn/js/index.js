 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-07-15 21:11:30
 // * @Program name : index.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 
function cn_text() {
	
	document.getElementById("cn-index1").innerHTML="日程";
	document.getElementById("cn-index-li1").style.display = "inherit";
	
	document.getElementById("cn-index2").innerHTML="成员";
	document.getElementById("cn-index-li2").style.display = "inherit";
	
	document.getElementById("cn-index3").innerHTML="车辆信息";
	document.getElementById("cn-index-li3").style.display = "inherit";
	
	document.getElementById("cn-index4").innerHTML="排行榜";
	document.getElementById("cn-index-li4").style.display = "inherit";
	
	document.getElementById("cn-index5").innerHTML="公告&通知";
	document.getElementById("cn-index-li5").style.display = "inherit";
	
	document.getElementById("cn-index6").innerHTML="关于我们";
	document.getElementById("cn-index-li6").style.display = "inherit";
	
	document.getElementById("cn-index7").innerHTML="技术支持";
	document.getElementById("cn-index-li7").style.display = "inherit";
	
	document.getElementById("cn-index8").innerHTML="Midnight 视频";
	document.getElementById("cn-index-li8").style.display = "inherit";
	
	document.getElementById("cn-index9").innerHTML="关于";
	document.getElementById("cn-index-li9").style.display = "inherit";
	
	document.getElementById("cn-index10").innerHTML="";
	document.getElementById("cn-index-li10").style.display = "none";
	
	document.getElementById("version-nav").innerHTML="Midnight UI 4 Developer Beta 4(15A1097d)"
	
	// w = screen.availWidth;
	// if(w < 835 && w > 768){
	// 	document.getElementById("w768").style.display = "block"
	// 	document.getElementById("main-body").style.overflow = "hidden"
	// 	document.getElementById("nav").style.display = "none";
	// 	document.getElementById("main-body").style.display = "inline-grid";
	// 	}
	// else{
	// 	document.getElementById("w768").style.display = "none"
	// 	}
}
function cn_url1(){
	// document.getElementById("index-main").style.display = "block";
	// document.getElementById("skeleton").style.display = "none";
	
	document.getElementById("cn-index1").setAttribute("href","./page/schedule.html");
	document.getElementById("cn-index2").setAttribute("href","./page/member.html");
	document.getElementById("cn-index3").setAttribute("href","./page/cinfo.html");
	document.getElementById("cn-index4").setAttribute("href","./page/ranking.html");
	document.getElementById("cn-index5").setAttribute("href","./page/noi.html");
	document.getElementById("cn-index6").setAttribute("href","./page/about.html");
	document.getElementById("cn-index7").setAttribute("href","./support/zh-cn/");
	document.getElementById("cn-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("cn-index9").setAttribute("href","./page/version.html");
	document.getElementById("cn-index10").setAttribute("href","");
	
}

function cn_url2(){
	document.getElementById("cn-index1").setAttribute("href","schedule.html");
	document.getElementById("cn-index2").setAttribute("href","member.html");
	document.getElementById("cn-index3").setAttribute("href","cinfo.html");
	document.getElementById("cn-index4").setAttribute("href","ranking.html");
	document.getElementById("cn-index5").setAttribute("href","noi.html");
	document.getElementById("cn-index6").setAttribute("href","about.html");
	document.getElementById("cn-index7").setAttribute("href","../support/zh-cn");
	document.getElementById("cn-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("cn-index9").setAttribute("href","version.html");
	document.getElementById("cn-index10").setAttribute("href","");	
}
function cn_urlsup(){
	document.getElementById("cn-index1").setAttribute("href","https://www.midnightnth.club/schedule.html");
	document.getElementById("cn-index2").setAttribute("href","https://www.midnightnth.club/member.html");
	document.getElementById("cn-index3").setAttribute("href","https://www.midnightnth.club/cinfo.html");
	document.getElementById("cn-index4").setAttribute("href","https://www.midnightnth.club/ranking.html");
	document.getElementById("cn-index5").setAttribute("href","https://www.midnightnth.club/noi.html");
	document.getElementById("cn-index6").setAttribute("href","https://www.midnightnth.club/about.html");
	document.getElementById("cn-index7").setAttribute("href","");
	document.getElementById("cn-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("cn-index9").setAttribute("href","https://www.midnightnth.club/version.html");
	document.getElementById("cn-index10").setAttribute("href","");
}
function cn_url3(){
	document.getElementById("cn-index1").setAttribute("href","../schedule.html");
	document.getElementById("cn-index2").setAttribute("href","../member.html");
	document.getElementById("cn-index3").setAttribute("href","../cinfo.html");
	document.getElementById("cn-index4").setAttribute("href","../ranking.html");
	document.getElementById("cn-index5").setAttribute("href","../noi.html");
	document.getElementById("cn-index6").setAttribute("href","../about.html");
	document.getElementById("cn-index7").setAttribute("href","../../support/zh-cn");
	document.getElementById("cn-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("cn-index9").setAttribute("href","../version.html");
	document.getElementById("cn-index10").setAttribute("href","");
}

function en_text() {
	document.getElementById("en-index1").innerHTML="Fleet schedule";
	document.getElementById("en-index-li1").style.display = "inherit";
	
	document.getElementById("en-index2").innerHTML="Team members";
	document.getElementById("en-index-li2").style.display = "inherit";
	
	document.getElementById("en-index3").innerHTML="Vehicle information";
	document.getElementById("en-index-li3").style.display = "inherit";
	
	document.getElementById("en-index4").innerHTML="Ranking List";
	document.getElementById("en-index-li4").style.display = "inherit";
	
	document.getElementById("en-index5").innerHTML="Announcement / notice";
	document.getElementById("en-index-li5").style.display = "inherit";
	
	document.getElementById("en-index6").innerHTML="About Us";
	document.getElementById("en-index-li6").style.display = "inherit";
	
	document.getElementById("en-index7").innerHTML="Support";
	document.getElementById("en-index-li7").style.display = "inherit";
	
	document.getElementById("en-index8").innerHTML="Midnight Movies";
	document.getElementById("en-index-li8").style.display = "inherit";
	
	document.getElementById("en-index9").innerHTML="About";
	document.getElementById("en-index-li9").style.display = "inherit";
	
	document.getElementById("en-index10").innerHTML="";
	document.getElementById("en-index-li10").style.display = "none";
	
	document.getElementById("version-nav").innerHTML="Midnight UI 4 Developer Beta"
	
}
function en_url1(){
	document.getElementById("en-index1").setAttribute("href","./page/schedule.html");
	document.getElementById("en-index2").setAttribute("href","./page/member.html");
	document.getElementById("en-index3").setAttribute("href","./page/cinfo.html");
	document.getElementById("en-index4").setAttribute("href","./page/ranking.html");
	document.getElementById("en-index5").setAttribute("href","./page/noi.html");
	document.getElementById("en-index6").setAttribute("href","./about.html");
	document.getElementById("en-index7").setAttribute("href","http://support.midnightnth.club/en-us");
	document.getElementById("en-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("en-index9").setAttribute("href","./page/version.html");
	document.getElementById("en-index10").setAttribute("href","");
}

function en_url2(){
	document.getElementById("en-index1").setAttribute("href","schedule.html");
	document.getElementById("en-index2").setAttribute("href","member.html");
	document.getElementById("en-index3").setAttribute("href","cinfo.html");
	document.getElementById("en-index4").setAttribute("href","ranking.html");
	document.getElementById("en-index5").setAttribute("href","noi.html");
	document.getElementById("en-index6").setAttribute("href","about.html");
	document.getElementById("en-index7").setAttribute("href","http://support.midnightnth.club/en-us");
	document.getElementById("en-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("en-index9").setAttribute("href","version.html");
	document.getElementById("en-index10").setAttribute("href","");
}

function en_url3(){
	document.getElementById("en-index1").setAttribute("href","../schedule.html");
	document.getElementById("en-index2").setAttribute("href","../member.html");
	document.getElementById("en-index3").setAttribute("href","../cinfo.html");
	document.getElementById("en-index4").setAttribute("href","../ranking.html");
	document.getElementById("en-index5").setAttribute("href","../noi.html");
	document.getElementById("en-index6").setAttribute("href","../about.html");
	document.getElementById("en-index7").setAttribute("href","http://support.midnightnth.club/en-us");
	document.getElementById("en-index8").setAttribute("href","https://movie.midnightnth.club");
	document.getElementById("en-index9").setAttribute("href","../version.html");
	document.getElementById("en-index10").setAttribute("href","");
}

function index_ver(){
	document.getElementById("version-nav").innerHTML="Midnight UI 4 Developer Beta"
	
}
function not(){
	var alertmessage="公告\n\n网站将于2022年1月21日 下午23:00进行停机维护升级，届时您将无法访问网站，给您带来不便之处，敬请谅解。\n\n2022年1月21日"
	
	alert(alertmessage)
}
function note(){
	var alertmessage="Notice\n\nThe website will be shut down for maintenance and upgrading on January 21, 2022. PM 23:00 At that time, you will not be able to access the website, which will bring you inconvenience. Please understand.\n\nJanuary 21, 2022"
	
	alert(alertmessage)
}
function openhttp(){
	location.href = "https://www.apple.com.cn/iphone/wallpaper/?zodiac=tiger"
}
function download(){
	alert("打开后长按保存");
    window.location.href="https://www.apple.com.cn/iphone/wallpaper/?zodiac=tiger";                   
}
function openhttpwjx(){
	location.href = "https://www.wjx.cn/vj/wo39MkU.aspx"
}
function openhttpnew(){
	location.href = "./page/1login.html"
}
function no(){
	alert("该功能在您所在的国家/地区不可用")
	return false;
}
function noen(){
	alert("This feature is not available in your Country / Region")
}
function titock(){
	w = screen.availWidth;
	if(w>800)
		location.href = "https://www.douyin.com/user/MS4wLjABAAAAjVXKDMJ_TyGdZfu_YSrJzQ9_Gr4BVw7o3juNGQqZz54-fYL8jddfSPJ4UycfyXUW"
	else
		location.href = "snssdk1128://user/profile/4262120817963715"
		
}


function navopen(){undefined
	document.getElementById("nopen").onclick = ModalHelper.afterOpen();
	document.getElementById("nopen").onclick = ModalHelper.beforeClose();
}	


function open_text(){
	document.getElementById("open_text").style.display = "block";
	document.getElementById("please_open").style.display = "none";
}
function close_text(){
	document.getElementById("open_text").style.display = "none";
	document.getElementById("please_open").style.display = "block";
}
