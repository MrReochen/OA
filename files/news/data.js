$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","580px");
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		//pagination : '#swiper-pagination1',
		paginationClickable :true,
		loop:true
	});
	$("#nextPage").click(function(){
		mySwiper.slideNext();
	});
});