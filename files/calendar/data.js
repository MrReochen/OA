// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","772px");
	var today=2;
	var isToday=$(".isToday");
	var haveEvents=$(".haveEvents");
	for(var i=0;i<7;i++)
		{
			if(i!==today-1){
				$(isToday[i]).hide();
			}
		}
	$(haveEvents[0]).hide();$(haveEvents[2]).hide();$(haveEvents[3]).hide();$(haveEvents[6]).hide();
	var mySwiper=new Swiper('.swiper-container',{
		loop:true
	});
	
});