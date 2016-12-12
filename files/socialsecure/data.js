// JavaScript Document
$(document).ready(function(){
	"use strict";
	var activePage=0;
	var status1=$(".status1");
	for(var i=0;i<status1.length;i++){
		if($(status1[i]).text().search("未缴纳")!==-1){
			$(status1[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	var status2=$(".status2");
	for(i=0;i<status2.length;i++){
		if($(status2[i]).text().search("未缴纳")!==-1){
			$(status2[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	var status3=$(".status3");
	for(i=0;i<status3.length;i++){
		if($(status3[i]).text().search("未缴纳")!==-1){
			$(status3[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	var status4=$(".status4");
	for(i=0;i<status4.length;i++){
		if($(status4[i]).text().search("未缴纳")!==-1){
			$(status4[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	var status5=$(".status5");
	for(i=0;i<status5.length;i++){
		if($(status5[i]).text().search("未缴纳")!==-1){
			$(status5[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	var status6=$(".status6");
	for(i=0;i<status6.length;i++){
		if($(status6[i]).text().search("未缴纳")!==-1){
			$(status6[i]).css("color","#ff3366");
		}else{
			break;
		}
	}
	
	var mySwiper=new Swiper('.swiper-container',{
		onSlideChangeEnd: function(swiper){
			activePage=swiper.activeIndex;
			switch (activePage){
				case 0:	$("#pageSwitch").animate({left:"304px"});
					break;
				case 1:	$("#pageSwitch").animate({left:"77px"});
					break;
				case 2:	$("#pageSwitch").animate({left:"-137px"});
					break;
				case 3:	$("#pageSwitch").animate({left:"-351px"});
					break;
				case 4: $("#pageSwitch").animate({left:"-567px"});
					break;
				case 5: $("#pageSwitch").animate({left:"-784px"});
					break;
				default: break;
			}
		},
	});
	
});