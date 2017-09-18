define(['angular', 'text!tpl/delivery.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi, getMillisecond) {
		NProgress.done();
		$scope.$table = $('.delivery-data');
		$scope.filterBarModel = {};
		$scope.QueryDate = undefined;
		$scope.QueryParam = {}
		appApi.getRewardNav((data) => {
			$scope.filterBarData = data;
			$scope.filterBarModel.itemTypeId = data.itemTypeBoxModel.itemTypeModelList[0].itemTypeId;
			$scope.filterBarModel.itemTypeName = data.itemTypeBoxModel.itemTypeModelList[0].itemTypeName;
			$scope.filterBarModel.orderTypeId = data.orderTypeBoxModel.orderTypeModelList[0].orderTypeId;
			$scope.filterBarModel.orderTypeName = data.orderTypeBoxModel.orderTypeModelList[0].orderTypeName;
			Param();
			Query();
		});
		$scope.dt = $scope.$table.dataTable({
			buttons: {
				buttons: [{
					extend: 'copyHtml5',
					className: 'btn-success btn-sm'
				}, {
					extend: 'excelHtml5',
					title: '发货信息表',
					className: 'btn-success btn-sm',
				}, {
					extend: 'csvHtml5',
					className: 'btn-success btn-sm'
				}]
			},
			columns: [{
					data: 'uid',
					width: '5%'
				},
				{
					data: 'supplierOrderId',
					width: '15%'
				},
				{
					data: 'rewardName',
					width: '5%'
				},
				{
					data: 'rewardCount',
					width: '5%'
				},
				{
					data: 'phoneNo',
					width: '10%'
				},
				{
					data: 'address',
					width: '15%'
				},
				{
					data: 'orderType',
					width: '5%'
				},
				{
					data: 'orderId',
					width: '15%'
				},
				{
					data: 'exception',
					width: '5%'
				},
				{
					data: 'indate',
					width: '10%'
				},
				{
					data: null,
					width: '10%'
				}
			],
			columnDefs: [{
				targets: 10,
				visible: true,
				render: function(data, type, row, meta) {
					return data.orderType==0?'':'<button class="btn btn-primary btn-retry">重新发货</button>';
				}
			}]
		});
		$scope.typeClick = (e,n,i)=>{
			if(i==$scope.filterBarModel.itemTypeId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.filterBarModel.itemTypeId = i;
			$scope.filterBarModel.itemTypeName = n;
		};
		$scope.stateClick = (e,n,i)=>{
			if(i==$scope.filterBarModel.orderTypeId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.filterBarModel.orderTypeId = i;
			$scope.filterBarModel.orderTypeName = n;
		};
		$scope.$table.on('click','.btn-retry',()=>{
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认重新发货?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(()=>{
				appApi.sendReCallOrder(data,(data)=>{
					console.log(data);
					Query();
				});
			}).catch(swal.noop);
			
		});
		function Query(){
			appApi.getRewardOrder($scope.QueryParam,(data)=>{
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
		};
		function Param(){
			var dates = $scope.QueryDate?$scope.QueryDate.split('|'):0;
			$scope.QueryParam.rewardType = $scope.filterBarModel.itemTypeId;
			$scope.QueryParam.orderType = $scope.filterBarModel.orderTypeId;
			$scope.QueryParam.dateFrom = $scope.QueryDate?getMillisecond(dates[0]):0;
			$scope.QueryParam.dateTo = $scope.QueryDate?getMillisecond(dates[1]):0;
		}
		$scope.Query = () => {
			Param();
			console.log($scope.QueryParam);
			Query();
		};
		$(document).on('click','.daterangepicker .btn-unrestricted',()=>{
			$scope.picker.hide();
	    	$('.filter-bar').find('.date-range-picker').val('不限时间');
	    	$scope.QueryDate = 0;
		});
	};
	return {
		controller: controller,
		tpl: tpl
	};
});