
define(['angular','text!tpl/kpi.html','require','nprogress'],function (angular,tpl,require,NProgress) {
	function controller($scope,appApi,dataFormat){
		NProgress.done();
		$scope.filterBarModel = {};
		appApi.kpiGetNav((data)=>{
			$scope.allType = data;
			$scope.filterBarModel.navName = data[0].navName;
			$scope.filterBarModel.kpiMetaModelList = data[0].kpiMetaModelList;
			$scope.filterBarModel.kpiName = data[0].kpiMetaModelList[0].kpiName;
			$scope.filterBarModel.kpiId = data[0].kpiMetaModelList[0].kpiId;
			console.log(data);
		});
		$scope.navClick = (e,n,l)=>{
			$scope.filterBarModel.navName = n;
			$scope.filterBarModel.kpiMetaModelList = l;
			$scope.filterBarModel.kpiName = l[0].kpiName;
			$scope.filterBarModel.kpiId = l[0].kpiId;
		};
		$scope.kpiClick = (e,n,i)=>{
			$scope.filterBarModel.kpiName = n;
			$scope.filterBarModel.kpiId = i;
		};
		function Query(id){
			appApi.kpiGetData(id,(data)=>{
				console.log(data);
				$scope.kpiData = data;
			});
		}
		$scope.Query = ()=>{
			Query($scope.filterBarModel.kpiId);
		}
	};
	return {controller: controller, tpl: tpl};
});

