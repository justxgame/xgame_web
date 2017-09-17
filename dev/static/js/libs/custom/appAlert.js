//---------------------------------
//Site:  kingnet - appAlert
//Author: Clearlove 7*
//Updated: 2016.5.16 
//Version: 1.0 
//---------------------------------
define(["jquery"], function(){
	return function(o){
		var defaults = {
			shadow:true,
			type:"error",
			con:"错误信息"
		};
		var op = $.extend({}, defaults, o);
		var alertClass = op.type;
		var alertIcon = op.type=="success"?"&#xe613;":"&#xe614;";
		var shadow = op.shadow? $('<div class="mask-shadow fade in"></div>'):"";
		var alert = $('<div class="alert fadeIn animated '+alertClass+'"><i class="icon">'+alertIcon+'</i><p class="alert-con">'+op.con+'</p></div>');
		$("body").append(shadow);
		$("body").append(alert);
		var box_width = alert.outerWidth();
		var box_height = alert.outerHeight();
		alert.css({
			"margin-left":"-"+box_width/2+"px",
			"margin-top":"-"+box_height/2+"px",
		});
		if(op.shadow){
			shadow.on("click",function(){
				shadow.remove();
				alert.remove();
			});
		};
		$(document).on("keydown",function(e){
			console.log(e);
		});
//		alert.on("animationend transitionend webkitAnimationEnd webkitTransitionEnd",function(){
//			if($(this).hasClass("fadeIn")){
//				setTimeout(function(){
//					alert.removeClass("fadeIn").addClass("fadeOut");
//				},1000);
//			}else{
//				setTimeout(function(){
//					if(op.shadow){
//						shadow.remove();
//					};
//					alert.remove();
//				},200)
//			}
//		});
	}
})