define(['angular', 'text!tpl/game.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$table = $('.game-table');
		$scope.$modal = $('.game-modal');
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
			fixedColumns: {
		        leftColumns: 2
		   },
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
		console.log($.fn.dataTable.FixedColumns);
		function Query(){
			appApi.getGameSetting($scope.filterBarModel.serverId,data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		$scope.addGame = function(e) {
			$scope.title = '新增';
			$scope.$modal.modal('show');
			$scope.formModel.id = 0;
		};
		$scope.$table.on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.formModel = $.extend(true, {}, data);
			console.log($scope.formModel);
			$scope.title = '编辑';
			$scope.$digest();
			$scope.$modal.modal('show');
		});
		$scope.submitForm = (e)=>{
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
			appApi.setGameServerInfo($scope.formModel,data=>{
				console.log(data);
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				Query();
				setTimeout(()=>{
					$scope.$modal.modal('hide');
				},1000)
			});
		};
		$scope.$modal.on('shown.bs.modal',()=>{
			$scope.$modal.find('.game-form-wrapper').perfectScrollbar({
        		suppressScrollX: true
        	});
		});
		$scope.$modal.on('hidden.bs.modal',()=>{
			$scope.success = false;
			$scope.formModel = {};
			$('.submit-success').css('visibility','hidden');
			$scope.modalForm.$submitted = false;
			$scope.modalForm.$setUntouched();
		});
	};
	return {controller: controller, tpl: tpl};
});
