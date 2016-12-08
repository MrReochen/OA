// JavaScript Document
$(document).ready(function(){
	"use strict";
	var nowSearch="文档";
	var searchText=["文档","会议","通讯录","公务","日程"];
	var loadInformation=location.search;
	var loadType=searchText[loadInformation.split("?")[1]];
	$("#searchType").text(loadType);
	$("#searchTypePicker").hide();
	$("#searchType").click(function(){
		$("#searchTypePicker").toggle();
	});
	$("#downward").click(function(){
		$("#searchTypePicker").toggle();
	});
	var searchType=$(".typeName");
	$(searchType[0]).click(function(){
		$("#searchType").text("文档");
		nowSearch="文档";
		$("#searchTypePicker").hide();
	});
	$(searchType[1]).click(function(){
		$("#searchType").text("会议");
		nowSearch="会议";
		$("#searchTypePicker").hide();
	});
	$(searchType[2]).click(function(){
		$("#searchType").text("通讯录");
		nowSearch="通讯录";
		$("#searchTypePicker").hide();
	});
	$(searchType[3]).click(function(){
		$("#searchType").text("公务");
		nowSearch="公务";
		$("#searchTypePicker").hide();
	});
	$(searchType[4]).click(function(){
		$("#searchType").text("日程");
		nowSearch="日程";
		$("#searchTypePicker").hide();
	});
	$("#searchContent").change(function(){
		var searchResult=$(".fileName");
		var searchWords=$("#searchContent").val();
		for(var i=0;i<searchResult.length;i++){
			searchResult[i].innerHTML=searchResult[i].innerHTML.replace(searchWords,"<span style='color: blue;'>$&</span>");
		}
	});
	/*var searchWords=$("#searchContent").text;
	*/
});