define(['angular', 'text!tpl/notification-realtime.html', 'require', 'nprogress','sweetalert','moment'], function(angular, tpl, require, NProgress,swal,moment) {
	function controller($scope, appApi, getMillisecond) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$modal = $('.notification-modal');
		$scope.$table = $('.notification-data');
		$scope.QueryParam = {}
		$scope.formModel = {};
		$scope.dt = $scope.$table.dataTable({
			order: [],
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '即时推送信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'message',
					width: '55%'
				},
				{
					data: 'sendDate',
					width: '20%'
				},
				{
					data: 'sendUserName',
					width: '10%'
				},
				{
					data: null,
					width: '15%'
				}
			],
			columnDefs: [{
				targets: 1,
				visible: true,
				render: function(data, type, row, meta) {
					return moment(data).format('YYYY-MM-DD HH:mm:ss');
				}
			},{
				targets: 3,
				visible: true,
				render: function(data, type, row, meta) {
					return '<button class="btn btn-danger btn-del">删除</button>';
				}
			}]
		});
		$scope.$table.on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除这条推送?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				$scope.formModel = $.extend(true, {}, data);
				$scope.formModel.actionId = 2;
				appApi.deleteNotice(data,data=>{
					console.log(data);
					Query();
				});
			}).catch(swal.noop);
		});
		function Query(){
			appApi.getNotice(data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		Query();
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
			if(!$scope.modalForm.$valid){
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
			$scope.formModel.type = 2;
			appApi.sendNotice($scope.formModel,data=>{
				console.log(data);
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				Query();
				setTimeout(()=>{
					$scope.$modal.modal('hide');
				},1000);
			});
		};
		$scope.$modal.on('hidden.bs.modal',()=>{
			$scope.success = false;
			$scope.formModel = {};
			$('.submit-success').css('visibility','hidden');
			$scope.modalForm.$submitted = false;
			$scope.modalForm.message.$touched = false;
		});
	};
	return {controller: controller, tpl: tpl};
});