define(['angular', 'require','angular-route','appDirectives','appServices','appFactorys','appTemplates','appController','jquery','table'],
function(angular, require){
	var app = angular.module('webapp', ['ngRoute','app.directives','app.services','app.factorys','app.template','app.controller']);
	app.run(function($rootScope,$location){
		$rootScope.$on('$routeChangeStart', function(evt, next, current){
	    	$('.daterangepicker').remove();
	    	$rootScope.path=$location.$$path;
	    	console.log($rootScope.path);
		});
		$rootScope.$on('$routeChangeSuccess', function(evt, next, current){
			if(current){
				$rootScope.prevPath=current.originalPath;
				//$window.history.replaceState('',document.title,'#'+current.originalPath);
			}else{
				$rootScope.prevPath='/event';
				//$window.history.pushState('', '');
			}
		});
	});
	app.directive('repeatFinish',function($timeout){
	    return {
	        link: function(scope,element,attr){
	            if(scope.$last == true){
	                var finish = attr.repeatFinish;
	                $timeout(function(){
	                	scope.$eval( finish )
	                },0);
	            }
	        }
	    }
	});
	app.directive('ngIfFinish',function($timeout){
	    return {
	        link: function(scope,element,attr){
	        	$timeout(function(){    					if($(element).is(':last-child')){
		        		var finish = attr.ngIfFinish;
		                $timeout(function(){
		                	scope.$eval(finish)
		                },0);
		        	}
                },0);
	        }
	    }
	});
    app.filter('trustHtml', function($sce) {
        return function(input) {
			return $sce.trustAsHtml(input);
        };
    });
    app.filter('hideLeft', function() {
    	return function(inputArray,hideNum){
    		var tmp = [];
    		for(var i =0;i<inputArray.length;i++){
    			if(i>=hideNum){
    				tmp.push(inputArray[i]);
    			}
			}
			return tmp;
    	}
    });
	app.service('autuHeight', function($rootScope){
		return function(){
			var blockHeight = $('.module-block').height();
			$rootScope.wHeight = $(window).height();
			$rootScope.cHeight = $rootScope.wHeight-50-40;
			if(blockHeight<$rootScope.cHeight){
				console.log(blockHeight);
				$('.module-block').height($rootScope.cHeight);
			}
		};
//		console.log($rootScope.cHeight);
//		console.log(blockHeight);
	});
    app.config(['$routeProvider', '$controllerProvider',
    function($routeProvider, $controllerProvider){
        var routeMap = {
            '/player': { //路由
                //模块的代码路径
                path: 'static/js/controller/player.js?v='+stamp,
                controller: 'playerController'
            },
            '/kpi': { //路由
                //模块的代码路径
                path: 'static/js/controller/kpi.js?v='+stamp,
                controller: 'kpiController'
            },
            '/delivery': { //路由
                //模块的代码路径
                path: 'static/js/controller/delivery.js?v='+stamp,
                controller: 'deliveryController'
            },
            '/server': { //路由
                //模块的代码路径
                path: 'static/js/controller/server.js?v='+stamp,
                controller: 'serverController'
            },
            '/inform': { //路由
                //模块的代码路径
                path: 'static/js/controller/inform.js?v='+stamp,
                controller: 'informController'
            },
            '/game': { //路由
                //模块的代码路径
                path: 'static/js/controller/game.js?v='+stamp,
                controller: 'gameController'
            }
        };
        //默认跳转到某个路由
        var defaultRoute = '/player ';
        //出现未定义路由跳转
        $routeProvider.otherwise({
            redirectTo: defaultRoute
        });
        for (var key in routeMap) {
            $routeProvider.when(key, {
                template:'',
                controller: routeMap[key].controller,
                resolve: {
                    keyName: requireModule(routeMap[key].path, routeMap[key].controller,key)
                }
            });
		}
		function requireModule(path, controller,key) {
            return function($route, $q,$templateCache) {
                var deferred = $q.defer();
                require([path],
                function(ret){
                    $controllerProvider.
                    register(controller,ret.controller);
                    $route.current.template = ret.tpl;
                    deferred.resolve();
                });
                return deferred.promise;
            }
        };
        function getTplName(tpl){
        	var tmp = tpl.split('/');
        	var name = '';
        	tmp.shift();
        	if(tmp.length>1){
        		name=tmp.join('-')
        	}else{
        		name = tmp[0];
        	}
        	return name;
        };
    }]);
    return app;
});
