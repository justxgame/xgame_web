/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-10-06 21:54
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert","moment"],function(angular,require,NProgress,swal,moment){return{controller:function($scope,appApi,getMillisecond){function Query(){appApi.getTimingInform(function(data){console.log(data),$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}NProgress.done(),$scope.filterBarModel={},$scope.serverBox=[],$scope.$modal=$(".inform-modal"),$scope.$table=$(".inform-data"),$scope.QueryParam={},$scope.formModel={},appApi.getServerBox(function(data){$scope.serverBox=data,$scope.formModel.serverId=data[0].serverId,$scope.formModel.serverName=data[0].serverName}),appApi.getTimingBox(function(data){console.log(data),$scope.timingBox=data,$scope.formModel.freqUnit=data[0].boxId,$scope.formModel.boxName=data[0].boxName}),$scope.dt=$scope.$table.dataTable({buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"定时广播信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:"msg",width:"31%"},{data:"serverId",width:"5%"},{data:"uid",width:"7%"},{data:"indate",width:"10%"},{data:"startDate",width:"10%"},{data:"endDate",width:"10%"},{data:"nextSendDate",width:"10%"},{data:null,width:"10%"},{data:null,width:"7%"}],columnDefs:[{targets:7,visible:!0,render:function(data,type,row,meta){var unit="H"==data.freqUnit?"小时":"m"==data.freqUnit?"分钟":"秒";return data.freqVal+unit}},{targets:8,visible:!0,render:function(data,type,row,meta){return'<button class="btn btn-danger btn-del">删除</button>'}}]}),$scope.$table.on("click",".btn-del",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();swal({html:"确认删除这条定时广播?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){appApi.deleteTimingInform(data.transection,function(data){Query()})}).catch(swal.noop)}),Query(),$scope.serverClick=function(e,n,i){if(i==$scope.formModel.serverId)return e.stopPropagation(),void e.preventDefault();$scope.formModel.serverId=i,$scope.formModel.serverName=n},$scope.unitClick=function(e,n,i){if(i==$scope.formModel.freqUnit)return e.stopPropagation(),void e.preventDefault();$scope.formModel.freqUnit=i,$scope.formModel.boxName=n},$scope.Send=function(){$scope.$modal.modal("show")},$scope.submitForm=function(e){return $scope.success?($scope.$modal.modal("hide"),!1):($scope.modalForm.$submitted=!0,$scope.modalForm.$valid?void appApi.addTimingInform($scope.formModel,function(data){console.log(data),$scope.btnText="关闭",$(".submit-success").css("visibility","visible"),$scope.success=!0,Query(),setTimeout(function(){$scope.$modal.modal("hide")},1e3)}):(e.stopPropagation(),e.preventDefault(),!1))},$scope.$modal.on("hidden.bs.modal",function(){$scope.success=!1,$scope.formModel={},$(".submit-success").css("visibility","hidden"),$scope.modalForm.$submitted=!1,$scope.modalForm.message.$touched=!1,$scope.modalForm.freqVal.$touched=!1,$scope.formModel.serverId=$scope.serverBox[0].serverId,$scope.formModel.serverName=$scope.serverBox[0].serverName,$scope.formModel.freqUnit=$scope.timingBox[0].boxId,$scope.formModel.boxName=$scope.timingBox[0].boxName})}}});