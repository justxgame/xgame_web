define(["jquery"],function($){
	return {
		initHeight:function(){
			$(".view-container").find(".page-container").each(function(i){
				if($(this).hasClass("visible")){
					$(".view-container").height($(this).outerHeight());
				}
			});
		},
		nextPageShow:function(){
			var nowPage = $(".pageInt");
			var nextPage = nowPage.next(".pageNew");
			if(nextPage.length>0){
				nowPage.removeClass("visible pageInt slideSlow slideFast").addClass("slideSlow pageOld");
				nextPage.removeClass("pageNew slideSlow slideFast pageOld").addClass("visible pageInt slideFast");
				this.initHeight();
			}
		},
		prevPageShow:function(){
			var nowPage = $(".pageInt");
			var prevPage = nowPage.prev(".pageOld");
			if(prevPage.length>0){
				nowPage.removeClass("visible pageInt slideSlow slideFast").addClass("slideSlow pageNew");
				prevPage.removeClass("pageOld slideSlow slideFast").addClass("visible pageInt slideFast");
				this.initHeight();
			}
		}
	}
});