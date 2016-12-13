// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#switch").hide();
	$("#switch").click(function(){
		$("#switch").toggle();
		$("#switch1").toggle();
	});
	$("#switch1").click(function(){
		$("#switch").toggle();
		$("#switch1").toggle();
	});
	$("#close").click(function(){
		window.history.back();
	});
});