// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#pic1").hide();
	$("#close").click(function(){
		window.history.back();
	});
	$("#pic").click(function(){
		$("#pic1").show();
	});
	$("#pic1").click(function(){
		$("#pic1").hide();
	});
	
});