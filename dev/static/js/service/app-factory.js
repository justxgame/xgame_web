define(['angular','moment','jquery'], function(angular,moment, $) {
	'use strict';
	var appFactorys = angular.module('app.factorys', []);
	appFactorys.factory('destroy',function($rootScope){
		return function(scope){
			$rootScope.$on('$routeChangeSuccess', function(evt, next, current){
				if(scope!=null){
					scope.$destroy();
				}
				scope=null;
			});
		}
	});
	appFactorys.factory('chartDestroy',function($rootScope){
		return function(chart){
			$rootScope.$on('$routeChangeSuccess', function(evt, next, current){
				if(chart!=null){
					chart.dispose();
				}
				chart=null;
			});
		}
	});
	appFactorys.factory('watch',function($rootScope){
		return function(fn){
			var watch = $rootScope.$watch('appid',function(newVal,oldVal){
				if(newVal!=oldVal){
					fn(newVal,oldVal);
				}
			});
			$rootScope.$on('$routeChangeStart', function(evt, next, current){
				if(current){
					watch();
				}
			});
		}
	});
	appFactorys.factory('meta',function($rootScope){
		return function(fn){
			var meta = $rootScope.$watch('meta',function(newVal,oldVal){
				if(newVal){
					fn(newVal,oldVal);
				}
			});
			$rootScope.$on('$routeChangeStart', function(evt, next, current){
				if(current){
					meta();
				}
			});
		}
	});
	appFactorys.factory('getMillisecond',function(){
		return function(d){
			return moment(d).valueOf();
		}
	});
	appFactorys.factory('type',function(){
		return function(value){
			var type={};
			if(angular.isDefined(value)){
				type.isDefined = true;
			};
			if(angular.isString(value)){
				type.isString = true;
			};
			if(angular.isDate(value)){
				type.isDate = true;
			};
			if(angular.isObject(value)){
				type.isObject = true;
			};
			if(angular.isFunction(value)){
				type.isFunction = true;
			};
			if(angular.isElement(value)){
				type.isElement = true;	
			};
			if(angular.isNumber(value)){
				type.isNumber = true;
			};
			if(angular.isArray(value)){
				type.isArray = true;
			};
			if(angular.isUndefined(value)){
				type.isUndefined = true;
			};
			return type;
		}
	});
	appFactorys.factory('isArray',function($rootScope){
		return function(value){
			if (value instanceof Array ||
			    (!(value instanceof Object) &&
			        (Object.prototype.toString.call((value)) == '[object Array]') ||
			        typeof value.length == 'number' &&
			        typeof value.splice != 'undefined' &&
			        typeof value.propertyIsEnumerable != 'undefined' &&			        !value.propertyIsEnumerable('splice'))) {
			    return true;
			}
		}
	});
	appFactorys.factory('hexToRgba',function($rootScope){
		return function(hex,o){
			var color = [], rgb = [], opacity = o?o:1;
			hex = hex.replace(/#/,'');
			if (hex.length == 3) { // 处理 '#abc' 成 '#aabbcc'
				var tmp = [];
				for (var i = 0; i < 3; i++) {
					tmp.push(hex.charAt(i) + hex.charAt(i));
				};
				hex = tmp.join('');
			};
			for (var i = 0; i < 3; i++) {
				color[i] = '0x' + hex.substr(i*2, 2);
				rgb.push(parseInt(Number(color[i])));
			};
			return 'rgba(' + rgb.join(',') +','+ opacity+')';
		}
	});
	appFactorys.factory('rgbToHex ',function($rootScope){
		return function(rgb){
			// rgb(x, y, z)
			var color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
			var hex = '#';
			for (var i = 0; i < 3; i++) {
				// 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
				// 'color[i]' 是数组，要转换成字符串.
				// 如果结果是一位数，就在前面补零。例如： A变成0A
				hex += ('0' + Number(color[i]).toString(16)).slice(-2);
			}
			return hex;
		}
	});
	appFactorys.factory('dataFormat',function(){
		return function(data){
			if(data==null||data==undefined){
				return '-';
			};
			if(data>1500000000000){
				return moment(data).format('YYYY-MM-DD HH:mm');
			};
			return data;
		}
	});
});