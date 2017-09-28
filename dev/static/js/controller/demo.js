define(['angular', 'text!tpl/demo.html', 'require', 'nprogress', 'sweetalert'], function(angular, tpl, require, NProgress, swal) {
	function controller($scope, appApi, dataFormat) {
		NProgress.done();
		$scope.filterBarModel = {
			name:'项目1',
			id:1
		};
		$scope.projectList = [
			{
				name:'项目1',
				id:1
			},
			{
				name:'项目2',
				id:2
			}
		];
		$scope.drapListSearch = function(name) {
			return $scope.inputKey == undefined || $scope.inputKey == '' || name.indexOf($scope.inputKey) > -1;
		};
		$scope.itemClick = (e,n,i)=>{
			if(i==$scope.filterBarModel.serverId) {
				e.stopPropagation();
				e.preventDefault();
				return;
			};
			$scope.filterBarModel.id = i;
			$scope.filterBarModel.name = n;
		};
		$scope.filterModel = [
			{
				id:1,
				items:[
					{
						itemId:10001,
						itemkey:'queryInfo',
						itemName:'查询信息',
						type:'checkbox',
						conditions:[
							{
								id:1,
								display:'手机号码',
								val:'mobile'
							},
							{
								id:2,
								display:'uid',
								val:'uid'
							},
							{
								id:3,
								lable:'苹果设备号',
								val:'iosId'
							},
							{
								id:4,
								lable:'安卓设备号',
								val:'androidId'
							}
						]
					}
				]
			}
		];
		$scope.formModel = {
			
		};
		function getfilterData(id){
			var tmp;
			$scope.filterModel.forEach(function(item,index){
				if(item.id==id){
					tmp = item;
				}
			});
			return item;
		};
		$scope.filterData = getfilterData($scope.filterBarModel.id);
	};
	return {controller: controller, tpl: tpl};
});