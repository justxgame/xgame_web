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
				{data: 'id'},
				{data: 'matchItemType'},
				{data: 'gmaeType'},
				{data: 'gameName'},
				{data: 'matchMode'},
				{data: 'minStartPlayerNum'},
				{data: 'maxStartPlayerNum'},
				{data: 'canIntMinCoin'},
				{data: 'canIntMaxCoin'},
				{data: 'tableCost'},
				{data: 'maxPoint'},
				{data: 'initBase'},
				{data: 'baseIncreaseSecond'},
				{data: 'baseTimes'},
				{data: 'signCost'},
				{data: 'iconId'},
				{data: 'winnerRewards'},
				{data: 'initStartScores'},
				{data: 'remainPlayerNum'},
				{data: 'secondRoundPlayerNumber'},
				{data: 'phase2GameRounds'},
				{data: 'dayMonDay'},
				{data: 'dateWeekDay'},
				{data: 'dateDayHour'},
				{data: 'dateHourMinute'},
				{data: 'allowLateMinutes'}
			],
			columnDefs: [{
				targets: 14,
				visible: true,
				render: function(data, type, row, meta) {
					let str = '';
					for(let item of data){
						for(let name in item){
							str+= item[name]+'|';
						};
						str = str.substr(0,str.length-1);
						str +=';';
					}
					return str;
				}
			},
			{
				targets: 16,
				visible: true,
				render: function(data, type, row, meta) {
					let str = '';
					for(let item of data){
						for(let name in item){
							str+= item[name]+'|';
						};
						str = str.substr(0,str.length-1);
						str +=';';
					}
					return str;
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