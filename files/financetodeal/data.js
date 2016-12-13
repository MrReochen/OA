// JavaScript Document
$(document).ready(function(){
	"use strict";
	var approval=false;
	if(!approval){
		$("#approvalPass").hide();
	}
	$("#approvalPass").click(function(){
		$("#approvalPass").hide();
		$("#approvalDeny").show();
		approval=false;
	});
	$("#approvalDeny").click(function(){
		$("#approvalDeny").hide();
		$("#approvalPass").show();
		approval=true;
	});
	var totalCost=$(".totalCost");
	var journeyCost=$(".journeyCost");
	var cost=0;
	for(var i=0;i<journeyCost.length/3;i++){
		cost=0;
		for(var j=0;j<3;j++){
			cost += Number($(journeyCost[i*3+j]).text());
		}
		totalCost[i].innerHTML= cost.toFixed(2);
	}
	
});

