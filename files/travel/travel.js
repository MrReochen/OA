// JavaScript Document
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
	$("#pic12").click(function(){
		window.location.href="contract3.html";
	});
	$("#pic13").click(function(){
		window.location.href="addfile.html";
	});
	$("#pic3").click(function(){
		window.location.href="home.html";
	});
	$("#pic4").click(function(){
		window.location.href="home.html";
	});
	$("#add").click(function(){
		$("#box").show();
	});
	$("#box").click(function(){
		$("#box").hide();
	});
	$("#switch").click(function(){
		/*if(document.getElementById("switch").src==="images/contract/switch.png")
		{
			document.getElementById("switch").src = "images/contract/switch2.png";	
		}*/
		$("#switch").toggle();
		$("#switch1").toggle();
	});
	$("#switch1").click(function(){
		/*if(document.getElementById("switch").src==="images/contract/switch.png")
		{
			document.getElementById("switch").src = "images/contract/switch2.png";	
		}*/
		$("#switch").toggle();
		$("#switch1").toggle();
	});
});