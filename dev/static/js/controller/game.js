define(['angular', 'text!tpl/game.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$table = $('.player-table');
		$scope.QueryParam = {}
		$scope.formModel = {};
		appApi.getServerBox(data=>{
			$scope.serverBox = data;
			$scope.filterBarModel.serverName = data[0].serverName;
			$scope.filterBarModel.serverId = data[0].serverId;
			console.log($scope.filterBarModel);
			Query();
		});
		$scope.serverClick = (e,n,i)=>{
			if(i==$scope.filterBarModel.serverId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.filterBarModel.serverId = i;
			$scope.filterBarModel.serverName = n;
			Query();
		};
		$scope.dt = $scope.$table.dataTable({
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '玩家信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'uid',
					width: '20%'
				},
				{
					data: 'userName',
					width: '20%'
				},
				{
					data: 'money',
					width: '15%'
				},
				{
					data: 'ticket',
					width: '15%'
				},
				{
					data: null,
					width: '3/*90%'
				}
			],
			columnDefs: [{
				targets: 4,
				visible: true,
				render: function(data, type, row, meta) {
					var tmp = '<button class="btn btn-primary btn-edit">发送补偿邮件</button><button class="btn btn-info btn-del">修改玩家数据</button>';
					return data.userState==0?tmp+='<button class="btn btn-danger btn-edit">封号</button>':tmp+='<button class="btn btn-success btn-edit">解封</button>';
				}
			}]
		});
		function Query(){
			appApi.getGameSetting($scope.filterBarModel.serverId,data=>{
				console.log(data);
//				$scope.dt.fnClearTable();
//				if(data.length==0) return;
//				$scope.dt.fnAddData(data);
			});
		};
		
	};
	return {
		controller: controller,
		tpl: tpl
	};
});