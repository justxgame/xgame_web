define(['tools','checkLogin','baseSet','local','loader','sweetalert','jquery'],function(t,c,b,l,swal){
	return{
		Post:function(obj){
			//console.log('starPost');
			/*
			方法属性
			obj.url 访问地址
			obj.data 访问数据
			obj.success 成功后地址
			obj.error 错误后地址
			obj.beforeSend 访问前
			obj.complete 访问结束
			*/
			var suc = obj.success;
			delete obj.success;
			var loading = obj.loading;
			delete obj.loading;
			var postModel = {
				url:'',
				type: 'POST',
				data:{},
				dataType: 'json',
				contentType: 'application/json',
				success:function(e){
					//……成功方法
//					console.log('success'+e);
					var result=e.code=='0'?true:false;
					if(result){
						suc(e);
					}else if(e.code==-1){
						
					}else{
//						$('body').dialog({
//			            	className:'error-dialog',
//			            	header:'错误信息',
//			            	body:e.message,
//			            	type:'error',
//			            });
					}
				},
				complete:function(e){
					//console.log(e)
					//……完成方法
//					console.log('complete'+e);
					if(loading!=null&&loading!=undefined&&loading!=''&loading.remove){
						loading.body.loader.remove();
					};
				},
				error:function(e){
					//……错误方法
//					console.log('error'+e);
				},
				beforeSend:function(e){
//					console.log('error'+e);
				}
			};
			postModel = t.extend(postModel,obj);
			postModel.data = JSON.stringify(postModel.data);
			//console.log(postModel);
			//执行ajax
			$.ajax(postModel);
		},
		ajaxPost:function(obj) { 
			//console.log('starPost');
			/*
			方法属性
			obj.url 访问地址
			obj.data 访问数据
			obj.success 成功后地址
			obj.error 错误后地址
			obj.beforeSend 访问前
			obj.complete 访问结束
			*/
			var suc = obj.success;
			delete obj.success;
			var postModel = {
				url:'',
				type: 'POST',
				data:{},
				dataType: 'json',
				contentType: 'application/json',
				headers:{
					'token':c.check()
				},
				success:function(e){
					//……成功方法
//					console.log('success'+e);
					var result=e.code=='0'?true:false;
					if(result){
						suc(e);
					}else{
						if(e.code==-1||e.code==-99){
							swal({
								title: '登录信息异常',
								confirmButtonText:'确定',
								onClose:function(){
									window.location.href='login.html';
								}
							});
						}else{
							swal({
								title: '错误信息',
								text:e.message,
								type:'error',
								confirmButtonText:'确定'
							});
						}
					}
				},
				complete:function(e){
					//console.log(e)
					//……完成方法
//					console.log('complete'+e);
				},
				error:function(e){
					//……错误方法
//					console.log('error'+e);
					swal({
						title: '错误信息',
						text:JSON.stringify(e),
						type:'error',
						confirmButtonText:'确定'
					});
				},
				beforeSend:function(e){
//					console.log('error'+e);
				}
			};
			postModel = t.extend(postModel,obj);
			postModel.data = JSON.stringify(postModel.data);
			//console.log(postModel);
			//执行ajax
			$.ajax(postModel);
		},
		ajaxGet:function(obj) { 
			var suc = obj.success;
			delete obj.success;
			var getModel = {
				url:'',
				type: 'GET',
				contentType: 'application/json',
				headers:{
					'token':c.check()
				},
				success:function(e){
					//……成功方法
					//console.log(e);
					var result=e.code=='0'?true:false;
					if(result){
						suc(e);
					}else{
						if(e.code==-1||e.code==-99){
							swal({
								title: '登录信息异常',
								confirmButtonText:'确定',
								onClose:function(){
									window.location.href='login.html';
								}
							});
						}else{
							swal({
								title: '错误信息',
								text:e.message,
								type:'error',
								confirmButtonText:'确定'
							});
						}
					}
				},
				complete:function(e){
					//console.log(e)
					//……完成方法
//					console.log('complete'+e);
				},
				error:function(e){
					//……错误方法
//					console.log('error'+e);
					swal({
						title: '错误信息',
						text:JSON.stringify(e),
						type:'error',
						confirmButtonText:'确定'
					});
				},
				beforeSend:function(e){
//					console.log('error'+e);
				}
			};
			getModel = t.extend(getModel,obj);
			//console.log(postModel);
			//执行ajax
			$.ajax(getModel);
		}
	};
});