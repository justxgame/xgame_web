define(['angular', 'text!tpl/game.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$table = $('.game-table');
		$scope.QueryParam = {}
		$scope.formModel = {};
		appApi.getGameServerInfo(data=>{
			$scope.serverBox = data;
			$scope.filterBarModel.serverName = data[0].serverName;
			$scope.filterBarModel.serverId = data[0].serverId;
			console.log($scope.filterBarModel);
			Query();
		});
		$scope.drapListSearch = function(name) {
			return $scope.inputKey == undefined || $scope.inputKey == '' || name.indexOf($scope.inputKey) > -1;
		};
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
			scrollX: true,
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '游戏信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [
				{data: null},
				{data: 'id'},
				{data: 'match_item_type'},
				{data: 'game_type'},
				{data: 'name'},
				{data: 'match_mode'},
				{data: 'min_start_player_num'},
				{data: 'max_start_player_num'},
				{data: 'can_int_min_coin'},
				{data: 'can_in_max_coin'},
				{data: 'table_cost'},//10
				{data: 'max_point'},
				{data: 'init_base'},
				{data: 'base_increase_second'},
				{data: 'base_times'},
				{data: 'sign_cost'},
				{data: 'icon_id'},
				{data: 'winner_rewards'},
				{data: 'init_start_scores'},
				{data: 'remain_player_num'},
				{data: 'second_round_player_number'},//20
				{data: 'phase2_game_rounds'},
				{data: 'early_show_hour'},
				{data: 'early_exam_minute'},
				{data: 'date_mon_day'},
				{data: 'date_week_day'},
				{data: 'date_day_hour'},
				{data: 'date_hour_minute'},
				{data: 'allow_late_minutes'},
				{data: 'open_flag'}//29
			],
			columnDefs: [{
				targets: 0,
				visible: true,
				render: function(data, type, row, meta) {
					return '<button class="btn btn-info btn-edit">编辑</button>'
				}
			}]
		});
		function Query(){
			appApi.getGameSetting($scope.filterBarModel.serverId,data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
	};
	return {
		controller: controller,
		tpl: tpl
	};
});