//---------------------------------
//Site:  Kingnet - API-module
//Author: Clearlove 7*
//Updated: 2016.4.7
//Version: 1.0
//---------------------------------
define(['ajax','tools','baseSet'],function(a,t,b){
	return{
		login:function(postData,suc,con){
			a.Post({
				url:b.postServer+'manager/login/access',
				data:postData,
				success:function(data){
					suc(data);
				},
				complete:function(data){
					con(data);
				}
			});
		}
	};
});
