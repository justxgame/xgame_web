define(['angular', 'moment', 'jquery', 'Ps', 'paginator', 'datepicker', 'daterange'], function(angular, moment, $) {
	'use strict';
	var appDirectives = angular.module('app.directives', []);
	appDirectives.directive('ngScrollbar', function() {
		return {
			link: function($scope, $element) {
				$($element).perfectScrollbar();
			}
		}
	});
	appDirectives.directive('ngScrollbarY', function() {
		return {
			link: function($scope, $element) {
				$($element).perfectScrollbar({
					suppressScrollX: true
				});
			}
		}
	});
	appDirectives.directive('ngFocus', [function() {
		var FOCUS_CLASS = "ng-focused";
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {
				ctrl.$focused = false;
				element.bind('focus',
					function(evt) {
						element.removeClass(FOCUS_CLASS);
						scope.$apply(function() {
							ctrl.$focused = false;
						});
					}).bind('blur',
					function(evt) {
						element.addClass(FOCUS_CLASS);
						scope.$apply(function() {
							ctrl.$focused = true;
						});
					});
			}
		}
	}]);
	appDirectives.directive('tdRepeat', function($timeout) {
		return {
			link: function($scope, $element, $attrs) {
				if($scope.$last == true && $scope.$parent.$last == true) {
					var finish = $attrs.tdRepeat;
					$timeout(function() {
						$scope.$eval(finish);
					}, 0);
				}
			}
		}
	});
	appDirectives.directive('ngTooltip', function($parse) {
		return {
			link: function($scope, $element, $attrs) {
				var $ele = $($element);
				var opt = $parse($attrs.opt)($scope);
				var defaults = {
					placement: 'auto top',
					container: 'body'
				};
				var options = $.extend(true, {}, defaults, opt);
				$ele.tooltip(options);
			}
		}
	});
	appDirectives.directive('ngInput', function($rootScope, $parse) {
		return {
			template: function(element, attrs) {
				var type = attrs.type ? attrs.type : 'text';
				var iconLeft = attrs.iconLeft ? attrs.iconLeft.indexOf('{') > -1 ? '<i class="icon icon-left ' + attrs.iconLeft + '"></i>' : '<i class="icon icon-left">' + attrs.iconLeft + '</i>' : '';
				var iconRight = attrs.iconRight ? attrs.iconRight.indexOf('{') > -1 ? '<i class="icon icon-right ' + attrs.iconRight + '"></i>' : '<i class="icon icon-right">' + attrs.iconRight + '</i>' : '';
				var placeholder = attrs.placeholder ? 'placeholder="' + attrs.placeholder + '"' : '';
				var errorLable = '';
				var valid = '';
				var name = attrs.name ? 'name="' + attrs.name + '"' : '';
				var model = attrs.model ? 'ng-model="' + attrs.model + '"' : '';
				var focus = attrs.model ? 'ng-focus' : '';
				if(attrs.valid) {
					var required = attrs.required ? attrs.required : '';
					var minlength = attrs.min ? attrs.min : '';
					var maxlength = attrs.max ? attrs.max : '';
					var pattern = attrs.pattern ? attrs.pattern : '';
					switch(type) {
						case 'email':
							errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.email" class="error-lable">请输入正确的电子邮件格式</span>';
							break;
						case 'number':
							errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.number" class="error-lable">请输入正确的数字</span>';
							break;
						case 'url':
							errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.url" class="error-lable">请输入正确的URL</span>';
							break;
						default:
					}
					if(required != '') {
						valid += ' required=' + required;
						errorLable += '<span ng-show="(' + attrs.form + '.' + attrs.name + '.$error.required&&' + attrs.form + '.' + attrs.name + '.$touched)||' + attrs.form + '.' + attrs.name + '.$error.required&&' + attrs.form + '.$submitted" class="error-lable">内容不可为空</span>';
					}
					if(minlength != '') {
						valid += ' ng-minlength=' + minlength;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.minlength" class="error-lable">内容不可少于' + minlength + '个字</span>';
					}
					if(maxlength != '') {
						valid += ' ng-maxlength=' + maxlength;
						valid += ' maxlength=' + maxlength;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.maxlength" class="error-lable">内容不可多于' + maxlength + '个字</span>';
					}
					if(pattern != '') {
						valid += ' ng-pattern=' + pattern;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.pattern" class="error-lable">您输入的格式不正确</span>';
					}
				};
				return '<div class="clearfix default-input">' + iconLeft + iconRight + '<input  type="' + type + '" ' + valid + ' ' + model + ' ' + placeholder + ' ' + name + ' ' + focus + ' autocomplete="off" />' + errorLable + '</div>'
			},
			replace: true,
			controller: function($scope, $element, $attrs) {
				var opt = $parse($attrs.opt)($scope);
				var $this = $($element);
				if(opt&&opt.class){
					$this.addClass(opt.class);
				}
			}
		}
	});
	appDirectives.directive('datePicker', function($rootScope, $parse) {
		return {
			template: '<div class="clearfix default-input date-picker-wrapper"><i class="icon icon-right" ng-click="pickerToggle()">&#xe616;</i><input class="date-picker" readonly="readonly"/></div>',
			replace: true,
			scope: {
				model: '=',
				apply: '=',
				picker: '=',

			},
			controller: function($scope, $element, $attrs) {
				var $this = $($element);
				var $input = $this.find('input');
				var size = $attrs.size ? $attrs.size : null;
				var opt = $parse($attrs.opt)($scope);
				var thisClass = $attrs.class;
				var noToday = $attrs.noToday ? true : false;
				var options = {
					orientation: 'right',
					todayBtn: noToday ? false : 'linked',
					endDate: noToday ? moment().subtract(1, 'days').format('YYYY-MM-DD') : new Date()
				};
				var opts = $.extend({
					size: size
				}, options, opt);
				$input.datepicker(opts);
				console.log($scope.model);
				if(!$scope.model || $scope.model == '') {
					if(noToday) {
						$scope.model = moment().subtract(1, 'days').format('YYYY-MM-DD');
					} else {
						$scope.model = moment().format('YYYY-MM-DD');
					};
					$input.val($scope.model);
				} else {
					$input.datepicker('setDate', $scope.model);
				};
				$this.addClass(thisClass);
				$input.datepicker().on('show', function() {
					$this.addClass('open');
				});
				$input.datepicker().on('hide', function() {
					$this.removeClass('open');
				});
				if(!$attrs.free) {
					$input.datepicker('setStartDate', moment().subtract(90, 'days').format('YYYY-MM-DD'));
				};
				$scope.pickerToggle = function() {
					$input.datepicker('show');
				};
				$input.datepicker().on('hide',
					function(ev) {
						if($scope.model == $(this).val()) return;
						$scope.model = $(this).val();
						$rootScope.$digest();
						if($scope.apply) {
							$scope.apply();
						};
					});
			}
		}
	});
	appDirectives.directive('dateRangePicker', function($rootScope, $parse) {
		return {
			template: '<div class="clearfix default-input date-range-picker-wrapper"><i class="icon icon-right" ng-click="pickerToggle()">&#xe616;</i><input class="date-range-picker" readonly="readonly"/></div>',
			replace: true,
			scope: {
				model: '=',
				apply: '=?',
				opt: '=options',
				picker:'=?'
			},
			controller: function($scope, $element, $attrs) {
				var $this = $($element);
				var $input = $this.find('input');
				var size = $attrs.size ? $attrs.size : null;
				var opt = $scope.opt ? $scope.opt : {};
				var thisClass = $attrs.class;
				var noToday = $attrs.noToday ? true : false;
				var options, startDate, endDate;
				if(!noToday) {
					startDate = moment();
					endDate = moment();
					options = {
						size: size,
						maxDate: moment(),
						startDate: moment(),
						endDate: moment(),
						ranges: {
							'今天': [moment(), moment()],
							'最近7天': [moment().subtract(6, 'days'), moment()],
							'最近14天': [moment().subtract(13, 'days'), moment()],
							'最近30天': [moment().subtract(29, 'days'), moment()]
						}
					};
				} else {
					startDate = moment().subtract(7, 'days');
					endDate = moment().subtract(1, 'days');
					options = {
						size: size,
						maxDate: moment().subtract(1, 'days'),
						startDate: moment().subtract(7, 'days'),
						endDate: moment().subtract(1, 'days'),
						ranges: {
							'最近7天': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
							'最近14天': [moment().subtract(14, 'days'), moment().subtract(1, 'days')],
							'最近30天': [moment().subtract(30, 'days'), moment().subtract(1, 'days')]
						}
					};
				};
				var opts = $.extend({}, options, opt);
				if(!$attrs.free) {
					opts.minDate = moment().subtract(90, 'days');
				};
				if(!$scope.model || $scope.model == '') {
					$scope.model = startDate.format('YYYY-MM-DD') + '|' + endDate.format('YYYY-MM-DD');
				} else {
					opts.startDate = moment($scope.model.split('|')[0]);
					opts.endDate = moment($scope.model.split('|')[1]);
				};
				$this.addClass(thisClass);
				$input.daterangepicker(opts);
				$scope.picker = $input.data('daterangepicker');
				$scope.pickerToggle = function() {
					$scope.picker.show();
				};
				$input.on('show.daterangepicker', function() {
					$this.addClass('open');
				});
				$input.on('hide.daterangepicker', function() {
					$this.removeClass('open');
				});
				$input.on('apply.daterangepicker',
					function(ev, picker) {
						$(this).val(
							picker.chosenLabel != '自定义时间' ? picker.chosenLabel :
							picker.startDate.format('YYYY-MM-DD') == picker.endDate.format('YYYY-MM-DD') ? picker.startDate.format('YYYY-MM-DD') : picker.startDate.format('YYYY-MM-DD') +
							'至' +
							picker.endDate.format('YYYY-MM-DD'));
						$scope.model = picker
							.startDate.format('YYYY-MM-DD') +
							'|' +
							picker.endDate.format('YYYY-MM-DD');
						$rootScope.$digest();
						if($scope.apply) {
							$scope.apply();
						}
					});
			}
		}
	});
	appDirectives.directive('ngFocus', [function() {
		var FOCUS_CLASS = "ng-focused";
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {
				ctrl.$focused = false;
				element.bind('focus',
					function(evt) {
						element.removeClass(FOCUS_CLASS);
						scope.$apply(function() {
							ctrl.$focused = false;
						});
					}).bind('blur',
					function(evt) {
						element.addClass(FOCUS_CLASS);
						scope.$apply(function() {
							ctrl.$focused = true;
						});
					});
			}
		}
	}]);
	appDirectives.directive('noResult', function($rootScope, $parse) {
		return {
			template: function($element, $attrs) {
				var height = $($element).parent().height();
				var info = $attrs.info ? $attrs.info : '暂无结果';
				return '<div class="no-result" style="line-height:' + height + 'px">' + info + '</div>';

			},
			replace: true
		}
	});
});