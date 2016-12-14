// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#close").click(function(){
		history.back();
	});
	var finished=$(".finished");
	$(finished[0]).click(function(){
		
	});
	$(".future").click(function(){
		window.location.href="myconference.html";
	});
});