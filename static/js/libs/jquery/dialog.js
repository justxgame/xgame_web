/*
 * dialog v1.0 
 * 7*
 * 2015-06-12
 */

$.fn.dialog = function(options){
	$.fn.dialog.defaults = {
		className:'data-modal',//*弹出框的className，不能与其他元素的class相同
		size:'modal-md',//dialog的尺寸---与booststrap的大小class对应
		pos:'center',//dialog的位置,有top和center
		isHint:true,
		isTitle:true,//是否有title
		isYes:true,
		isIcon:true,
		show:true,
		color:'#999',
		type:'error',
		//主题内容
		body:'content',
		bodyCss:{
			'word-break':'break-all',
			'font-size':'12px',
			'line-height':'30px',
			'text-align':'center'
		},
		footerYes:'知道啦',//底部确定按钮名称
		footerCss:{//底部按钮位置
			'text-align':'center'
		},
		yesCallback:function(e){//底部确定按钮点击后执行的方法
			//console.log(e);
		}
	};
	return this.each(function(){
		var $this = this;
		var toggle = $this.getAttribute('data-toggle');
		var opts = $.extend({},$.fn.dialog.defaults,options);
		if(!toggle){
			var dialog_html = '';
			//操作HTML部分
			var hintClass = opts.isHint?'hint-modal':'';
			var errorClass = opts.type=='error'?'error-hint-modal':'';
			var init_html = '<div class="modal '+opts.className+' '+hintClass+' fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content">';
			var header_html = '<div class="modal-header clearfix"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="icon">&#xe615;</span></button></div>';
			var title_html = opts.isTitle?'<p class="title">消息提示</p>':'';
			var icon = opts.type=='error'?'<i class="icon error">&#xe616;</i>':'<i class="icon success">&#xe617;</i>';
			var icon_html = opts.isIcon?icon:'';
			var content_html = '<div class="modal-body">'+icon_html+title_html+'<div class="con">'+ opts.body+'</div></div>';
			var footer_html = opts.isYes ? '<div class="modal-footer"><button class="custom-btn custom-btn-default btn-yes" type="button">'+opts.footerYes+'</button></div>' : '';
			var end_html = '</div></div></div>';
			dialog_html =init_html +header_html +content_html +footer_html+end_html;
			$('body').find('.error-hint-modal').remove();
			$('body').append(dialog_html);
			var dialog = $('.'+opts.className);
			//操作CSS部分
			if(opts.pos=='center'){
				var w_height = $(window).height();
				var dialog_height = dialog.css({'display':'block'}).find('.modal-dialog .modal-content').outerHeight();//jquery无法获取display为none元素的宽度，所以改变下思路。
				dialog.css({'display':'none'});
				dialog.find('.modal-dialog').css({'margin-top':(w_height-dialog_height)/2});
			};
			dialog.find('.modal-body .con').css(opts.bodyCss);
			dialog.find('.modal-body .con').css('color',opts.color);
			dialog.find('.modal-footer').css(opts.footerCss);
			dialog.find('.modal-footer .btn-yes').on('click',function(e){
				e.stopPropagation();
				e.preventDefault();
				$(this).closest('.modal').modal('hide');
				opts.yesCallback(e);
			});
			//console.log(dialog_height);
			if(opts.show){
				dialog.modal('show');
			};
			dialog.find('button.close').on('click',function(e){
				e.stopPropagation();
				e.preventDefault();
				$(this).closest('.modal').modal('hide');
			});
			var dataTarget = $(this).attr('data-target');
			//console.log(dataTarget);
			if(!dataTarget==opts.className){
				$($this).attr({'data-target': '.'+opts.className,'data-toggle':'modal'});
			}
		}
	});
};