
define(['angular','text!tpl/app-config.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,appApi,dataFormat){
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.customerName = '';
		$scope.appFormModel = {
			app_id: undefined,
            app_name: '',
            customer_id: '',
            customer_name:'请选择',
            callback_url_base: '',
            system_id: '',
            system_name: '请选择',
            app_describe:''
		};
		$scope.dt = $('.app-table').dataTable({
            buttons:{
            	buttons:[ {
            		extend: 'copyHtml5',
            		className:'btn-success btn-sm'
            	},{
					extend: 'excelHtml5',
					title: '广告商列表',
					className:'btn-success btn-sm',
				},{
					extend: 'csvHtml5',
            		className:'btn-success btn-sm'
				}]
            },
	        columns: [
	            { data: 'app_id',width:'5%'},
	            { data: 'app_name',width:'10%'},
	            { data: 'customer_name',width:'5%'},
	            { data: 'callback_url_base',width:'15%'},
	            { data: 'system_name',width:'5%'},
	            { data: 'app_describe',width:'15%'},
	            { data: 'last_edit_date',width:'15%'},
	            { data: 'last_edit_user_name',width:'10%'},
	            {data: null,width:'15%'}
	        ],
	        columnDefs: [{
	        	targets: 6,
	        	render: function (data, type, row, meta) {
	        		return dataFormat(data);
	        	}
	        },{
	            targets: 8,
	            visible: true,
	            render: function (data, type, row, meta) {
	            	return '<button class="btn btn-primary btn-edit">编辑</button><button class="btn btn-danger btn-del">删除</button>';
                }
	        }]
	    });
	    appApi.allAdvers(function(data){
			console.log(data);
			$scope.allAdver = data;
		});
		appApi.systemList(function(data){
			console.log(data);
			$scope.allSystem = data;
		});
	    $scope.customerClick = function(e,id,name){
			if(id===$scope.appFormModel.customer_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.appFormModel.customer_id = id;
			$scope.appFormModel.customer_name = name;
		};
		$scope.systemClick = function(e,id,name){
			if(id==$scope.appFormModel.system_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.appFormModel.system_id = id;
			$scope.appFormModel.system_name = name;
		};
	    function appList(){
	    	appApi.appList(function(data){
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
	    };
	    appList();
		$scope.addApp = function(e){
			$scope.title = '新增';
			$('.app-modal').modal('show');
		};
		$('.app-table').on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			for (var name in $scope.appFormModel) {
				$scope.appFormModel[name] = data[name];
			};
			console.log($scope.appFormModel);
			$scope.title = '编辑';
			$scope.$digest();
			$('.app-modal').find("[name='appid']").attr('disabled',true);
			$('.app-modal').modal('show');
		});
		$('.app-table').on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.customer_name+'</label>应用?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.appDel(data.app_id,function(data){
					appList();
				});
			}).catch(swal.noop);
		});
		function postApp(){
			var aurl = '';
			if($scope.title=='编辑'){
				aurl = 'update';
			}else{
				aurl = 'new';
			};
			console.log($scope.appFormModel);
			appApi.appPost($scope.appFormModel,aurl,function(data){
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				appList();
				setTimeout(function(){
					$('.app-modal').modal('hide');
				},1000)
			});
		};
		$scope.submitForm = function(e){
			if($scope.success){
				$('.app-modal').modal('hide');
				return false;
			};
			$scope.addAppForm.$submitted = true;
			if(!$scope.addAppForm.$valid&&($scope.appFormModel.customer_id===''||$scope.appFormModel.system_id==='')){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			postApp();
		};
		$('.app-modal').on('hidden.bs.modal',function(){
			$('.app-modal').find("[name='appid']").attr('disabled',false);
			$scope.success = false;
			$scope.appFormModel = {
				app_id: undefined,
	            app_name: '',
	            customer_id: '',
	            customer_name:'请选择',
	            callback_url_base: '',
	            system_id: '',
	            system_name: '请选择',
	            app_describe:''
			};
			$('.submit-success').css('visibility','hidden');
			$scope.addAppForm.$submitted = false;
			$scope.addAppForm.appid.$touched = false;
			$scope.addAppForm.name.$touched = false;
			$scope.addAppForm.callback.$touched = false;
		});
	};
	return {controller: controller, tpl: tpl};
});