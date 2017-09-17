
define(['angular','text!tpl/nexus.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,$rootScope,$compile,$timeout,appApi){
		NProgress.done();
		$scope.filterBarModel = {
			channel_name:'全部',
			app_name:'全部'
		};
		$scope.mapPostData = {
			channel_id:'',
			app_id:''
		};
		$scope.dt = $('.config-mapping').dataTable({
            buttons:{
            	buttons:[ {
            		extend: 'copyHtml5',
            		className:'btn-success btn-sm'
            	},{
					extend: 'excelHtml5',
					title: '流量对应关系表',
					className:'btn-success btn-sm',
				},{
					extend: 'csvHtml5',
            		className:'btn-success btn-sm'
				}]
            },
	        columns: [
	            { data: 'channel_name',width:'35%'},
	            { data: 'app_name',width:'35%'},
	            { data: 'count',width:'10%'},
	            {data: null,width:'20%'}
	        ],
	        columnDefs: [{
	            targets: 3,
	            visible: true,
	            render: function (data, type, row, meta) {
	            	var tpl = '<button class="btn btn-primary btn-add">添加复用关系</button>';
	            	var del = '<button class="btn btn-danger btn-del">删除</button>';
	            	if(data.count>0){
	            		return tpl+del;
	            	}else{
	            		return tpl;
	            	};
                    
                }
	        }]
	    });
	    function copyTDInit(){
		    $scope.copyTD = $('.copy-config-mapping').dataTable({
		    	destroy: true,
		    	responsive: true,
		    	buttons:{
	            	buttons:[ {
	            		extend: 'copyHtml5',
	            		className:'btn-success btn-sm'
	            	},{
						extend: 'excelHtml5',
						title: '流量复用关系表',
						className:'btn-success btn-sm',
					},{
						extend: 'csvHtml5',
	            		className:'btn-success btn-sm'
					}]
	            },
		        columnDefs: [ {
		        	width:'35%',
				    targets: 0,
				    data: function ( row, type, val, meta ) {
				    	return row.channel_name + '：' +row.copy_app_name;
				    }
			    },
			    {
			    	width:'35%',
				    targets: 1,
				    data: function ( row, type, val, meta ) {
				    	return row.apply_app_name;
				    }
			    },
			    {
			    	width:'10%',
				    targets: 2,
				    data: function ( row, type, val, meta ) {
				    	return row.amount;
				    },
				    render: function (data, type, row, meta) {
	                    return '<input class="amount form-control" type="number" placeholder="请输入" value="'+data+'" max="100" min="0" /><i class="hide">'+data+'</i>';
	                }
			    },{
			    	width:'20%',
				    targets: 3,
				    render: function (data, type, row, meta) {
	                    return '<button class="btn btn-primary btn-save btn-sm">保存</button><button class="btn btn-danger btn-del btn-sm">删除</button>';
	                }
			    }]
		    });
	    };
		appApi.allChannel(function(data){
			console.log(data);
			$scope.allChannel = data;
		});
		appApi.allApp(function(data){
			console.log(data);
			$scope.allApp = data;
		});
		$scope.channelClick = function(e,id,name){
			if(id===$scope.mapPostData.channel_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.mapPostData.channel_id = id;
			$scope.filterBarModel.channel_name = name;
		};
		$scope.appClick = function(e,id,name){
			if(id===$scope.mapPostData.app_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.mapPostData.app_id = id;
			$scope.filterBarModel.app_name = name;
		};
		function configMapping(){
			console.log($scope.configMappingPostData);
			appApi.configMapping($scope.configMappingPostData,function(data){
				console.log(data);
//				$scope.configMapping = data;
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
//				$('.config-mapping').DataTable({data: data});
			},function(){
				$('.btn-query').removeClass('load');
			});
		};
		configMapping();
		$scope.configQuery = function(e){
//			console.log($scope.dt);
			$('.btn-query').addClass('load');
			$scope.configMappingPostData = $.extend(true, {}, $scope.mapPostData);
			configMapping();
		};
//删除对应关系
		$('.config-mapping').on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			console.log(data);
			swal({
				html: '确认删除<label class="red">'+data.channel_name+'：'+data.app_name+'</label>对应关系?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.mappingDel({
					channel_id: data.channel_id,
            		copy_app_id:data.app_id
				},function(data){
					configMapping();
				});
			}).catch(swal.noop);
		});
