/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-11-12 18:29
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert","moment"],function(angular,require,NProgress,swal,moment){return{controller:function($scope,appApi,getMillisecond){function Query(){appApi.getNotice(function(data){console.log(data),$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}NProgress.done(),$scope.filterBarModel={},$scope.serverBox=[],$scope.$modal=$(".notification-modal"),$scope.$table=$(".notification-data"),$scope.QueryParam={},$scope.formModel={},$scope.dt=$scope.$table.dataTable({order:[],buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"即时推送信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:"message",width:"55%"},{data:"sendDate",width:"20%"},{data:"sendUserName",width:"10%"},{data:null,width:"15%"}],columnDefs:[{targets:1,visible:!0,render:function(data,type,row,meta){return moment(data).format("YYYY-MM-DD HH:mm:ss")}},{targets:3,visible:!0,render:function(data,type,row,meta){return'<button class="btn btn-danger btn-del">删除</button>'}}]}),$scope.$table.on("click",".btn-del",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();swal({html:"确认删除这条推送?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){$scope.formModel=$.extend(!0,{},data),$scope.formModel.actionId=2,appApi.deleteNotice(data,function(data){console.log(data),Query()})}).catch(swal.noop)}),Query(),$scope.Send=function(){$scope.$modal.modal("show")},$scope.submitForm=function(e){return $scope.success?($scope.$modal.modal("hide"),!1):($scope.modalForm.$submitted=!0,console.log($scope.modalForm.$valid),$scope.modalForm.$valid?($scope.formModel.type=2,void appApi.sendNotice($scope.formModel,function(data){console.log(data),$scope.btnText="关闭",$(".submit-success").css("visibility","visible"),$scope.success=!0,Query(),setTimeout(function(){$scope.$modal.modal("hide")},1e3)})):(e.stopPropagation(),e.preventDefault(),!1))},$scope.$modal.on("hidden.bs.modal",function(){$scope.success=!1,$scope.formModel={},$(".submit-success").css("visibility","hidden"),$scope.modalForm.$submitted=!1,$scope.modalForm.message.$touched=!1})}}});