$(document).ready(function(){
	"use strict";
	var newsPageNum=1;
	var news=$(".news");	
	$("#selectedPage").css("top","580px");
	for(var i=0;i<news.length;i++){
		if(i!==newsPageNum-1){
			$(news[i]).hide();
		}
	}

});