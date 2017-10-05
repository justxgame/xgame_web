define(['waves','fastclick','nprogress','js.cookie','jquery','bootstrap','Ps'],function(Waves,FastClick,NProgress,Cookies){
	Waves.init();
	Waves.attach('#sidebar-menu li', ['waves-block','waves-green']);
	$('.main_container>.left_col').perfectScrollbar({
		suppressScrollX: true
	});
    NProgress.start();
	var userInfo =Cookies.getJSON('user')?Cookies.getJSON('user'):{};
	$('.top_nav').find('.user').text(userInfo.userName);
(function($,sr){
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args); 
                timeout = null; 
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

	
	
// Sidebar
function init_sidebar() {

var setContentHeight = function () {
	// reset height
	$RIGHT_COL.css('min-height', $(window).height());

	var bodyHeight = $BODY.outerHeight(),
		footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
		leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
		contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;


	$RIGHT_COL.css('min-height', contentHeight);
};

  $SIDEBAR_MENU.find('a').on('click', function(ev) {
	  if($(this).data('toggle')!='collapse'){
			var li = $(this).parent('li').siblings('li');
			li.each(function(){
				if($(this).find('.in').length==0){
					$(this).find('[data-toggle="collapse"]').removeClass('open');
				};
			});
		}else{
			console.log($(this).next('.collapse'));
			$(this).next('.collapse').collapse('toggle');
		}
    });
	
// toggle small or large menu 
$MENU_TOGGLE.on('click', function() {
		console.log('clicked - menu toggle');
		
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}

	$BODY.toggleClass('nav-md nav-sm');

	setContentHeight();
});

	// check active menu
	$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

	$SIDEBAR_MENU.find('a').filter(function () {
		return this.href == CURRENT_URL;
	}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
		setContentHeight();
	}).parent().addClass('active');

	// recompute content when resizing
	$(window).smartresize(function(){  
		setContentHeight();
	});

	setContentHeight();

	// fixed sidebar
	if ($.fn.mCustomScrollbar) {
		$('.menu_fixed').mCustomScrollbar({
			autoHideScrollbar: true,
			theme: 'minimal',
			mouseWheel:{ preventDefault: true }
		});
	}
};
// /Sidebar

	var randNum = function() {
	  return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
	};


// Progressbar
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar();
}
// /Progressbar

 
	   
	$(document).ready(function() {
				
		init_sidebar();
//		init_sparklines();
//		init_flot_chart();
//		init_wysiwyg();
//		init_InputMask();
//		init_JQVmap();
//		init_cropper();
//		init_knob();
//		init_IonRangeSlider();
//		init_ColorPicker();
//		init_TagsInput();
//		init_parsley();
//		init_daterangepicker();
//		init_daterangepicker_right();
//		init_daterangepicker_single_call();
//		init_daterangepicker_reservation();
//		init_SmartWizard();
//		init_EasyPieChart();
//		
//		init_skycons();
//		init_select2();
//		init_validator();
//		init_DataTables();
//		init_chart_doughnut();
//		init_gauge();
//		init_PNotify();
//		init_starrr();
//		init_calendar();
//		init_compose();
//		init_CustomNotification();
//		init_autosize();
//		init_autocomplete();
				
	});	
	
});
