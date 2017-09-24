define(['angular', 'text!tpl/console.html', 'require', 'nprogress', 'sweetalert'], function(angular, tpl, require, NProgress, swal) {
	function controller($scope, appApi, dataFormat) {
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.$table = $('.server-table');
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.formModel = {
			serverId: '',
			status: 1
		};
		appApi.getServerBox(data => {
			console.log(data);
			$scope.serverBox = data;
			$scope.filterBarModel.serverId = data[0].serverId;
			$scope.filterBarModel.serverName = data[0].serverName;
			Query();
		});
		$scope.serverClick = (e, n, i) => {
			if(i == $scope.filterBarModel.serverId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.filterBarModel.serverId = i;
			$scope.filterBarModel.serverName = n;
			Query();
		};
		$scope.statusClick = (e, n, i) => {
			if(i == $scope.formModel.status) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
			$scope.formModel.status = i;
		};
		//		$('table').find('tr').each((i)=>{
		//			var box = $(this).find('input[type=checkbox]');
		//			var id = box.data('id');
		//			if(idArray.indexOf(id)>-1){
		//				box.prop('checked',true);
		//			}
		//		});
		$scope.drapListSearch = function(name) {
			return $scope.inputKey == undefined || $scope.inputKey == '' || name.indexOf($scope.inputKey) > -1;
		};
		$scope.dt = $scope.$table.dataTable({
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '服务器信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'serverName',
					width: '30%'
				},
				{
					data: 'ipPort',
					width: '25%'
				},
				{
					data: 'status',
					width: '20%'
				},
				{
					data: null,
					width: '25%'
				}
			],
			columnDefs: [{
				targets: 2,
				visible: true,
				render: function(data, type, row, meta) {
					return data.status == 0 ? '关闭' : '运行中';
				}
			}, {
				targets: 3,
				visible: true,
				render: function(data, type, row, meta) {
					var btns = '<button class="btn btn-primary btn-reboot">重启</button>';
					var onOrOff = data.status == 0 ? '<button class="btn btn-success btn-on">启动</button>' : '<button class="btn btn-danger btn-off">关闭</button>';
					var edit = '<button class="btn btn-info btn-edit">修改</button><button class="btn btn-danger btn-del">删除</button>';
					return(btns + onOrOff + edit);
				}
			}]
		});

		function Query() {
			appApi.getServerInfo($scope.filterBarModel.serverId, data => {
				$scope.dt.fnClearTable();
				if(data.length == 0) return;
				$scope.dt.fnAddData(data);
			});
		};

		function formModelInit() {
			$scope.formModel = {
				status: 1
			};
			$scope.modalForm.$submitted = false;
			$scope.modalForm.serverName.$touched = false;
			$scope.modalForm.serverId.$touched = false;
			$scope.modalForm.ipPort.$touched = false;
		};
		$scope.addServer = function(e) {
			$scope.title = '新增';
			$scope.$modal.modal('show');
			$scope.formModel.actionId = 1;
		};
		$scope.$table.on('click', '.btn-edit', (e) => {
			var data = $scope.dt.api(true)
				.row($(this).parents('tr')).data();
			$scope.formModel = data;
			console.log($scope.formModel);
			$scope.title = '编辑服务器信息';
			$scope.formModel.actionId = 2;
			$scope.$digest();
			$scope.$modal.modal('show');
		});
		$scope.$table.on('click', '.btn', (e) => {
			if($(e.target).hasClass('btn-edit')) return;
			var data = $scope.dt.api(true)
				.row($(this).parents('tr')).data();
			var txt = '';
			$scope.formModel = data;
			if($(e.target).hasClass('btn-reboot')) {
				$scope.formModel.actionId = 6;
				txt = '重启';
			}
			if($(e.target).hasClass('btn-off')) {
				$scope.formModel.actionId = 5;
				txt = '关闭';
			}
			if($(e.target).hasClass('btn-on')) {
				$scope.formModel.actionId = 4;
				txt = '启动';
			}
			if($(e.target).hasClass('btn-del')) {
				$scope.formModel.actionId = 3;
				txt = '删除';
			}
			swal({
				html: '确认' + txt + '<label class="red">' + data.serverName + '</label>服务器?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton: true,
				cancelButtonText: '取消'
			}).then(() => {
				serverPost();
			}, () => {
				formModelInit();
				console.log(123)
			}).catch(swal.noop);
		});

		function serverPost() {
			console.log($scope.formModel);
			appApi.serverPost($scope.formModel, data => {
				console.log(data);
				Query();
				if($scope.formModel.actionId == 2 || $scope.formModel.actionId == 1) {
					$('.submit-success').css('visibility', 'visible');
					$scope.btnText = '关闭';
					$scope.success = true;
					setTimeout(() => {
						$scope.$modal.modal('hide');
					}, 1000);
				}
				formModelInit();
			});
		};
		$scope.submitForm = (e) => {
			if($scope.success) {
				$scope.$modal.modal('hide');
				return false;
			};
			$scope.modalForm.$submitted = true;
			if(!$scope.modalForm.$valid) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
			serverPost();
		};
	};
	return {controller: controller, tpl: tpl};
});