define(['angular', 'text!tpl/player.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.$modal = $('.palery-modal');
		$scope.$table = $('.player-table');
		$scope.QueryParam = {}
		$scope.formModel = {};
		$scope.errorMsg = '';
		appApi.getServerBox(data=>{
			$scope.serverBox = data;
			$scope.filterBarModel.serverName = data[0].serverName;
			$scope.filterBarModel.serverId = data[0].serverId;
			console.log($scope.filterBarModel);
//			Query();
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
//			Query();
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
					data: 'pid',
					width: '15%'
				},
				{
					data: 'userName',
					width: '15%'
				},
				{
					data: 'coins',
					width: '10%'
				},
				{
					data: 'diamond',
					width: '10%'
				},
				{
					data: 'ticket',
					width: '10%'
				},
				{
					data: 'counpon',
					width: '10%'
				},
				{
					data: null,
					width: '30%'
				}
			],
			columnDefs: [{
				targets: 6,
				visible: true,
				render: function(data, type, row, meta) {
					console.log(data);
					var tmp = '<button class="btn btn-primary send-mail">发送补偿邮件</button><button class="btn btn-info btn-edit">修改玩家数据</button>';
					return data.exist?tmp+='<button class="btn btn-danger btn-blockade">封号</button>':tmp+='<button class="btn btn-success btn-relieve">解封</button>';
				}
			}]
		});
		$scope.$table.on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.formModel = $.extend(true, {}, data);
			console.log($scope.formModel);
			$scope.title = '编辑玩家信息';
			$scope.formModel.actionId = 4;
			$scope.$digest();
			$scope.$modal.modal('show');
		});
		$scope.$table.on('click','.send-mail',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.formModel = $.extend(true, {}, data);
			console.log(data);
			$scope.formModel.coins = undefined;
			$scope.formModel.diamond = undefined;
			$scope.formModel.ticket = undefined;
			$scope.formModel.counpon = undefined;
			$scope.formModel.pid = 7;
			$scope.formModel.actionId = 3;
			$scope.$digest();
			$scope.$modal.modal('show');
		});
		$scope.$table.on('click','.btn-blockade',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认将<label class="red">'+data.userName+'</label>封号?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				console.log(123123);
				$scope.formModel = $.extend(true, {}, data);
				$scope.formModel.actionId = 1;
				$scope.formModel.pid = 7;
				userUpdate();
			}).catch(swal.noop);
		});
		$scope.$table.on('click','.btn-relieve',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认解除<label class="red">'+data.uid+'</label>解封?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				$scope.formModel = $.extend(true, {}, data);
				$scope.formModel.actionId = 2;
				userUpdate();
			}).catch(swal.noop);
		});
		function Query(){
			appApi.getPlayerInfo($scope.queryParam,data=>{
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		$scope.Query = ()=>{
			if($scope.filterBarModel.userId==''||$scope.filterBarModel.userId==undefined){
				$scope.errorMsg = 'uid不可为空';
				return;
			}else{
				$scope.errorMsg = '';
				$scope.queryParam = $.extend(true, {}, $scope.filterBarModel);
			}
			Query();
		};
		function userUpdate(){
			console.log($scope.formModel);
			appApi.userUpdate($scope.formModel,data=>{
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
			userUpdate();
		};
		$scope.$modal.on('hidden.bs.modal',()=>{
			$scope.success = false;
			$scope.formModel = {};
			$('.submit-success').css('visibility','hidden');
			$scope.modalForm.$submitted = false;
			$scope.modalForm.money.$touched = false;
			$scope.modalForm.coins.$touched = false;
			$scope.modalForm.ticket.$touched = false;
			$scope.modalForm.points.$touched = false;
			$scope.modalForm.name?$scope.modalForm.name.$touched=false:console.log(null);
		});
	};
	return {
		controller: controller,
		tpl: tpl
	};
});