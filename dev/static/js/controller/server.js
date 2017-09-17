define(['angular','text!tpl/server.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,appApi,dataFormat){
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.$modal = $('.server-modal');
		$scope.$table = $('.server-table');
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.formModel = {
			serverId:'',
			status:1
		};
		appApi.getServerBox(data=>{
			console.log(data);
			$scope.serverBox = data;
			$scope.filterBarModel.serverId = data[0].serverId;
			$scope.filterBarModel.serverName = data[0].serverName;
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
		$scope.statusClick = (e,n,i)=>{
			if(i==$scope.formModel.status) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.formModel.status = i;
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
					return data.status==0?'关闭':'运行中';
				}
			},{
				targets: 3,
				visible: true,
				render: function(data, type, row, meta) {
					return data.orderType==0?'':'<button class="btn btn-primary btn-edit">修改</button><button class="btn btn-danger btn-del">删除</button>';
				}
			}]
		});
		function Query(){
			appApi.getServerInfo($scope.filterBarModel.serverId,data=>{
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		$scope.addServer = function(e){
			$scope.title = '新增';
			$scope.$modal.modal('show');
			$scope.formModel.actionId = 1;
		};
		$scope.$table.on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			$scope.formModel = data;
			console.log($scope.formModel);
			$scope.title = '编辑';
			$scope.$digest();
			$scope.$modal.modal('show');
			$scope.formModel.actionId = 2;
		});
		$scope.$table.on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.serverName+'</label>服务器?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				$scope.formModel = data;
				$scope.formModel.actionId = 3;
				serverPost();
			}).catch(swal.noop);
		});
		function serverPost(){
			console.log($scope.formModel);
			appApi.serverPost($scope.formModel,data=>{
				console.log(data);
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				Query();
				setTimeout(function(){
					$scope.$modal.modal('hide');
				},1000)
			});
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
			serverPost();
		};
		$scope.$modal.on('hidden.bs.modal',function(){
			$scope.success = false;
			$scope.formModel = {
				status:1
			};
			$('.submit-success').css('visibility','hidden');
			$scope.modalForm.$submitted = false;
		});
	};
	return {controller: controller, tpl: tpl};
});