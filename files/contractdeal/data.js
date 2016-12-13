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
});