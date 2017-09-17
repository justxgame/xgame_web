//---------------------------------
//Site:  Kingnet - date-format
//Author: Clearlove 7*
//Updated: 2016.4.7
//Version: 1.0 
//---------------------------------
define(["jquery"],function(){
	return {
		getDate:function(time, format) {
			var t = new Date(time);
			var tf = function(i) {
			    return (i < 10 ? '0': '') + i
			};
			return format.replace(/yyyy|MM|dd|HH|mm|ss/g,
			function(a) {
			    switch (a) {
			    case 'yyyy':
			        return tf(t.getFullYear());
			        break;
			    case 'MM':
			        return tf(t.getMonth() + 1);
			        break;
			    case 'mm':
			        return tf(t.getMinutes());
			        break;
			    case 'dd':
			        return tf(t.getDate());
			        break;
			    case 'HH':
			        return tf(t.getHours());
			        break;
			    case 'ss':
			            return tf(t.getSeconds());
			            break;
			        };
			    });
			},
		getTime:function(newDate){
			var time = Date.parse(newDate.replace(/-/g, "/"));
			return time;
		},
		localeDate:function(localeDate){
			return localeDate.toLocaleDateString().replace(/\//g, "-");
		}
	}
	
	
})