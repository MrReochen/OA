$(document).ready(function(){
	"use strict";
$('#dd').calendar({
        trigger: '#date',
        zIndex: 999,
		format: 'yyyy-mm-dd',
       
    });
	$("#pic").hide();
	$("#check").click(function(){
		
	});
	$("#close").click(function(){
		window.location.href="home.html";
	});
	$(".addition").click(function(){
		$("#pic").show();
	});
	$("#pic").click(function(){
		$("#pic").hide();
	});

});