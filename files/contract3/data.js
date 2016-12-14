/* Sass Document */
$(document).ready(function(){
	"use strict";
	$("#pic14").hide();
	$("#pic12").click(function(){
		window.location.href="applyforholiday.html";
	});
	$("#pic3").click(function(){
		window.location.href="home.html";
	});
	$("#pic4").click(function(){
		window.location.href="home.html";
	});
	$("#pic13").click(function(){
		window.location.href="applyforreimbursement.html";
	});
	$("#pic9").click(function(){
		$("#pic14").show();
	});
	$("#pic14").click(function(){
		$("#pic14").hide();
	});
});
