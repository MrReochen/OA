// JavaScript Document
$(document).ready(function(){
	"use strict";
	var steps=$(".steps");
	var stepStatus=$(".stepStatus");
	var stepTime=$(".stepTime");
	for(var i=0;i<steps.length;i++){
		if($(stepTime[i]).text()!==""){
			$(steps[i]).css("color","#ff3366");
			$(stepStatus[i]).css("color","#ff3366");
			$(stepTime[i]).css("color","#ff3366");
			break;
		}
	}
});