// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","964px");
	$("#myConferenceButton").click(function(){
		window.location.href="conferenceraised.html";
	});
	var notification=$(".notification");
	$(notification).click(function(){
		window.location.href="conferencedetail.html";
	});
	var report=$(".report");
	$(report).click(function(){
		window.location.href="conferencereport.html";
	});
});