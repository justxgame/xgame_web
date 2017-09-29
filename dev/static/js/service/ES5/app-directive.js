'use strict';

define(['angular', 'moment', 'jquery', 'Ps', 'daterange'], function (angular, moment, $) {
	'use strict';

	var appDirectives = angular.module('app.directives', []);
	appDirectives.directive('ngScrollbar', function () {
		return {
			link: function link($scope, $element) {
				$($element).perfectScrollbar();
			}
		};
	});
	appDirectives.directive('ngScrollbarY', function () {
		return {
			link: function link($scope, $element) {
				$($element).perfectScrollbar({
					suppressScrollX: true
				});
			}
		};
	});
	appDirectives.directive('ngFocus', [function () {
		var FOCUS_CLASS = "ng-focused";
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function link(scope, element, attrs, ctrl) {
				ctrl.$focused = false;
				element.bind('focus', function (evt) {
					element.removeClass(FOCUS_CLASS);
					scope.$apply(function () {
						ctrl.$focused = false;
					});
				}).bind('blur', function (evt) {
					element.addClass(FOCUS_CLASS);
					scope.$apply(function () {
						ctrl.$focused = true;
					});
				});
			}
		};
	}]);
	appDirectives.directive('tdRepeat', function ($timeout) {
		return {
			link: function link($scope, $element, $attrs) {
				if ($scope.$last == true && $scope.$parent.$last == true) {
					var finish = $attrs.tdRepeat;
					$timeout(function () {
						$scope.$eval(finish);
					}, 0);
				}
			}
		};
	});
	appDirectives.directive('ngTooltip', function ($parse) {
		return {
			link: function link($scope, $element, $attrs) {
				var $ele = $($element);
				var opt = $parse($attrs.opt)($scope);
				var defaults = {
					placement: 'auto top',
					container: 'body'
				};
				var options = $.extend(true, {}, defaults, opt);
				$ele.tooltip(options);
			}
		};
	});
	appDirectives.directive('ngInput', function ($rootScope, $parse) {
		return {
			template: function template(element, attrs) {
				var type = attrs.type ? attrs.type : 'text';
				var iconLeft = attrs.iconLeft ? attrs.iconLeft.indexOf('{') > -1 ? '<i class="icon icon-left ' + attrs.iconLeft + '"></i>' : '<i class="icon icon-left">' + attrs.iconLeft + '</i>' : '';
				var iconRight = attrs.iconRight ? attrs.iconRight.indexOf('{') > -1 ? '<i class="icon icon-right ' + attrs.iconRight + '"></i>' : '<i class="icon icon-right">' + attrs.iconRight + '</i>' : '';
				var placeholder = attrs.placeholder ? 'placeholder="' + attrs.placeholder + '"' : '';
				var errorLable = '';
				var valid = '';
				var name = attrs.name ? 'name="' + attrs.name + '"' : '';
				var model = attrs.model ? 'ng-model="' + attrs.model + '"' : '';
				var focus = attrs.model ? 'ng-focus' : '';
				if (attrs.valid) {
					var required = attrs.required ? attrs.required : '';
					var minlength = attrs.min ? attrs.min : '';
					var maxlength = attrs.max ? attrs.max : '';
					var pattern = attrs.pattern ? attrs.pattern : '';
					switch (type) {
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
					if (required != '') {
						valid += ' required=' + required;
						errorLable += '<span ng-show="(' + attrs.form + '.' + attrs.name + '.$error.required&&' + attrs.form + '.' + attrs.name + '.$touched)||(' + attrs.form + '.' + attrs.name + '.$error.required&&' + attrs.form + '.$submitted)" class="error-lable">内容不可为空</span>';
					}
					if (minlength != '') {
						valid += ' ng-minlength=' + minlength;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.minlength" class="error-lable">内容不可少于' + minlength + '个字</span>';
					}
					if (maxlength != '') {
						valid += ' ng-maxlength=' + maxlength;
						valid += ' maxlength=' + maxlength;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.maxlength" class="error-lable">内容不可多于' + maxlength + '个字</span>';
					}
					if (pattern != '') {
						valid += ' ng-pattern=' + pattern;
						errorLable += '<span ng-show="' + attrs.form + '.' + attrs.name + '.$error.pattern" class="error-lable">您输入的格式不正确</span>';
					}
				};
				return '<div class="clearfix default-input">' + iconLeft + iconRight + '<input  type="' + type + '" ' + valid + ' ' + model + ' ' + placeholder + ' ' + name + ' ' + focus + ' autocomplete="off" />' + errorLable + '</div>';
			},
			replace: true,
			controller: function controller($scope, $element, $attrs) {
				var opt = $parse($attrs.opt)($scope);
				var $this = $($element);
				if (opt && opt.class) {
					$this.addClass(opt.class);
				}
			}
		};
	});
	appDirectives.directive('datePicker', function ($rootScope, $parse) {
		return {
			template: '<div class="clearfix default-input date-picker-wrapper"><i class="icon icon-right" ng-click="pickerToggle()">&#xe616;</i><input class="date-picker" readonly="readonly"/></div>',
			replace: true,
			scope: {
				model: '=',
				apply: '=',
				picker: '='

			},
			controller: function controller($scope, $element, $attrs) {
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
				if (!$scope.model || $scope.model == '') {
					if (noToday) {
						$scope.model = moment().subtract(1, 'days').format('YYYY-MM-DD');
					} else {
						$scope.model = moment().format('YYYY-MM-DD');
					};
					$input.val($scope.model);
				} else {
					$input.datepicker('setDate', $scope.model);
				};
				$this.addClass(thisClass);
				$input.datepicker().on('show', function () {
					$this.addClass('open');
				});
				$input.datepicker().on('hide', function () {
					$this.removeClass('open');
				});
				if (!$attrs.free) {
					$input.datepicker('setStartDate', moment().subtract(90, 'days').format('YYYY-MM-DD'));
				};
				$scope.pickerToggle = function () {
					$input.datepicker('show');
				};
				$input.datepicker().on('hide', function (ev) {
					if ($scope.model == $(this).val()) return;
					$scope.model = $(this).val();
					$rootScope.$digest();
					if ($scope.apply) {
						$scope.apply();
					};
				});
			}
		};
	});
	appDirectives.directive('dateRangePicker', function ($rootScope, $parse) {
		return {
			template: '<div class="clearfix default-input date-range-picker-wrapper"><i class="icon icon-right" ng-click="pickerToggle()">&#xe616;</i><input class="date-range-picker" readonly="readonly"/></div>',
			replace: true,
			scope: {
				model: '=',
				apply: '=?',
				opt: '=options',
				picker: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				var $this = $($element);
				var $input = $this.find('input');
				var size = $attrs.size ? $attrs.size : null;
				var opt = $scope.opt ? $scope.opt : {};
				var thisClass = $attrs.class;
				var noToday = $attrs.noToday ? true : false;
				var options, startDate, endDate;
				if (!noToday) {
					startDate = moment();
					endDate = moment();
					options = {
						size: size,
						maxDate: moment(),
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
				if (!$attrs.free) {
					opts.minDate = moment().subtract(90, 'days');
				};
				if (!$scope.model || $scope.model == '') {
					$scope.model = undefined;
				} else {
					opts.startDate = moment($scope.model.split('|')[0]);
					opts.endDate = moment($scope.model.split('|')[1]);
				};
				$this.addClass(thisClass);
				$input.daterangepicker(opts);
				$scope.picker = $input.data('daterangepicker');
				$scope.pickerToggle = function () {
					$scope.picker.show();
				};
				$input.on('show.daterangepicker', function () {
					$this.addClass('open');
				});
				$input.on('hide.daterangepicker', function () {
					$this.removeClass('open');
				});
				$input.on('apply.daterangepicker', function (ev, picker) {
					console.log(picker);
					$(this).val(picker.chosenLabel != '自定义时间' ? picker.chosenLabel : picker.startDate.format('YYYY-MM-DD') == picker.endDate.format('YYYY-MM-DD') ? picker.startDate.format('YYYY-MM-DD') : picker.startDate.format('YYYY-MM-DD') + '至' + picker.endDate.format('YYYY-MM-DD'));
					$scope.model = picker.startDate.format('YYYY-MM-DD') + '|' + picker.endDate.format('YYYY-MM-DD');
					$rootScope.$digest();
					if ($scope.apply) {
						$scope.apply();
					}
				});
			}
		};
	});
	appDirectives.directive('ngFocus', [function () {
		var FOCUS_CLASS = "ng-focused";
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function link(scope, element, attrs, ctrl) {
				ctrl.$focused = false;
				element.bind('focus', function (evt) {
					element.removeClass(FOCUS_CLASS);
					scope.$apply(function () {
						ctrl.$focused = false;
					});
				}).bind('blur', function (evt) {
					element.addClass(FOCUS_CLASS);
					scope.$apply(function () {
						ctrl.$focused = true;
					});
				});
			}
		};
	}]);
	appDirectives.directive('noResult', function ($rootScope, $parse) {
		return {
			template: function template($element, $attrs) {
				var height = $($element).parent().height();
				var info = $attrs.info ? $attrs.info : '暂无结果';
				return '<div class="no-result" style="line-height:' + height + 'px">' + info + '</div>';
			},
			replace: true
		};
	});

	appDirectives.directive('fltCheckbox', function () {
		return {
			template: function template($element, $attrs) {
				var tpl = '<div class="filter-bar form-line flt-checkbox clearfix">\n\t\t\t\t\t<div class="form-left">\n\t\t\t\t\t\t<div class="form-tag">{{data.itemName}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-right">\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12" ng-repeat="condition in data.conditions">\n\t\t\t\t\t\t\t<div class="form-input transition-02">\n\t\t\t\t\t\t\t\t<label class="clearfix"><input class="pull-left" type="checkbox" name="{{condition.val}}" value="{{condition}}" ng-checked="isChecked(condition)" ng-click="itemClick(condition,$index)" ng-model="tmp[$index]" /><span class="pull-left">{{condition.display}}</span></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>';
				return tpl;
			},
			replace: true,
			scope: {
				model: '=',
				data: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				var conditions = $scope.model.conditions;
				var updateModel = function updateModel(condition) {
					if (condition.val === null) {
						conditions.splice(0, conditions.length);
						return;
					};
					if (condition.val === 'all') {
						if (conditions.length < $scope.data.conditions.length) {
							conditions.splice(0, conditions.length);
							$scope.data.conditions.forEach(function (item) {
								conditions.push(item);
							});
						} else {
							conditions.splice(0, conditions.length);
						};
						return;
					};
					var idx = conditions.hasObj(condition);
					if (idx == -1) {
						conditions.push(condition);
					} else {
						conditions.splice(idx, 1);
					};
				};
				$scope.itemClick = function (condition, index) {
					delete condition.$$hashKey;
					updateModel(condition);
				};
				$scope.isChecked = function (condition) {
					delete condition.$$hashKey;
					if (condition.val === null) {
						return conditions.length == 0 ? true : false;
					} else if (condition.val === 'all') {
						return conditions.length == $scope.data.conditions.length ? true : false;
					} else {
						return conditions.hasObj(condition) > -1 ? true : false;
					};
				};
			}
		};
	});
	appDirectives.directive('fltRadio', function () {
		return {
			template: function template($element, $attrs) {
				var tpl = '<div class="filter-bar form-line flt-radio clearfix">\n\t\t\t\t\t<div class="form-left">\n\t\t\t\t\t\t<div class="form-tag">{{data.itemName}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-right">\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12" ng-repeat="condition in data.conditions">\n\t\t\t\t\t\t\t<div class="form-input transition-02">\n\t\t\t\t\t\t\t\t<label class="clearfix"><input class="pull-left" type="radio" name="{{data.itemkey}}" value="{{condition}}" ng-checked="isChecked(condition)" ng-click="itemClick(condition,$event)" ng-model="tmp[$index]" /><span class="pull-left">{{condition.display}}</span></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>';
				return tpl;
			},
			replace: true,
			scope: {
				model: '=',
				data: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				var conditions = $scope.model.conditions;
				console.log(conditions);
				var updateModel = function updateModel(condition) {
					conditions.splice(0, conditions.length);
					conditions.push(condition);
					console.log($scope.model.conditions);
				};
				$scope.itemClick = function (condition, e) {
					delete condition.$$hashKey;
					updateModel(condition);
				};
				$scope.isChecked = function (condition) {
					delete condition.$$hashKey;
					return conditions.hasObj(condition) > -1 ? true : false;
				};
			}
		};
	});
	appDirectives.directive('fltCheckboxInput', function () {
		return {
			template: function template($element, $attrs) {
				var tpl = '<div class="filter-bar form-line flt-checkbox-input clearfix">\n\t\t\t\t\t<div class="form-left">\n\t\t\t\t\t\t<div class="form-tag">{{data.itemName}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-right">\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12" ng-repeat="condition in data.conditions">\n\t\t\t\t\t\t\t<div class="form-input transition-02">\n\t\t\t\t\t\t\t\t<label class="clearfix"><input class="pull-left" type="checkbox" name="{{condition.val}}" value="{{condition}}" ng-checked="isChecked(condition)" ng-click="itemClick(condition,$index)" ng-model="tmp[$index]" /><span class="pull-left">{{condition.display}}</span></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12">\n\t\t\t\t\t\t\t<div class="form-input transition-02 input-wrapper">\n\t\t\t\t\t\t\t\t<input type="number" class="number pull-left" ng-model="start" ng-change="inputChange()" placeholder="\u81EA\u5B9A\u4E49" />\n\t\t\t\t\t\t\t\t<i class="pull-left bridge">-</i>\n\t\t\t\t\t\t\t\t<input type="number" class="number pull-left" ng-model="end" ng-change="inputChange()" />\n\t\t\t\t\t\t\t\t<span class="pull-left unit">\u6B21/\u5468</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>';
				return tpl;
			},
			replace: true,
			scope: {
				model: '=',
				data: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				$scope.start = undefined;
				$scope.end = undefined;
				var conditions = $scope.model.conditions;
				console.log(conditions);
				var updateModel = function updateModel(condition) {
					if (condition.val === null) {
						conditions.splice(0, conditions.length);
						$scope.start = undefined;
						$scope.end = undefined;
						return;
					};
					if (condition.val === 'all') {
						if (conditions.length < $scope.data.conditions.length) {
							conditions.splice(0, conditions.length);
							$scope.data.conditions.forEach(function (item) {
								conditions.push(item);
							});
						} else {
							conditions.splice(0, conditions.length);
						};
						$scope.start = undefined;
						$scope.end = undefined;
						return;
					};
					var idx = conditions.hasObj(condition);
					if (idx == -1) {
						conditions.push(condition);
					} else {
						conditions.splice(idx, 1);
					};
				};
				$scope.itemClick = function (condition, index) {
					delete condition.$$hashKey;
					updateModel(condition);
				};
				$scope.isChecked = function (condition) {
					delete condition.$$hashKey;
					if (condition.val === null) {
						return conditions.length == 0 ? true : false;
					} else if (condition.val === 'all') {
						return conditions.length == $scope.data.conditions.length ? true : false;
					} else {
						return conditions.hasObj(condition) > -1 ? true : false;
					};
				};
				$scope.inputChange = function () {
					conditions.splice(0, conditions.length);
					if ($scope.start != undefined || $scope.end != undefined) {
						conditions.push({
							id: 666,
							display: '自定义',
							val: ($scope.start != undefined ? $scope.start : '') + '|' + ($scope.end != undefined ? $scope.end : '')
						});
					};
				};
			}
		};
	});
	appDirectives.directive('fltRadioDate', function () {
		return {
			template: function template($element, $attrs) {
				var tpl = '<div class="filter-bar form-line flt-radio-date clearfix">\n\t\t\t\t\t<div class="form-left">\n\t\t\t\t\t\t<div class="form-tag">{{data.itemName}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-right">\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12" ng-repeat="condition in data.conditions">\n\t\t\t\t\t\t\t<div class="form-input transition-02">\n\t\t\t\t\t\t\t\t<label class="clearfix"><input class="pull-left" type="radio" name="{{data.itemkey}}" value="{{condition}}" ng-checked="isChecked(condition)" ng-click="itemClick(condition,$event)" ng-model="tmp[$index]" /><span class="pull-left">{{condition.display}}</span></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12">\n\t\t\t\t\t\t\t<date-range-picker class="md" model="queryDate" apply="dateApply()" picker="picker" options="pickerOpt"></date-range-picker>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>';
				return tpl;
			},
			replace: true,
			scope: {
				model: '=',
				data: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				var conditions = $scope.model.conditions;
				var picker = $($element).find('.date-range-picker');
				var updateModel = function updateModel(condition) {
					conditions.splice(0, conditions.length);
					$scope.queryDate = undefined;
					picker.val('请选择');
					conditions.push(condition);
					console.log($scope.model.conditions);
				};
				$scope.itemClick = function (condition, e) {
					delete condition.$$hashKey;
					updateModel(condition);
				};
				$scope.isChecked = function (condition) {
					delete condition.$$hashKey;
					return conditions.hasObj(condition) > -1 ? true : false;
				};
				$scope.pickerOpt = {
					parentEl: $($element).find('.date-range-picker-wrapper')
				};
				$scope.queryDate = undefined;
				console.log(conditions);
				$scope.dateApply = function () {
					if ($scope.queryDate != undefined) {
						conditions.splice(0, conditions.length);
						conditions.push({
							id: 666,
							display: '自定义',
							val: $scope.queryDate
						});
					};
				};
				picker.on('hide.daterangepicker', function (ev, p) {
					if ($scope.queryDate == undefined) {
						picker.val('请选择');
					}
				});
				$($element).on('click', '.daterangepicker .btn-unrestricted', function () {
					$scope.picker.hide();
					picker.val('不限时间');
					conditions.splice(0, conditions.length);
					conditions.push({
						id: 999,
						display: '不限时间',
						val: 0
					});
				});
			},
			link: function link($scope, $element) {
				var picker = $($element).find('.date-range-picker');
				picker.val('请选择');
			}
		};
	});
	appDirectives.directive('fltSelect', function () {
		return {
			template: function template($element, $attrs) {
				var tpl = '<div class="filter-bar form-line flt-select clearfix">\n\t\t\t\t\t\t<div class="form-left">\n\t\t\t\t\t\t\t<div class="form-tag">{{data.itemName}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-right">\n\t\t\t\t\t\t\t<div class="form-item col-md-2 col-sm-12 col-xs-12">\n\t\t\t\t\t\t\t\t<div class="dropdown form-content select transition-02 ">\n\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">\n\t\t\t\t\t\t\t\t\t\t<span class="val pull-left">\u8BF7\u9009\u62E9</span>\n\t\t\t\t\t\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t\t\t\t\t\t<span class="caret icon-arrow"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="dropdown-menu search animated fadeInUpSmall fast" role="menu">\n\t\t\t\t\t\t\t\t\t\t<ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="\u641C\u7D22\u7701\u4EFD"></ng-input>\n\t\t\t\t\t\t\t\t\t\t<div class="dropdown-list clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t<li role="presentation" ng-repeat="condition in data.conditions" ng-bind="condition.display" ng-click="itemClick($event,condition)" ng-show="drapListSearch(condition.display)" ng-class="{\'active\':isActive(condition)}"></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-item col-md-10 col-sm-12 col-xs-12">\n\t\t\t\t\t\t\t\t<i class="item-tag" ng-repeat="item in model.conditions">{{item.display}}<em class="iconfont" ng-click="delCondition(item)">&#xe641;</em></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t</div>';
				return tpl;
			},
			replace: true,
			scope: {
				model: '=',
				data: '=?'
			},
			controller: function controller($scope, $element, $attrs) {
				var conditions = $scope.model.conditions;
				console.log($scope.data);
				$scope.drapListSearch = function (name) {
					return $scope.inputKey == undefined || $scope.inputKey == '' || name.indexOf($scope.inputKey) > -1;
				};
				$scope.isActive = function (condition) {
					delete condition.$$hashKey;
					return conditions.hasObj(condition) > -1 ? true : false;
				};
				var updateModel = function updateModel(condition) {
					if (condition.val === null) {
						conditions.splice(0, conditions.length);
						return;
					};
					var idx = conditions.hasObj(condition);
					if (idx == -1) {
						conditions.push(condition);
					} else {
						conditions.splice(idx, 1);
					};
					console.log($scope.model.conditions);
				};
				$scope.itemClick = function (e, condition) {
					if (conditions.hasObj(condition) > -1) {
						e.stopPropagation();
						e.preventDefault();
						return;
					};
					delete condition.$$hashKey;
					updateModel(condition);
				};
				$scope.delCondition = function (condition) {
					conditions.splice(conditions.hasObj(condition), 1);
				};
			}
		};
	});
});