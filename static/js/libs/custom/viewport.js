//添加viewport-mate标签缩放网页。
!function(userAgent){
	if(!!userAgent.match(/AppleWebKit.*Mobile.*/)){
		var screen_w = parseInt(window.screen.width),
		    scale = screen_w / 750;
		    //alert(screen_w);
		    //alert(scale);
		    if (/Android (\d+\.\d+)/.test(userAgent)) {
		        var version = parseFloat(RegExp.$1);
		        if(userAgent.indexOf("MX")>-1&&version>=5){
		        	//alert(userAgent)
		        	document.write('<meta name="viewport" content="width=750,minimum-scale = ' + scale + ", maximum-scale = " + scale + ', target-densitydpi=device-dpi">');
		        }else{
		        	document.write(version > 2.3 ? '<meta name="viewport" content="width=750, minimum-scale = ' + scale + ", maximum-scale = " + scale + ', target-densitydpi=device-dpi">': '<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
		        };
		    } else {
		        document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
			    }
		}	    
}(navigator.userAgent);

//var time = new Date;
//var stamp = time.getTime();

	
	


