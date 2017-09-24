define(function() {
	var u = navigator.userAgent;
//	alert(navigator.userAgent);
	return{
			trident: u.indexOf('Trident') > -1, //IE内核
			petbnb: u.indexOf('Petbnb') > -1, //人人养宠App打开
			weixin:	u.indexOf('MicroMessenger') > -1,//微信
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			wp: u.indexOf('Windows Phone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			Miui: u.indexOf('MiuiBrowser') > -1, //是否移动MIUI浏览器
			UC: u.indexOf('UCBrowser') > -1, //是否移动UC浏览器
			Chrome: u.indexOf('Chrome') > -1, //是否移动Chrome浏览器
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			safari: u.indexOf('Safari') > -1 && u.indexOf("Chrome") < 1   //是否safari浏览器
	};
});