//添加复用关系
		function getNoAdxConfig(){
			appApi.getNoAdxConfig({
				channel_id:$scope.addCopyPostData.channel_id,
				app_id:$scope.addCopyPostData.copy_app_id
			},function(data){
				console.log(data);
				if(data.length==0){
					$scope.copyAppName = '无可用应用';
				};
				$scope.copyAppList = data;
			});
		};
		$('.config-mapping').on('click','.btn-add',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			console.log(data);
			$scope.copyConfigDesc = data.channel_name +'：'+ data.app_name;
			$('.copy-modal').modal('show');
			$scope.addCopyPostData.channel_id = data.channel_id;
			$scope.addCopyPostData.copy_app_id = data.app_id;
			getNoAdxConfig();
		});
		function loadCopyConfig(){
			appApi.copyConfigMapping({
				channel_id:$scope.addCopyPostData.channel_id,
				copy_app_id:$scope.addCopyPostData.copy_app_id
			},function(data){
				console.log(data);
				$scope.copyTD.fnClearTable();
				if(data.length==0) return;
				$scope.copyTD.fnAddData(data);
			});
		};
		$('.copy-modal').on('shown.bs.modal',function(){
			if($scope.copyTD==undefined){
				copyTDInit();
			};
			loadCopyConfig();
		});
		
		
//添加复用关系--------------------------
		$scope.copyAppName = '请选择';
		$scope.addCopyPostData = {
			channel_id:'',
			copy_app_id:'',
			apply_app_id:'',
			amount:null
		};
		$scope.copeAppClick = function(e,id,name){
			if(id===$scope.addCopyPostData.apply_app_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.addCopyPostData.apply_app_id = id;
			$scope.copyAppName = name;
		};
		$scope.addCopy = function(){
			if($scope.addCopyPostData.apply_app_id == ''){
				$scope.copyConfigErr = true;
				$scope.copyConfigErrMsg = '请选择应用';
				return false;
			};
			if($scope.addCopyPostData.amount === null){
				$scope.copyConfigErr = true;
				$scope.copyConfigErrMsg = '请填写扣量比';
				return false;
			};
			if($scope.addCopyPostData.amount === undefined){
				$scope.copyConfigErr = true;
				$scope.copyConfigErrMsg = '0<=扣量比<=100';
				return false;
			};
//			console.log($scope.addCopyPostData);
			appApi.adxNew($scope.addCopyPostData,function(data){
				console.log(data);
				$scope.copyAppName = '请选择';
				getNoAdxConfig();
				loadCopyConfig();
				configMapping();
				$scope.addCopyPostData.amount = null;
				$scope.addCopyPostData.apply_app_id = null;
			});
		};
		$('.copy-config-mapping').on('input','.amount',function(){
			if($(this).val()>=0&&$(this).val()<=100){
				$(this).parent('td').removeClass('has-error');
			}else{
				$(this).parent('td').addClass('has-error');
			}
		});
		//更新复用关系
		$('.copy-config-mapping').on('click','.btn-save',function(e){
			var data = $scope.copyTD.api(true)
			.row($(this).parents('tr')).data();
			var $amount = $(this).closest('tr').find('.amount');
			if($amount.val()==''||$amount.val()==null||$amount.val()==undefined || $amount.val()>100 ||$amount.val()<0){
				$amount.parent('td').addClass('has-error');
				return false;
			};
			console.log($amount.val());
			appApi.adxUpdate({
				adx_id: data.adx_id,
	            channel_id: data.channel_id,
	            copy_app_id: data.copy_app_id,
	            apply_app_id: data.apply_app_id,
	            amount: $amount.val()
			},function(data){
				getNoAdxConfig();
				loadCopyConfig();
			});
		});
		//删除复用关系
		$('.copy-config-mapping').on('click','.btn-del',function(e){
			var data = $scope.copyTD.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.channel_name+'：'+data.copy_app_name+'</label>复用关系?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.adxDel(data.adx_id,function(data){
					console.log($scope.addCopyPostData);
					getNoAdxConfig();
					loadCopyConfig();
					configMapping();
				});
			}).catch(swal.noop);
		});
	};
	return {controller: controller, tpl: tpl};
});