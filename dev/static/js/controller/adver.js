
define(['angular','text!tpl/adver.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,$rootScope,$compile,$timeout,appApi,dataFormat){
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.customerName = '';
		$scope.addAdverModel = {
			customer_name:'',
			customer_describe:''
		};
		$scope.dt = $('.advers-table').dataTable({
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
	            { data: 'customer_name',width:'30%'},
	            { data: 'customer_describe',width:'30%'},
	            { data: 'last_edit_date',width:'10%'},
	            { data: 'last_edit_user_name',width:'10%'},
	            {data: null,width:'20%'}
	        ],
	        columnDefs: [{
	        	targets: 2,
	        	render: function (data, type, row, meta) {
	        		return dataFormat(data);
	        	}
	        },{
	        	targets: 3,
	        	render: function (data, type, row, meta) {
	        		return dataFormat(data);
	        	}
	        },{
	            targets: 4,
	            visible: true,
	            render: function (data, type, row, meta) {
	            	return '<button class="btn btn-primary btn-edit">编辑</button><button class="btn btn-danger btn-del">删除</button>';
                }
	        }]
	    });
	    function allAdvers(){
	    	appApi.allAdvers(function(data){
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
	    };
	    allAdvers();
		$scope.addAdver = function(e){
			$scope.title = '新增';
			$('.advers-modal').modal('show');
		};
		$('.advers-table').on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.customerId = data.customer_id;
			$scope.addAdverModel.customer_name = data.customer_name;
			$scope.addAdverModel.customer_describe = data.customer_describe;
			$scope.title = '编辑';
			$scope.$digest();
			$('.advers-modal').modal('show');
		});
		$('.advers-table').on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.customer_name+'</label>广告商?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.adversDel(data.customer_id,function(data){
					allAdvers();
				});
			}).catch(swal.noop);
		});
		function postAdvers(){
			var aurl = '';
			if($scope.customerId){
				aurl = 'update';
				$scope.addAdverModel.customer_id = $scope.customerId;
			}else{
				aurl = 'new';
				delete $scope.addAdverModel.customer_id;
			};
			appApi.adversPost($scope.addAdverModel,aurl,function(data){
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				allAdvers();
				setTimeout(function(){
					$('.advers-modal').modal('hide');
				},1500)
			});
		};
		$scope.submitForm = function(e){
			if($scope.success){
				$('.advers-modal').modal('hide');
				return false;
			};
			$scope.adversForm.$submitted = true;
			if(!$scope.adversForm.$valid){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			postAdvers();
		};
		$('.advers-modal').on('shown.bs.modal',function(){
			console.log($scope.customerName);
		});
		$('.advers-modal').on('hidden.bs.modal',function(){
			$scope.success = false;
			$scope.customerId = undefined;
			$scope.addAdverModel = {
				customer_name:'',
				customer_describe:''
			};
			$('.submit-success').css('visibility','hidden');
			$scope.adversForm.$submitted = false;
			$scope.adversForm.adversName.$touched = false;
		});
	};
	return {controller: controller, tpl: tpl};
});