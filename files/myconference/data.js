// JavaScript Document
$(document).ready(function(){
	"use strict";
	$('#dd').calendar({
        trigger: '#date',
        zIndex: 999,
		format: 'yyyy-mm-dd',
       /* onSelected: function (view, date, data) {
            console.log('event: onSelected')
        },
        onClose: function (view, date, data) {
            console.log('event: onClose'),
            console.log('view:' + view),
            console.log('date:' + date),
            console.log('data:' + (data || 'None'));
        }*/
    });
	$("#pic").hide();
	$("#close").click(function(){
		window.location.href="home.html";
	});
	$("#edit").click(function(){
		window.location.href="home.html";
	});
	$("#add").click(function(){
		$("#pic").show();
	});
	$("#more").click(function(){
		$("#pic").show();
	});
	$("#detail").click(function(){
		$("#pic").show();
	});
	$("#pic").click(function(){
		$("#pic").hide();
	});

});