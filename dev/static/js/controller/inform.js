define(['angular', 'text!tpl/inform.html', 'require', 'nprogress','sweetalert'], function(angular, tpl, require, NProgress,swal) {
	function controller($scope, appApi, getMillisecond) {
		NProgress.done();
		$scope.filterBarModel = {};
		$scope.serverBox = [];
		$scope.QueryDate = undefined;
		$scope.QueryParam = {}
		appApi.getServerBox(data=>{
			console.log(data);
			$scope.serverBox = data;
			$scope.filterBarModel.serverId = data[0].serverId;
			$scope.filterBarModel.serverName = data[0].serverName;
//			Query();
		});
	};
	return {
		controller: controller,
		tpl: tpl
	};
});