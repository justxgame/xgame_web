define(["tools","checkLogin","baseSet","local"],function(t,c,b,l){
	return{
		Post:function(obj){
			//console.log("starPost");
			/*
			方法属性
			obj.url 访问地址
			obj.data 访问数据
			obj.success 成功后地址
			obj.error 错误后地址
			obj.beforeSend 访问前
			obj.complete 访问结束
			*/
			var postModel = {
				url:"",
				type: "POST",
				data:{},
				dataType: "json",
				contentType: "application/json",
				success:function(e){
					//……成功方法
//					console.log("success"+e);
				},
				complete:function(e){
					//console.log(e)
					//……完成方法
//					console.log("complete"+e);
				},
				error:function(e){
					//……错误方法
//					console.log("error"+e);
				},
				beforeSend:function(e){
//					console.log("error"+e);
				}
			};
			postModel = t.extend(postModel,obj);
			postModel.data = JSON.stringify(postModel.data);
			//console.log(postModel);
			//执行ajax
			$.ajax(postModel);
		},
		ajaxPost:function(obj) { 
			//console.log("starPost");
			/*
			方法属性
			obj.url 访问地址
			obj.data 访问数据
			obj.success 成功后地址
			obj.error 错误后地址
			obj.beforeSend 访问前
			obj.complete 访问结束
			*/
			var postModel = {
				url:"",
				type: "POST",
				data:{},
				dataType: "json",
				contentType: "application/json",
				headers:{
					"mobilehead":"{\"loginKey\":\""+c.check().loginKey+"\",\"chauffeurId\":"+c.check().chauffeurId+"}"
				},
				success:function(e){
					//……成功方法
//					console.log("success"+e);
					suc(e);
var result=e.errorCode=="10212"||e.errorCode=="10213"||e.errorCode=="10214"||e.errorCode=="10215"||e.errorCode=="10216"||e.errorCode=="10217"?true:false;
					if(result){
						l.remove("driver");
						window.location.href=b.driverPageHost+"/sign-in.html";
					}
				},
				complete:function(e){
					//console.log(e)
					//……完成方法
//					console.log("complete"+e);
					
				},
				error:function(e){
					alert("网络貌似有点问题,请稍后再试");
					//……错误方法
//					console.log("error"+e);
				},
				beforeSend:function(e){
//					console.log("error"+e);
				}
			};
			postModel = t.extend(postModel,obj);
			postModel.data = JSON.stringify(postModel.data);
			//console.log(postModel);
			//执行ajax
			$.ajax(postModel);
		},
		jsonp:function(obj) { 
			//console.log("starPost");
			/*
			方法属性
			obj.url 访问地址
			obj.data 访问数据
			obj.success 成功后地址
			obj.error 错误后地址
			obj.beforeSend 访问前
			obj.complete 访问结束
			*/
			var postModel = {
				url:"",
				type: "GET",
				data:{},
				dataType : "jsonp",
				jsonp : 'callback',
				async : true,
				success:function(e){
					//……成功方法
//					console.log("success"+e);
				},
				complete:function(e){
					//……完成方法
//					console.log("complete"+e);
				},
				error:function(e){
					//……错误方法
//					console.log("error"+e);
				},
				beforeSend:function(e){
//					console.log("error"+e);
				}
			};
			postModel = t.extend(postModel,obj);
//			postModel.data = JSON.stringify(postModel.data);
			//console.log(postModel);
			//执行ajax
			$.ajax(postModel);
		}
	};
});