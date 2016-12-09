// JavaScript Document
$(document).ready(function(){
	"use strict";
	var allDay=false;
	var repeat=false;
	if(!repeat){
		$("#switch2On").hide();
	}
	if(!allDay){
		$("#switch1On").hide();
	}
	$("#switch1On").click(function(){
		$("#switch1On").toggle();
		$("#switch1Off").toggle();
		allDay=false;
	});
	$("#switch1Off").click(function(){
		$("#switch1On").toggle();
		$("#switch1Off").toggle();
		allDay=true;
	});
	$("#switch2On").click(function(){
		$("#switch2On").toggle();
		$("#switch2Off").toggle();
		repeat=false;
	});
	$("#switch2Off").click(function(){
		$("#switch2On").toggle();
		$("#switch2Off").toggle();
		repeat=true;
	});
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
	$("#timeBegin").timepicki();
	$("#timeEnd").timepicki();
});