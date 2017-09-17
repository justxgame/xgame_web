
define(['angular','text!tpl/report.html','require','nprogress'], function (angular,tpl,require,NProgress) {
	function controller($scope,appApi){
		NProgress.done();
		$scope.date = '';
		$scope.filterBarModel = {
			channel_name:'全部',
			app_name:'全部'
		};
		$scope.getData = {
			channel_id:'',
			app_id:'',
			start_time:'',
			end_time:''
		};
		$scope.dt = $('.report-table').dataTable({
            buttons:{
            	buttons:[ {
            		extend: 'copyHtml5',
            		className:'btn-success btn-sm'
            	},{
					extend: 'excelHtml5',
					title: '统计报表',
					className:'btn-success btn-sm',
				},{
					extend: 'csvHtml5',
            		className:'btn-success btn-sm'
				}]
            },
	        columns: [
	            { data: 'app_id',width:'10%'},
	            { data: 'app_name',width:'15%'},
	            { data: 'channel_id',width:'10%'},
	            { data: 'channel_name',width:'10%'},
	            { data: 'click_nums',width:'10%'},
	            { data: 'distinct_click_nums',width:'10%'},
	            { data: 'activation_nums',width:'10%'},
	            { data: 'distinct_activation_nums',width:'10%'},
	            { data: 'cvda',width:'5%'},
	            { data: 'ds',width:'10%'}
	        ]
	    });
	    appApi.allChannel(function(data){
			console.log(data);
			$scope.allChannel = data;
		});
		appApi.allApp(function(data){
			console.log(data);
			$scope.allApp = data;
		});
		$scope.channelClick = function(e,id,name){
			if(id===$scope.getData.channel_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.getData.channel_id = id;
			$scope.filterBarModel.channel_name = name;
		};
		$scope.appClick = function(e,id,name){
			if(id===$scope.getData.app_id){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			$scope.getData.app_id = id;
			$scope.filterBarModel.app_name = name;
		};
	    $scope.reportQuery = function(){
	    	var startTime = $scope.date.split('|')[0];
	    	var endTime = $scope.date.split('|')[1];
	    	$scope.getData.start_time = $scope.date!=''?new Date(startTime).getTime():'';
	    	$scope.getData.end_time = $scope.date!=''?new Date(endTime).getTime():'';
	    	appApi.reportList($scope.getData,function(data){
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
	    };
	    setTimeout(function(){
	    	$scope.reportQuery();
	    },0);
		$(document).on('click','.daterangepicker .btn-unrestricted',function(){
			$scope.picker.hide();
			$scope.getData.start_time = '';
	    	$scope.getData.end_time = '';
	    	$('.filter-bar').find('.date-range-picker').val('不限时间');
	    	$scope.date = '';
		});
	};
	return {controller: controller, tpl: tpl};
});