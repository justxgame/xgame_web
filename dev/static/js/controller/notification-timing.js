define(['angular', 'text!tpl/notification-timing.html', 'require', 'nprogress','sweetalert','moment'], function(angular, tpl, require, NProgress,swal,moment) {
	function controller($scope, appApi, getMillisecond) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$modal = $('.notification-modal');
		$scope.$table = $('.notification-data');
		$scope.QueryParam = {}
		$scope.formModel = {};
		appApi.getTimingBox(data=>{
			console.log(data);
			$scope.timingBox = data;
			$scope.formModel.freqUnit = data[0].boxId;
			$scope.formModel.boxName = data[0].boxName;
		});
		$scope.dt = $scope.$table.dataTable({
			order: [],
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '定时广播信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'msg',
					width: '36%'
				},
				{
					data: 'uid',
					width: '7%'
				},
				{
					data: 'indate',
					width: '10%'
				},
				{
					data: 'startDate',
					width: '10%'
				},
				{
					data: 'endDate',
					width: '10%'
				},
				{
					data: 'nextSendDate',
					width: '10%'
				},
				{
					data: null,
					width: '10%'
				},
				{
					data: null,
					width: '7%'
				}
			],
			columnDefs: [{
				targets: 6,
				visible: true,
				render: function(data, type, row, meta) {
					var unit = data.freqUnit=='H'?'小时':data.freqUnit=='m'?'分钟':'秒';
					return data.freqVal+unit;
					}
				},
				{
					targets: 7,
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
				html: '确认删除这条定时广播?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				appApi.deleteTimingNotice(data.transection,data=>{
					Query();
				});
			}).catch(swal.noop);
		});
		function Query(){
			appApi.getTimingNotice(data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		Query();
		$scope.unitClick = (e,n,i)=>{
			if(i==$scope.formModel.freqUnit) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.formModel.freqUnit = i;
			$scope.formModel.boxName = n;
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
			if(!$scope.modalForm.$valid){
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
			$scope.formModel.type = 2;
			appApi.addTimingNotice($scope.formModel,data=>{
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
			$scope.modalForm.freqVal.$touched = false;
			$scope.formModel.freqUnit = $scope.timingBox[0].boxId;
			$scope.formModel.boxName = $scope.timingBox[0].boxName;
		});
	};
	return {controller: controller, tpl: tpl};
});