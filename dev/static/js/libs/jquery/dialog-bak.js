/*
 * dialog v1.0 
 * 7*
 * 2015-06-12
 */

$.fn.dialog = function(options){
	var op = {
    	className:"error-dialog",
    	isHeader:true,
    	header:"错误信息",
    	isNo:false,
    	icon:true,
    	type:"error",
    	bodyCss:{
			"word-break":"break-all",
			"font-size":"14px",
			"line-height":"1.5",
			"text-align":"left"
		},
		footerCss:{//底部按钮位置
			"text-align":"right"
		}
   	};
	$.fn.dialog.defaults = {
		className:"data-modal",//*弹出框的className，不能与其他元素的class相同
		size:"modal-md",//dialog的尺寸---与booststrap的大小class对应
		pos:"center",//dialog的位置,有top和center
		isHeader:true,//是否有header
		isBody:true,//是否有body
		isFooter:true,//是否有footer,
		isYes:true,
		isNo:true,
		header:"title",//标题内容
		show:true,
		color:'#f1646a',
		type:'error',
		icon:false,
		//主题内容
		body:"contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
		bodyCss:{
			"word-break":"break-all",
			"font-size":"16px",
			"line-height":"1.5",
			"text-align":"center"
		},
		footerYes:"确定",//底部确定按钮名称
		footerNo:"取消",//底部取消按钮名称
		footerCss:{//底部按钮位置
			"text-align":"center"
		},
		yesCallback:function(e){//底部确定按钮点击后执行的方法
				//console.log(e);
		},
		noCallback:function(e){//底部取消按钮点击后执行的方法
			
		}
	};
	return this.each(function(){
		var $this = this;
		var toggle = $this.getAttribute("data-toggle");
		var opts= {};
		if(!toggle){
		if(options.type=='success'||options.type=='error'){
			opts = $.extend({},$.fn.dialog.defaults,op,options);
		}else{
			opts = $.extend({},$.fn.dialog.defaults,options);
		};
		var dialog_html = "";
		//操作HTML部分
		var init_html = "<div class='modal "+opts.className+" fade' tabindex='-1' role='dialog'><div class='modal-dialog "+opts.size+"'><div class='modal-content'>";
		var title_html = opts.isHeader? "<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true' class='icon'>&#xe615;</span></button><h4 class='modal-title'>"+opts.header+"</h4></div>" : "";
		var icon = opts.type=="error"?"<i class='icon error'>&#xe620;</i>":"<i class='icon success'>&#xe61f;</i>";
		var icon_html = opts.icon?icon:"";
		var content_html = opts.isBody ? "<div class='modal-body'><code>"+icon_html+ opts.body+"</code></div>" : "";
		var yes_html = opts.isYes?"<button class='custom-btn custom-btn-primary btn-yes' type='button'>"+opts.footerYes+"</button>":"";
		var no_html = opts.isNo?"<button data-dismiss='modal' class='btn btn-default btn-no ml-lg' type='button'>"+opts.footerNo+"</button>":"";
		var footer_html = opts.isFooter ? "<div class='modal-footer'>"+yes_html+no_html+"</div>" : "";
		var end_html = "</div></div></div>";
		dialog_html =init_html +title_html +content_html +footer_html+end_html;
		$("body").find(".error-dialog").remove();
		$("body").append(dialog_html);
		var dialog = $("."+opts.className);
		//操作CSS部分
		if(opts.pos=="center"){
			var w_height = $(window).height();
			var dialog_height = dialog.css({"display":"block"}).find(".modal-dialog .modal-content").outerHeight();//jquery无法获取display为none元素的宽度，所以改变下思路。
			dialog.css({"display":"none"});
			dialog.find(".modal-dialog").css({"margin-top":(w_height-dialog_height)/2});
		};
		dialog.find(".modal-body").css(opts.bodyCss);
		dialog.find(".modal-body").css("color",opts.color);
		dialog.find(".modal-footer").css(opts.footerCss);
		if(opts.isFooter){
			dialog.find(".modal-footer .btn-yes").click(function(e){
				opts.yesCallback(e);
				dialog.modal('hide');
			});
			dialog.find(".modal-footer .btn-no").click(function(e){
				opts.noCallback(e);
				dialog.modal('hide');
			});
		};
		//console.log(dialog_height);
		if(opts.show){
			dialog.modal('show');
		};
		dialog.find("button.close").on("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			console.log(111);
			dialog.modal('hide');
		});
		dialog.find("button.close").on("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			console.log(111);
			dialog.modal('hide');
		});
		var dataTarget = $(this).attr("data-target");
		//console.log(dataTarget);
		if(!dataTarget==opts.className){
			$($this).attr({"data-target": "."+opts.className,"data-toggle":"modal"});
		}
		}
	});
};