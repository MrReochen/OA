// JavaScript Document
$(document).ready(function(){
	"use strict";
	var centerPercent=54;
	var leftPercent=28;
	var rightPercent=18;
	document.getElementById("percent1").innerHTML=String(centerPercent);
	document.getElementById("percent2").innerHTML=String(leftPercent);
	document.getElementById("percent3").innerHTML=String(rightPercent);
	var cc=document.getElementById("center");
	var cl=document.getElementById("left");
	var cr=document.getElementById("right");
	var ctxc=cc.getContext("2d");
	var ctxl=cl.getContext("2d");
	var ctxr=cr.getContext("2d");
	ctxc.beginPath();
	ctxc.arc(183,183,178,-(Math.PI/2),(2*centerPercent/100-0.5)*Math.PI);
	ctxc.lineWidth=8;
	ctxc.strokeStyle="#50d2c2";
	ctxc.stroke();
	ctxl.beginPath();
	ctxl.arc(105.5,105.5,100,-(Math.PI/2),(2*leftPercent/100-0.5)*Math.PI);
	ctxl.lineWidth=7;
	ctxl.strokeStyle="#fcab53";
	ctxl.stroke();
	ctxr.beginPath();
	ctxr.arc(105.5,105.5,100,-(Math.PI/2),(2*rightPercent/100-0.5)*Math.PI);
	ctxr.lineWidth=7;
	ctxr.strokeStyle="#ba77ff";
	ctxr.stroke();
	var todetail=$(".todetail");
	$(todetail[1]).click(function(){
		window.location.href="file_detail.html";
	});
});