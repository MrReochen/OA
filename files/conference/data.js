// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","964px");
	$("#myConferenceButton").click(function(){
		window.location.href="conferenceraised.html";
	});
	var notification=$(".notification");
	$(notification[0]).click(function(){
		window.location.href="conferencedetail.html";
	});
	$(notification[1]).click(function(){
		window.location.href="dealconference.html";
	});
	$(notification[2]).click(function(){
		window.location.href="conferencedetail.html";
	});
	$(notification[3]).click(function(){
		window.location.href="dealconference.html";
	});
	var report=$(".report");
	$(report).click(function(){
		window.location.href="conferencereport.html";
	});
});