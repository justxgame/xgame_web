

var stamp = (new Date).getTime();

var staticUrl = './static';
'use strict';
requirejs.config({
//	urlArgs:'v=' +  stamp,
	baseUrl: staticUrl+'/js',
	//test
	//baseUrl: 'http://www.xxx.com/static/js/lib',
	// paths选项设定。“module / name ':”path“指定。扩展（js）指定。
	paths: {
//基础lib----------------
		'baseSet': 'libs/default/baseSet',
		'jquery': 'libs/jquery/jquery.min',
		'bootstrap': 'libs/bootstrap/bootstrap',
		'browser': 'libs/custom/browser',
		'domReady': 'libs/require/domReady',
		'cache': 'libs/custom/cache',
		'swiper': 'libs/swiper/swiper.min',
		'swiper.animate': 'libs/swiper/swiper.animate1.0.2.min',
		'wow': 'jlibs/query/wow.min',
		'svgcheckbx':'libs/default/svgcheckbx',
		'stickUp': 'libs/jquery/stickUp.min',
		'session': 'libs/custom/sessionStorage',
		'local': 'libs/custom/localStorage',
		'validate': 'libs/jquery/Validate/jquery.validate.min',
		'validateMethods': 'libs/jquery/Validate/validate-methods',
		'widgetMap': 'libs/custom/widgetMap',
		//2015-06-10 7*添加 jquery-touch事件
		'touch':'libs/jquery/jquery.touch',
		'tap':'libs/jquery/touch/tap',
		'dialog':'libs/jquery/dialog',
		'area':'libs/custom/areaSelect',
		'touchwipe':'libs/jquery/touch/touchwipe.min',
		'webupload':'libs/jquery/diyupload/webuploader.html5only',
		'diyUpload':'libs/jquery/diyupload/diyUpload',
		'cookie':'libs/jquery/jquery.cookie',
		'colResizable':'libs/jquery/colResizable.min',
		'tmp':'libs/default/artTemplate',
		'helper':'libs/default/tmp.helper',
		text: 'libs/require/text',
		'css': 'libs/require/css',
//custom-----------------------
		'tools': 'libs/custom/tools',
		'ajax': 'libs/custom/ajax',
		'geturl': 'libs/custom/getUrlVars',
		'api':'libs/custom/api',
		'loader':'libs/custom/loader',
		'appAlert':'libs/custom/appAlert',
		'sweetalert':'libs/other/sweetalert2',
		'loading':'libs/custom/loading',
//angular----------------
		'angular':'libs/angular/angular',
		'angular-route':'libs/angular/angular-route',
		'app':'app',
		'appController':'service/ES5/app-controller',
		'appDirectives':'service/ES5/app-directive',
		'appServices':'service/ES5/app-service',
		'appFactorys':'service/ES5/app-factory',
		'appTemplates':'service/ES5/app-templates',
		'angular-datatable':'libs/angular/angular-datatables',
//code--------------
		'code':'libs/code/codemirror.min',
		'SQL':'libs/code/sql',
		'showHint':'libs/code/show-hint',
		'sqlHint':'libs/code/sql-hint',
		'activeLine':'libs/code/active-line',
		'codeScreenfull':'libs/code/fullscreen',
		'codeScrollbar':'libs/code/code-scrollbar',
//module--------------------------
		'Global':'libs/module/global',
		'getCode':'libs/module/getCode',
		'checkLogin':'libs/module/checkLogin',
		'goBack':'libs/module/goBack',
		'dateFormat':'libs/custom/date-format',
//jquery--------------------------
		'paginator':'libs/jquery/paginator',
		'parallax':'libs/jquery/jquery.parallax',
		'Ps':'libs/jquery/perfect-scrollbar',
		'toastr':'libs/jquery/jquery.toastr',
//table--------------------------------------
		'datatables':'libs/table/jquery.dataTables',
		'datatables.bootstrap':'libs/table/dataTables.bootstrap',
		'datatables.buttons':'libs/table/dataTables.buttons',
		'datatables.fixedColumns':'libs/table/dataTables.fixedColumns',
		'buttons.html5':'libs/table/buttons.html5',
		'buttons.bootstrap':'libs/table/buttons.bootstrap',
		'table':'libs/table/table',
//bootstrap-----------------------
		'moment': 'libs/bootstrap/moment',
		'moment.zh-cn':'libs/bootstrap/moment.zh-cn',
		'datepicker': 'libs/bootstrap/bootstrap-datepicker',
		'datetime': 'libs/bootstrap/bootstrap-datepicker',
		'daterange': 'libs/bootstrap/bootstrap-daterangepicker',
//formstone----------------------
		'fs.core':'libs/formstone/core',
		'fs.number':'libs/formstone/number',
//chart--------------------------
		'echarts':'libs/charts/echarts.min',
		'hicharts':'libs/charts/highcharts',
		'D3':'libs/charts/d3.v4.min',
		'echarts-themes':'libs/charts/echarts-themes',
//vendor-------------------------
		'modernizr':'vendor/modernizr/modernizr.custom',
		'storage':'vendor/jQuery-Storage-API/jquery.storageapi',
		'easing':'vendor/jquery.easing/js/jquery.easing',
		'animo':'vendor/animo.js/animo',
		'screenfull':'vendor/screenfull/dist/screenfull',
		'scrollbar':'libs/jquery/scrollbar.min',
		'mousewheel':'libs/jquery/jquery.mousewheel.min',
		'icheck':'libs/jquery/icheck.min',
		'jquery.bridget':'libs/jquery/jquery-bridget',
		'drag':'libs/jquery/draggabilly.min',
		'clipboard':'libs/other/clipboard.min',
		'js.cookie':'libs/other/js.cookie',
		'particleground':'libs/jquery/jquery.particleground.min',
		'countUp':'libs/jquery/countUp.min',
		'Hammer':'libs/other/hammer.min',
		'waves':'libs/other/waves',
		'vivus':'libs/other/vivus.min',
		'highlight':'libs/other/highlight',
		'iconfont':'../fonts/iconfont',
		'fastclick':'libs/other/fastclick',
		'nprogress':'libs/other/nprogress',
		'particles':'libs/other/particles',
		'jszip':'libs/other/jszip',
//------------socket----------------		
		'socket':'libs/socket/socket.io',
//------------kpi----------------	
		'kpiChartData':'libs/kpi/chartdata',
		'kpiLine':'libs/kpi/line',
		'kpiBar':'libs/kpi/bar',
		'kpiTable':'libs/kpi/table',
//------------common----------------
		'common':'common',
		'start':'start',
		'router-config':'router-config'
	},
	// shim选项设定。模块间的依存关系定义。
	shim: {
		'bootstrap': {
			// jQuery依赖，所以paths设定了“module / name”指定。
			deps: ['jquery']
		},
		'ajax': {
			deps: ['jquery']
		},
		'api': {
			deps: ['jquery','ajax']
		},
		'diyUpload': {
			deps: ['jquery','webupload'],
			exports:'diyUpload'
		},
		'webupload': {
			deps: ['jquery'],
			exports:'WebUploader'
		},
		'cookie': {
			deps: ['jquery'],
			exports:'cookie'
		},
		'js.cookie': {
			exports:'js.cookie'
		},
		'colResizable': {
			deps: ['jquery'],
			exports:'colResizable'
		},
		'scrollbar': {
			deps: ['jquery'],
			exports:'scrollbar'
		},
		'icheck': {
			deps: ['jquery'],
			exports:'icheck'
		},
		'drag': {
			deps: ['jquery'],
			exports:'drag'
		},
		'swiper':{
			deps:[],
			exports: 'Swiper'
		},
		'stickUp': {
			deps: ['jquery'],
			exports: 'stickUp'
		},
		'validate': {
			deps: ['jquery'],
			exports: 'validate'
		},
		'validateMethods': {
			deps: ['jquery', 'validate']
		},
		'touch':{
			deps: ['jquery'],
			exports: 'touch'
		},
		'tap':{
			deps: ['jquery'],
			exports: 'tap'
		},
		'touchwipe':{
			deps: ['jquery'],
			exports: 'touchwipe'
		},
		'dialog':{
			deps: ['jquery'],
			exports: 'dialog'
		},
		'loader':{
			deps: ['jquery'],
			exports: 'loader'
		},
		'angular': {
            exports: 'angular'
        },
		'angular-route': {
            deps: ['angular'],   //依赖什么模块
            exports: 'ngRouteModule'
        },
        'angular-animate': {
            deps: ['angular'],   //依赖什么模块
            exports: 'ngAnimate'
        },
		'storage':{
			deps: ['jquery','cookie'],
			exports: 'storage'
		},
		'easing':{
			deps: ['jquery'],
			exports: 'easing'
		},
		'particleground':{
			deps: ['jquery'],
			exports: 'particleground'
		},
		'countUp':{
			deps: ['jquery'],
			exports: 'countUp'
		},
        'dropkick':{
            deps:['jquery'],
            exports:'dropkick'
        },
        'jszip':{
            exports:'jszip'
        }
	},
	//启动应用程序
	deps: [
		//'common'
	],
	waitSeconds: 0
});
