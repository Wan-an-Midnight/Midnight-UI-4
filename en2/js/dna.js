 // * @Author       : Junchen-Yi
 // * @Designer	    : Taohua-Nong
 // * @Date         : 2022-08-13 23:15:24
 // * @Program name : index.js
 // * Copyright (c) 2022 by Junchen-Yi Taohua-Nong, All Rights Reserved. 
 function like_li(){
 	document.getElementById("dna-card-like").style.display = "block";
 	document.getElementById("dna-card-healthy").style.display = "none";
 	document.getElementById("dna-card-friend").style.display = "none";
 	document.getElementById("dna-card-free").style.display = "none";
 	document.getElementById("dna-like-li").className = "dna-button-after";
 	document.getElementById("dna-healthy-li").className = "dna-button-befor";
 	document.getElementById("dna-friend-li").className = "dna-button-befor";
 	document.getElementById("dna-free-li").className = "dna-button-befor";
}
function healthy_li(){
    document.getElementById("dna-card-like").style.display = "none";
 	document.getElementById("dna-card-healthy").style.display = "block";
 	document.getElementById("dna-card-friend").style.display = "none";
 	document.getElementById("dna-card-free").style.display = "none";
 	document.getElementById("dna-like-li").className = "dna-button-befor";
 	document.getElementById("dna-healthy-li").className = "dna-button-after";
 	document.getElementById("dna-friend-li").className = "dna-button-befor";
 	document.getElementById("dna-free-li").className = "dna-button-befor"; 
}
function friend_li(){
	document.getElementById("dna-card-like").style.display = "none";
 	document.getElementById("dna-card-healthy").style.display = "none";
 	document.getElementById("dna-card-friend").style.display = "block";
 	document.getElementById("dna-card-free").style.display = "none";
 	document.getElementById("dna-like-li").className = "dna-button-befor";
 	document.getElementById("dna-healthy-li").className = "dna-button-befor";
 	document.getElementById("dna-friend-li").className = "dna-button-after";
 	document.getElementById("dna-free-li").className = "dna-button-befor"; 
}
function free_li(){
	document.getElementById("dna-card-like").style.display = "none";
 	document.getElementById("dna-card-healthy").style.display = "none";
 	document.getElementById("dna-card-friend").style.display = "none";
 	document.getElementById("dna-card-free").style.display = "block";
 	document.getElementById("dna-like-li").className = "dna-button-befor";
 	document.getElementById("dna-healthy-li").className = "dna-button-befor";
 	document.getElementById("dna-friend-li").className = "dna-button-befor";
 	document.getElementById("dna-free-li").className = "dna-button-after";
}