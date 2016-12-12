// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","772px");
	$("#search").click(function(){
		window.location.href="search.html?4";
	});
	var today=2;
	var isToday=$(".isToday");
	var haveEvents=$(".haveEvents");
	var activePage=0;
	for(var i=0;i<7;i++)
		{
			if(i!==today-1){
				$(isToday[i]).hide();
			}
		}
	$("#pageSwitch").css("left","461px");
	$(haveEvents[0]).hide();$(haveEvents[2]).hide();$(haveEvents[3]).hide();$(haveEvents[6]).hide();
	var mySwiper=new Swiper('.swiper-container',{
		onSlideChangeEnd: function(swiper){
			activePage=swiper.activeIndex;
			if(activePage===0){
				$("#pageSwitch").animate({left:"461px"});
			}else if(activePage===1){
				$("#pageSwitch").animate({left:"283px"});
			}else{
				$("#pageSwitch").animate({left:"81px"});
			}
		},
	});
	
});