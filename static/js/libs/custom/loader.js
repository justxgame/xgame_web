/*--------------------------------------------------------------------
 *JAVASCRIPT "loader.js"
 *Version:    1.0.0 - 2015
 *author:     7*
-----------------------------------------------------------------------*/
define(['jquery'],function(a){
	a.fn.loader = function(options) {
		$.fn.loader.defaults = {
			isBG: true,
			isTag: true,
			tagCon: "正在提交数据，请勿关闭浏览器，否则可能提交失败!",
			color: "#f16568",
			center: true,
			pos:"fixed"
		};
		var opts = $.extend({}, $.fn.loader.defaults, options),
			$this = $(this);
		var posStyle = opts.pos=="fixed"?"fixed":"absolute";
		var shadow_html = opts.isBG ? '<div class="bg-shadow" style="position:'+posStyle+'"></div>' : '';
		var tag_html = opts.isTag ? '<div class="page-tag" style="position:'+posStyle+'">' + opts.tagCon + '</div>' : '';
		var loading_html = shadow_html + '<div class="loading" style="position:'+posStyle+'"><div></div><div></div><div></div></div>' + tag_html;
		//var loading_html = shadow_html+'<div class="loading-gif"><i class="icon">&#xe606;</i></div>';
		$this.find(".bg-shadow").remove();
		$this.find(".page-tag").remove();
		$this.find(".loading-gif").remove();
		$this.find(".loading").remove();
		$this.append(loading_html);
		if (opts.center) {
			$(".page-tag").css({"margin-left": -($(".page-tag").width() / 2) + "px","left":"50%"});
		}
		$(".bg-shadow").addClass("in");
		a.extend(a.fn.loader, {
			remove: function() {
				$this.find(".loading").remove();
				$this.find(".loading-gif").remove();
				if (opts.isBG) {
					$this.find(".bg-shadow").remove();
				};
				if (opts.isTag) {
					$this.find(".page-tag").remove();
				}
			}
		});

	};
});