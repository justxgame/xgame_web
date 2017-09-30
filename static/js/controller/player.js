/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-09-30 10:51
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert"],function(angular,require,NProgress,swal){return{controller:function($scope,appApi){function Query(){appApi.getPlayerInfo($scope.queryParam,function(data){console.log(data),$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}function userUpdate(){console.log($scope.formModel),appApi.userUpdate($scope.formModel,function(data){console.log(data),3!=$scope.formModel.actionId&&4!=$scope.formModel.actionId||($scope.btnText="关闭",$(".submit-success").css("visibility","visible"),$scope.success=!0,setTimeout(function(){$scope.$modal.modal("hide")},1e3)),Query()})}console.log(window.location.origin),NProgress.done(),$scope.filterBarModel={},$scope.serverBox=[],$scope.$modal=$(".palery-modal"),$scope.$table=$(".player-table"),$scope.QueryParam={},$scope.formModel={},$scope.errorMsg="",appApi.getServerBox(function(data){$scope.serverBox=data,$scope.filterBarModel.serverId="ALL",$scope.filterBarModel.serverName="全服",console.log($scope.filterBarModel)}),$scope.drapListSearch=function(name){return void 0==$scope.inputKey||""==$scope.inputKey||name.indexOf($scope.inputKey)>-1},$scope.serverClick=function(e,n,i){if(i==$scope.filterBarModel.serverId)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.serverId=i,$scope.filterBarModel.serverName=n},$scope.dt=$scope.$table.dataTable({buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"玩家信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:"pid",width:"15%"},{data:"userName",width:"15%"},{data:"coins",width:"10%"},{data:"diamond",width:"10%"},{data:"ticket",width:"10%"},{data:"counpon",width:"10%"},{data:null,width:"30%"}],columnDefs:[{targets:6,visible:!0,render:function(data,type,row,meta){console.log(data);var tmp='<button class="btn btn-primary send-mail">发送补偿邮件</button><button class="btn btn-info btn-edit">修改玩家数据</button>';return tmp+='<button class="btn btn-danger btn-blockade">封号</button><button class="btn btn-success btn-relieve">解封</button>'}}]}),$scope.$table.on("click",".btn-edit",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();$scope.formModel=$.extend(!0,{},data),console.log($scope.formModel),$scope.title="编辑玩家信息",$scope.formModel.actionId=4,$scope.$digest(),$scope.$modal.modal("show")}),$scope.$table.on("click",".send-mail",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();$scope.formModel=$.extend(!0,{},data),console.log(data),$scope.formModel.coins=void 0,$scope.formModel.diamond=void 0,$scope.formModel.ticket=void 0,$scope.formModel.counpon=void 0,$scope.formModel.actionId=3,$scope.$digest(),$scope.$modal.modal("show")}),$scope.$table.on("click",".btn-blockade",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();swal({html:'确认将<label class="red">'+data.userName+"</label>封号?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){console.log(123123),$scope.formModel=$.extend(!0,{},data),$scope.formModel.actionId=1,userUpdate()}).catch(swal.noop)}),$scope.$table.on("click",".btn-relieve",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();swal({html:'确认解除<label class="red">'+data.userName+"</label>解封?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){$scope.formModel=$.extend(!0,{},data),$scope.formModel.actionId=2,userUpdate()}).catch(swal.noop)}),$scope.Query=function(){""!=$scope.filterBarModel.userId&&void 0!=$scope.filterBarModel.userId?($scope.errorMsg="",$scope.queryParam=$.extend(!0,{},$scope.filterBarModel),delete $scope.queryParam.serverName,Query()):$scope.errorMsg="uid不可为空"},$scope.submitForm=function(e){return $scope.success?($scope.$modal.modal("hide"),!1):($scope.modalForm.$submitted=!0,$scope.modalForm.$valid?void userUpdate():(e.stopPropagation(),e.preventDefault(),!1))},$scope.$modal.on("hidden.bs.modal",function(){$scope.success=!1,$scope.formModel={},$(".submit-success").css("visibility","hidden"),$scope.modalForm.$submitted=!1,$scope.modalForm.money.$touched=!1,$scope.modalForm.coins.$touched=!1,$scope.modalForm.ticket.$touched=!1,$scope.modalForm.points.$touched=!1,$scope.modalForm.name?$scope.modalForm.name.$touched=!1:console.log(null)})}}});