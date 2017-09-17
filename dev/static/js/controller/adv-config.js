
define(['angular','text!tpl/adv-config.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,appApi,dataFormat){
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.customerName = '';
		$scope.advMockId = '';
		$scope.advFormModel = {
			adv_id:'',
			app_id: '',
            app_name: '请选择',
            channel_id:'',
            channel_name:'请选择',
            adv_describe:''
		};
		$scope.advMockFormModel = {
			idfa:'',
			ip:''
		};
		$scope.dt = $('.adv-table').dataTable({
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
	            { data: 'customer_name',width:'10%'},
	            { data: 'channel_name',width:'10%'},
	            { data: 'adv_describe',width:'10%'},
	            { data: 'callback',width:'30%'},
	            { data: 'last_edit_date',width:'10%'},
	            { data: 'last_edit_user_name',width:'5%'},
	            {data: null,width:'10%'}
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
	            	return '<button class="btn btn-primary btn-edit">编辑</button><button class="btn btn-success btn-mock">模拟</button><button class="btn btn-danger btn-del">删除</button>';
                }
	        }]
	    });
	    appApi.appList(function(data){
			console.log(data);
			$scope.appList = data;
		});
	    appApi.allAdvers(function(data){
			console.log(data);
			$scope.allAdver = data;
		});
		appApi.channelList(function(data){
			console.log(data);
			$scope.channelList = data;
		});
		$scope.appClick = function(e,id,name){
			if(id===$scope.advFormModel.app_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.advFormModel.app_id = id;
			$scope.advFormModel.app_name = name;
		};
		$scope.channelClick = function(e,id,name){
			if(id===$scope.advFormModel.channel_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.advFormModel.channel_id = id;
			$scope.advFormModel.channel_name = name;
			console.log($scope.advFormModel);
		};
	    function advList(){
	    	appApi.advList(function(data){
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
	    };
	    advList();
		$scope.addAdv = function(e){
			$scope.title = '新增';
			$('.adv-modal').modal('show');
		};
		$('.adv-table').on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			for (var name in $scope.advFormModel) {
				$scope.advFormModel[name] = data[name];
			};
			console.log($scope.advFormModel);
			$scope.title = '编辑';
			$scope.$digest();
			$('.adv-modal').modal('show');
		});
		$('.adv-table').on('click','.btn-mock',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.advMockId = data.adv_id;
			$('.adv-mock-modal').modal('show');
		});
		$('.adv-table').on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.customer_name+'</label>广告?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.advDel(data.adv_id,function(data){
					advList();
				});
			}).catch(swal.noop);
		});
		function postAdv(){
			var aurl = '';
			if($scope.title=='编辑'){
				aurl = 'update';
			}else{
				aurl = 'new';
			};
			appApi.advPost($scope.advFormModel,aurl,function(data){
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				advList();
				setTimeout(function(){
					$('.adv-modal').modal('hide');
				},1000)
			});
		};
		$scope.submitForm = function(e){
			if($scope.success){
				$('.adv-modal').modal('hide');
				return false;
			};
			$scope.addAdvForm.$submitted = true;
			if($scope.advFormModel.app_id==''||$scope.advFormModel.channel_id===''){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			postAdv();
		};
		$scope.advMock = function(){
			$scope.advMockForm.$submitted = true;
			if($scope.advMockForm.$invalid){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			appApi.advMock($scope.advMockId,$scope.advMockFormModel,function(data){
				console.log(data);
				$scope.advMockData = data;
			});
		};
		$('.adv-modal').on('hidden.bs.modal',function(){
			$scope.success = false;
			$scope.advFormModel = {
				adv_id:'',
				app_id: '',
	            app_name: '请选择',
	            channel_id:'',
	            channel_name:'请选择',
	            adv_describe:''
			};
			$('.submit-success').css('visibility','hidden');
			$scope.addAdvForm.$submitted = false;
		});
	};
	return {controller: controller, tpl: tpl};
});