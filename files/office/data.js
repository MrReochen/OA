// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#selectedPage").css("top","1156px");
	$("#search").click(function(){
		window.location.href="search.html?3";
	});
	var officePaper=$(".officePaper");
	$(officePaper[0]).click(function(){
		window.location.href="financetodeal.html";
	});
	$(officePaper[1]).click(function(){
		window.location.href="dealbreak.html";
	});
	$(officePaper[2]).click(function(){
		window.location.href="contractdeal.html";
	});
	var officePaperDealed=$(".officePaperDealed");
	$(officePaperDealed[0]).click(function(){
		window.location.href="officeschedule.html";
	});
	$(officePaperDealed[1]).click(function(){
		window.location.href="officeschedule.html";
	});
	$(officePaperDealed[2]).click(function(){
		window.location.href="contractschedule.html";
	});
});