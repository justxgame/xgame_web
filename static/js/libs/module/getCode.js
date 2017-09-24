//---------------------------------
//Site:  chebnb - module-getCode
//Author: Clearlove 7*
//Updated: 2015.11.24 
//Version: 1.0 
//---------------------------------
define(["baseSet","ajax","tools","session","loader","jquery"], function(baseSet,ajax,tools,session){
	var sessionTime = session.get("time")!=undefined&&session.get("time")!=null&&session.get("time")!=""?session.get("time"):0;
	function countDown(ele){
		var time = sessionTime==0?59:sessionTime;
		var CD = setInterval(function(){
			if(time>0){
				ele.text(time).removeClass("can");
				time--;
				session.add("time",time);
			}else{
				ele.text("获取验证码").addClass("can");
				clearInterval(CD);
				session.remove("time");
			};
		},1000)
	};
	return{
		get:function(ele,mbl,type){
			if(sessionTime!=0){
				countDown(ele);
			};
			ele.on("tap",function(){
				if(ele.hasClass("can")){
					var mobile = mbl.val();
					console.log(mobile);
					tools.mobileCheck(mobile,function(){
						var postData={
							mobile:mobile,
							type:type
						};
						$("body").loader({
							isTag:false
						});
						console.log(postData);
						ajax.Post({
							url:baseSet.postServer+"/checkcode/get/0",
							data:postData,
							success:function(data){
								console.log(data);
								setTimeout(function(){
									$("body").loader.remove();	
									if(data.errorCode==0){
				ele.removeClass("can");
				countDown(ele);
									}else{
										alert(data.errorMessage);
									};
								},500);
							}
						});
					});
				}
			});
		}
	}
});