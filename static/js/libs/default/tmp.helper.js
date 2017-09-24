define(["tmp"],function(template){
	/** 
 * 对日期进行格式化， 
 * @param date 要格式化的日期 
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有： 
 *     y:年, 
 *     M:年中的月份(1-12), 
 *     d:月份中的天(1-31), 
 *     h:小时(0-23), 
 *     m:分(0-59), 
 *     s:秒(0-59), 
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
	//template配置参数
	template.config("escape",false);
	//template.config("cache",false);
	template.helper('dateFormat', function (date, format) {
	    date = new Date(date);
	    var map = {
	        "M": date.getMonth() + 1, //月份 
	        "d": date.getDate(), //日 
	        "h": date.getHours(), //小时 
	        "m": date.getMinutes(), //分 
	        "s": date.getSeconds(), //秒 
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
	        "S": date.getMilliseconds() //毫秒 
	    };
	    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
	        var v = map[t];
	        if(v !== undefined){
	            if(all.length > 1){
	                v = '0' + v;
	                v = v.substr(v.length-2);
	            }
	            return v;
	        }
	        else if(t === 'y'){
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });
	    return format;
	});
	template.helper('carrierState', function (data) {
		var html = "";
		switch(data){
			case "1":html="<span class='state fn-right color-yellow'>可承运</span>";break;
			case "2":html="<span class='state fn-right color-gray'>已下架</span>";break;
			case "3":html="<span class='state fn-right color-gray'>已过期</span>";break;
		};
		return html;
	});
	template.helper('aryLen', function (data) {
		//console.log(data);
		var num = 0;
		num=data.length;
		return num;
		//console.log(date);
	});
	template.helper('orderState', function (data) {
		var html = "";
		switch(data){
			case "TY01":html='<div class="state match">匹配</div>';break;
			case "TY02":html='<div class="state doing">物流</div>';break;
			case "TY0201":html='<div class="state doing">物流</div>';break;
			case "TY0202":html='<div class="state doing">物流</div>';break;
			case "TY0203":html='<div class="state doing">物流</div>';break;
			case "TY03":html='<div class="state wait">待验</div>';break;
			case "TY0401":html='<div class="state give-car">交车</div>';break;
			case "TY0402":html='<div class="state done">清算</div>';break;
			case "TY05":html='<div class="state none">取消</div>';break;
		};
		return html;
	});
	template.helper('orderInfoState', function (data) {
		var html = "";
		switch(data){
			case "TY01":html='<div class="state match">匹配中</div>';break;
			case "TY02":html='<div class="state doing">物流中</div>';break;
			case "TY0201":html='<div class="state doing">物流中</div>';break;
			case "TY0202":html='<div class="state doing">物流中</div>';break;
			case "TY0203":html='<div class="state doing">物流中</div>';break;
			case "TY03":html='<div class="state wait">待验收</div>';break;
			case "TY0401":html='<div class="state give-car">可交车</div>';break;
			case "TY0402":html='<div class="state done">已清算</div>';break;
			case "TY05":html='<div class="state none">已取消</div>';break;
		};
		return html;
	});
	template.helper('userOrderState', function (data,subData) {
		var html = "";
		switch(data){
			case "TY01":html='<div class="state match">匹配</div>';break;
			case "TY02":html='<div class="state doing">物流</div>';break;
			case "TY03":if(subData=="TY0401"){
				html='<div class="state done">完成</div>';
			}else{
				html='<div class="state wait">待验</div>';
			};break;
			case "TY04":html='<div class="state done">完成</div>';break;
			case "TY05":html='<div class="state none">取消</div>';break;
		};
		return html;
	});
	template.helper('userOrderInfoState', function (data,subData) {
		var html = "";
		switch(data){
			case "TY01":html='<div class="state match">匹配中</div>';break;
			case "TY02":html='<div class="state doing">物流中</div>';break;
			case "TY03":if(subData=="TY0401"){
				html='<div class="state done">已完成</div>';
			}else{
				html='<div class="state wait">待验收</div>';
			};break;
			case "TY04":html='<div class="state done">已完成</div>';break;
			case "TY05":html='<div class="state none">已取消</div>';break;
		};
		return html;
	});
});