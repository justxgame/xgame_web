//---------------------------------
//Site:  chebnb - module-getCode
//Author: Clearlove 7*
//Updated: 2015.12.1 
//Version: 1.0 
//---------------------------------
define(["domReady","baseSet","session","tools","touch","jquery"], function(domReady,baseSet,session,tools){
	var Global = {
		ajaxCache:function(){
			$.ajaxSetup({
		        cache: false
		    });
		},
		docHieght:function(){
			var wH = $(window).height();
			var dH = $("html").height();
			if(dH<wH){
				$("html").height(wH);
			};
		},
		footBar:function(){
			function randomString(len) {
			　　len = len || 32;
			　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
			　　var maxPos = $chars.length;
			　　var pwd = '';
			　　for (i = 0; i < len; i++) {
			　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			　　};
			　　return pwd;
			};
			$(document).on("tap","footer.bar a",function(){
				if(!$(this).hasClass("on")){
				var index = $(this).index();
				var href = baseSet.pageHost;
				var nowHref = window.location.href;
				//alert(index);
				switch(index){
					case 0:
					href+="/index.html";break;
					case 1:
					href+="/send-car.html";break;
					case 2:
					href+="/order-list.html";break;
					case 3:
					href+="/user.html";break;
					default:
					href+="/index.html";
				};
				//console.log(randomString(10));
				window.location.href=href+"?noread="+randomString(10);
				}
			});
		},
		removeLoading:function(){
			$("body").find(".bg-shadow,.mask-shadow,.loading-gif").remove();
		},
		customerSupport:function(){
			$(document).on("tap",".customer-support",function(){
				window.location.href="tel:4009219500";
			});
		},
		testEv:function(){
			$("header").append("测试环境")
		}
	};
	domReady(function(){
		tools.pageInfo();
		Global.ajaxCache();
		Global.docHieght();
		Global.footBar();
		//Global.testEv();
		Global.customerSupport();
	});
	return Global
});