
define(['angular','text!tpl/channel.html','require','nprogress','sweetalert'], function (angular,tpl,require,NProgress,swal) {
	function controller($scope,appApi,dataFormat){
		NProgress.done();
		$scope.btnText = '提交';
		$scope.title = '新增';
		$scope.channelFormModel = {
			channel_id:'',
			channel_name: '',
            channel_describe: ''
		};
		$scope.dt = $('.channel-table').dataTable({
            buttons:{
            	buttons:[ {
            		extend: 'copyHtml5',
            		className:'btn-success btn-sm'
            	},{
					extend: 'excelHtml5',
					title: '广告商列表',
					className:'btn-success btn-sm',
				},{
					extend: 'csvHtml5',
            		className:'btn-success btn-sm'
				}]
            },
	        columns: [
	            { data: 'channel_name',width:'30%'},
	            { data: 'channel_describe',width:'30%'},
	            { data: 'last_edit_date',width:'20%'},
	            { data: 'last_edit_user_name',width:'10%'},
	            {data: null,width:'10%'}
	        ],
	        columnDefs: [{
	        	targets: 2,
	        	render: function (data, type, row, meta) {
	        		return dataFormat(data);
	        	}
	        },{
	            targets: 4,
	            visible: true,
	            render: function (data, type, row, meta) {
	            	return '<button class="btn btn-primary btn-edit">编辑</button><button class="btn btn-danger btn-del">删除</button>';
                }
	        }]
	    });
	    function channelList(){
	    	appApi.channelList(function(data){
				console.log(data);
				$scope.dt.fnClearTable();
				if(data.length==0) return;
				$scope.dt.fnAddData(data);
			});
	    };
	    channelList();
		$scope.addChannel = function(e){
			$scope.title = '新增';
			$('.channel-modal').modal('show');
		};
		$('.channel-table').on('click','.btn-edit',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			for (var name in $scope.channelFormModel) {
				$scope.channelFormModel[name] = data[name];
			};
			$scope.title = '编辑';
			$scope.$digest();
			$('.channel-modal').modal('show');
		});
		$('.channel-table').on('click','.btn-del',function(e){
			var data = $scope.dt.api(true)
			.row($(this).parents('tr')).data();
			swal({
				html: '确认删除<label class="red">'+data.channel_name+'</label>渠道?',
				type: 'warning',
				confirmButtonText: '确定',
				showCancelButton:true,
				cancelButtonText:'取消'
			}).then(function () {
				appApi.channelDel(data.channel_id,function(data){
					channelList();
				});
			}).catch(swal.noop);
		});
		function postChannel(){
			var aurl = '';
			if($scope.title=='编辑'){
				aurl = 'update';
			}else{
				aurl = 'new';
			};
			appApi.channelPost($scope.channelFormModel,aurl,function(data){
				$scope.btnText = '关闭';
				$('.submit-success').css('visibility','visible');
				$scope.success = true;
				channelList();
				setTimeout(function(){
					$('.channel-modal').modal('hide');
				},1000)
			});
		};
		$scope.submitForm = function(e){
			if($scope.success){
				$('.channel-modal').modal('hide');
				return false;
			};
			$scope.addChannelForm.$submitted = true;
			if(!$scope.addChannelForm.$valid){
				e.stopPropagation();
				e.preventDefault(); 
				return false;
			};
			postChannel();
		};
		$('.channel-modal').on('hidden.bs.modal',function(){
			$scope.success = false;
			$scope.channelFormModel = {
				channel_id: '',
				channel_name: '',
            	channel_describe: ''
			};
			$('.submit-success').css('visibility','hidden');
			$scope.addChannelForm.$submitted = false;
			$scope.addChannelForm.name.$touched = false;
		});
	};
	return {controller: controller, tpl: tpl};
});