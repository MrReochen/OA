// JavaScript Document
$(document).ready(function(){
	"use strict";
	var specialFocus=false;
	if(!specialFocus){
		$("#switchOn").hide();
	}
	$("#switchOn").click(function(){
		$("#switchOff").toggle();
		$("#switchOn").toggle();
		specialFocus=false;
	});
	$("#switchOff").click(function(){
		$("#switchOff").toggle();
		$("#switchOn").toggle();
		specialFocus=true;
	});
	$("#backwardButton").click(function(){
		window.location.href="contacts.html";
	});
});