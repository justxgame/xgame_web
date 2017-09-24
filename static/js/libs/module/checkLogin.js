//---------------------------------
//Site:  chebnb - module-getCode
//Author: Clearlove 7*
//Updated: 2015.12.1 
//Version: 1.0 
//---------------------------------
define(['baseSet','tools','js.cookie'], function(baseSet,tools,Cookies){
	var userInfo =Cookies.getJSON('danaUser')?Cookies.getJSON('danaUser'):{};
	console.log(userInfo);
	return {
		check:function(){
			var token=null;
			if(userInfo!=null&&userInfo!=undefined&&userInfo!=''){
				token =  userInfo;
			}else{
				var postData = {
					username:'',
					password:'',
					token:''
				};
				if(userInfo.oosUserName!=undefined&&userInfo.oosUserName!=''&&userInfo.oosUserName!=null){
					postData.token=userInfo.oosUserName;
				};
				api.login(postData,function(data){
					Cookies.set('danaUser', data.data, { expires: 30 });
					console.log(Cookies.getJSON('danaUser'));
					window.location.href='index.html#/event';
				},function(data){
					
				});
				//window.location.href='oa://openLoginWindow';
			};
			return token;
		},
		logout:function(e){
			Cookies.remove('danaUser');
			window.location.href='login.html';
		},
		checkLogin:function(){
			console.log(userInfo);
			var postData = {
				username:'',
				password:'',
				token:''
			};
			if(userInfo.oosUserName!=undefined&&userInfo.oosUserName!=''&&userInfo.oosUserName!=null){
				postData.token=userInfo.oosUserName;
			};
			api.login(postData,function(data){
				Cookies.set('appLoginfo', data.data);
				console.log(Cookies.getJSON('appLoginfo'));
				window.location.href='index.html#/event';
			},function(data){
				
			});
		},
	}
});




