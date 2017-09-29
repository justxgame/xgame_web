/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-09-30 00:52
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert"],function(angular,require,NProgress,swal){return{controller:function($scope,appApi,dataFormat){function Query(){appApi.getServerInfo($scope.filterBarModel.serverId,function(data){$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}function formModelInit(){$scope.formModel={status:1},$scope.modalForm.$submitted=!1,$scope.modalForm.serverName.$touched=!1,$scope.modalForm.serverId.$touched=!1,$scope.modalForm.ipPort.$touched=!1}function serverPost(){console.log($scope.formModel),appApi.serverPost($scope.formModel,function(data){console.log(data),Query(),2!=$scope.formModel.actionId&&1!=$scope.formModel.actionId||($(".submit-success").css("visibility","visible"),$scope.btnText="关闭",$scope.success=!0,setTimeout(function(){$scope.$modal.modal("hide")},1e3)),formModelInit()})}var _this=this;NProgress.done(),$scope.btnText="提交",$scope.title="新增",$scope.$table=$(".server-table"),$scope.filterBarModel={},$scope.serverBox=[],$scope.formModel={serverId:"",status:1},appApi.getServerBox(function(data){console.log(data),$scope.serverBox=data,$scope.filterBarModel.serverId=data[0].serverId,$scope.filterBarModel.serverName=data[0].serverName,Query()}),$scope.serverClick=function(e,n,i){if(i==$scope.filterBarModel.serverId)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.serverId=i,$scope.filterBarModel.serverName=n,Query()},$scope.statusClick=function(e,n,i){if(i==$scope.formModel.status)return e.stopPropagation(),e.preventDefault(),!1;$scope.formModel.status=i},$scope.drapListSearch=function(name){return void 0==$scope.inputKey||""==$scope.inputKey||name.indexOf($scope.inputKey)>-1},$scope.dt=$scope.$table.dataTable({buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"服务器信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:"serverName",width:"30%"},{data:"ipPort",width:"25%"},{data:"status",width:"20%"},{data:null,width:"25%"}],columnDefs:[{targets:2,visible:!0,render:function(data,type,row,meta){return 0==data.status?"关闭":"运行中"}},{targets:3,visible:!0,render:function(data,type,row,meta){return'<button class="btn btn-primary btn-reboot">重启</button>'+(0==data.status?'<button class="btn btn-success btn-on">启动</button>':'<button class="btn btn-danger btn-off">关闭</button>')+'<button class="btn btn-info btn-edit">修改</button><button class="btn btn-danger btn-del">删除</button>'}}]}),$scope.addServer=function(e){$scope.title="新增",$scope.$modal.modal("show"),$scope.formModel.actionId=1},$scope.$table.on("click",".btn-edit",function(e){var data=$scope.dt.api(!0).row($(_this).parents("tr")).data();$scope.formModel=data,console.log($scope.formModel),$scope.title="编辑服务器信息",$scope.formModel.actionId=2,$scope.$digest(),$scope.$modal.modal("show")}),$scope.$table.on("click",".btn",function(e){if(!$(e.target).hasClass("btn-edit")){var data=$scope.dt.api(!0).row($(_this).parents("tr")).data(),txt="";$scope.formModel=data,$(e.target).hasClass("btn-reboot")&&($scope.formModel.actionId=6,txt="重启"),$(e.target).hasClass("btn-off")&&($scope.formModel.actionId=5,txt="关闭"),$(e.target).hasClass("btn-on")&&($scope.formModel.actionId=4,txt="启动"),$(e.target).hasClass("btn-del")&&($scope.formModel.actionId=3,txt="删除"),swal({html:"确认"+txt+'<label class="red">'+data.serverName+"</label>服务器?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){serverPost()},function(){formModelInit(),console.log(123)}).catch(swal.noop)}}),$scope.submitForm=function(e){return $scope.success?($scope.$modal.modal("hide"),!1):($scope.modalForm.$submitted=!0,$scope.modalForm.$valid?void serverPost():(e.stopPropagation(),e.preventDefault(),!1))}}}});