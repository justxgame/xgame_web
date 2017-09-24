//---------------------------------
//Site:  chebnb - module-getCode
//Author: Clearlove 7*
//Updated: 2015.12.1 
//Version: 1.0 
//---------------------------------
define(["baseSet","session","tools","touch","jquery"], function(baseSet,session,tools){
	function goBack(){
		var pageInfo = session.get("pageInfo");
		//console.log(pageInfo);
		var backPage = pageInfo.slice(1,2);
		console.log(backPage);
		pageInfo.shift();
		session.add("pageInfo",pageInfo);
		if(backPage==""||backPage==undefined||backPage==null){
			window.location.href=baseSet.pageHost+"/index.html";
		}else{
			window.location.href=backPage;
		}
	};
	return{
		topBack:function(type){
			$(document).on("tap","header.nav .back",function(){
				if(type){
					goBack();
				};
			});
		},
		back:function(){
			goBack();
		},
		loginJump:function(){
			var pageInfo = session.get("pageInfo");
			//console.log(pageInfo);
			var backPage = pageInfo.slice(2,3);
			pageInfo.shift();
			session.add("pageInfo",pageInfo);
			if(backPage==""||backPage==undefined||backPage==null){
				window.location.href=baseSet.pageHost+"/index.html";
			}else{
				window.location.href=backPage;
			}
		}
	}
});