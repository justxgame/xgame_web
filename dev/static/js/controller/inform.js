define(['angular', 'text!tpl/inform.html', 'require', 'nprogress','sweetalert','moment'], function(angular, tpl, require, NProgress,swal,moment) {
	function controller($scope, appApi, getMillisecond) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$modal = $('.inform-modal');
		$scope.$table = $('.inform-data');
		$scope.QueryParam = {}
		$scope.formModel = {};
		appApi.getServerBox(data=>{
			console.log(data);
			$scope.serverBox = data;
			$scope.filterBarModel.serverId = data[0].serverId;
			$scope.filterBarModel.serverName = data[0].serverName;
			$scope.formModel.serverId = data[0].serverId;
			$scope.formModel.serverName = data[0].serverName;
//			Query();
		});
		$scope.dt = $scope.$table.dataTable({
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '广播信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'message',
					width: '45%'
				},
				{
					data: 'serverId',
					width: '10%'
				},
				{
					data: 'sendDate',
					width: '20%'
				},
				{
					data: 'sendUserName',
					width: '10%'
				}
//				,
//				{
//					data: null,
//					width: '15%'
//				}
			],
			columnDefs: [{
				targets: 2,
				visible: true,
				render: function(data, type, row, meta) {
					return moment(data).format('YYYY-MM-DD hh:mm:ss');
				}
			}
//			,{
//				targets: 4,
//				visible: true,
//				render: function(data, type, row, meta) {
//					return '<button class="btn btn-danger btn-del">删除</button>';
//				}
//			}
			]
		});
		$scope.$table.on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除这条广播?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				$scope.formModel = $.extend(true, {}, data);
				$scope.formModel.actionId = 2;
				appApi.deleteInform(data,data=>{
					console.log(data);
					Query();
				});
			}).catch(swal.noop);
		});
		function Query(){
			appApi.getInform(data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		Query();
		$scope.serverClick = (e,n,i)=>{
			if(i==$scope.formModel.serverId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.formModel.serverId = i;
			$scope.formModel.serverName = n;
		};
		$scope.Send = ()=>{
			$scope.$modal.modal('show');
		};
		$scope.submitForm = function(e){
			if($scope.success){
				$scope.$modal.modal('hide');
				return false;
			};
			$scope.modalForm.$submitted = true;
			console.log($scope.modalForm.$valid);
			if(!$scope.modalForm.$valid||!$scope.formModel.serverId){
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
			appApi.sendInform($scope.formModel,data=>{
				console.log(data);
			});
		};
		
	};
	return {
		controller: controller,
		tpl: tpl
	};
});