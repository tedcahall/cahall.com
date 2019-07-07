/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;
var popupDiv = "none";

//loading popup with jQuery magic!
function loadPopup(x){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#" + x).fadeIn("slow");
		popupStatus = 1;
                popupDiv=x;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
//		$("#popupContact").fadeOut("slow");
		$("#" + popupDiv).fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(x){
	//request data for centering
        var popupContact = "#" + x;
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
//	var popupHeight = $("#popupContact").height();
//	var popupWidth = $("#popupContact").width();
	var popupHeight = $(popupContact).height();
	var popupWidth = $(popupContact).width();
	//centering
//	$("#popupContact").css({
	$(popupContact).css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}

function renderPopup(x){
         centerPopup(x);
         loadPopup(x);
}

//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup("text");
		//load popup
		loadPopup("text");
	});
				
	//CLOSING POPUP
	//Click the x event!
//	$("#popupContactClose").click(function(){
//		disablePopup();
//	});

	//CLOSING POPUP
	//Click the x event!
	$(".popupContactCloseClass").click(function(){
		disablePopup();
	});

	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});