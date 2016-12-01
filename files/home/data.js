 $(document).ready(function(){
	"use strict";
	var addState=false;
	$("#selected1").hide();
	$("#selected3").hide();
	$("#selected4").hide();
	$("#selected5").hide();
	$("#selected6").hide();
	$("#selected7").hide();
	$("#notification1").hide();
	$("#notification3").hide();
	$("#notification4").hide();
	$("#notification7").hide();
	$("#added").hide();
	$("#add").click(function(){
		if(addState!==true){
			addState=true;
			$("#add").rotate({animateTo:225});
		}else{
			addState=false;
			$("#add").rotate({animateTo:0});
		}	
		$("#added").fadeToggle("slow");
	});
});