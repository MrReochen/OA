/* Sass Document */

$(document).ready(function(){
	"use strict";
	$("#menu").hide();
	$("#box").hide();
	$("#switch").hide();
	$("#choose").click(function(){
		 $("#menu").slideToggle();
	});
	$("#word2").click(function(){
		window.location.href="applyforreimbursement.html";
	});
	$("#word3").click(function(){
		window.location.href="travelfund.html";
	});
	$("#word4").click(function(){
		window.location.href="reception.html";
	});
	$("#word5").click(function(){
		window.location.href="training.html";
	});
	$("#word6").click(function(){
		window.location.href="maintain.html";
	});
	$("#word8").click(function(){
		window.location.href="oil-after.html";
	});
	$("#word9").click(function(){
		window.location.href="oil.html";
	});
	$("#pic12").click(function(){
		window.location.href="contract3.html";
	});
	$("#pic13").click(function(){
		window.location.href="addfile.html";
	});
	$("#pic3").click(function(){
		
	});
	$("#pic4").click(function(){
		window.location.href="home.html";
	});
	$(".pic").click(function(){
		$("#box").show();
	});
	$("#box").click(function(){
		$("#box").hide();
	});
	$("#switch").click(function(){
		$("#switch").toggle();
		$("#switch1").toggle();
	});
	$("#switch1").click(function(){
		$("#switch").toggle();
		$("#switch1").toggle();
	});
});