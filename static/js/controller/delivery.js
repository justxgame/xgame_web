/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-09-27 22:41
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert","moment"],function(angular,require,NProgress,swal,moment){return{controller:function($scope,appApi,getMillisecond){function Query(){appApi.getRewardOrder($scope.QueryParam,function(data){$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}function Param(){var today=moment().format("YYYY-MM-DD"),dates=$scope.QueryDate?$scope.QueryDate.split("|"):0;$scope.QueryParam.rewardType=$scope.filterBarModel.itemTypeId,$scope.QueryParam.orderType=$scope.filterBarModel.orderTypeId,$scope.QueryParam.dateFrom=$scope.QueryDate?getMillisecond(dates[0]):0,$scope.QueryParam.dateTo=$scope.QueryDate?dates[1]==today?moment().valueOf():getMillisecond(dates[1]):0}NProgress.done(),$scope.$table=$(".delivery-data"),$scope.filterBarModel={},$scope.QueryDate=void 0,$scope.QueryParam={},appApi.getRewardNav(function(data){$scope.filterBarData=data,$scope.filterBarModel.itemTypeId=data.itemTypeBoxModel.itemTypeModelList[0].itemTypeId,$scope.filterBarModel.itemTypeName=data.itemTypeBoxModel.itemTypeModelList[0].itemTypeName,$scope.filterBarModel.orderTypeId=data.orderTypeBoxModel.orderTypeModelList[0].orderTypeId,$scope.filterBarModel.orderTypeName=data.orderTypeBoxModel.orderTypeModelList[0].orderTypeName,$scope.QueryParam.rewardType=$scope.filterBarModel.itemTypeId,$scope.QueryParam.orderType=$scope.filterBarModel.orderTypeId,$scope.QueryParam.dateFrom=0,$scope.QueryParam.dateTo=0,$(".date-range-picker").val("不限时间"),Query()}),$scope.drapListSearch=function(name){return void 0==$scope.inputKey||""==$scope.inputKey||name.indexOf($scope.inputKey)>-1},$scope.dt=$scope.$table.dataTable({buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"发货信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:"uid",width:"5%"},{data:"supplierOrderId",width:"15%"},{data:"rewardName",width:"5%"},{data:"rewardCount",width:"5%"},{data:"phoneNo",width:"10%"},{data:"address",width:"15%"},{data:"orderType",width:"5%"},{data:"orderId",width:"15%"},{data:"exception",width:"5%"},{data:"indate",width:"10%"},{data:null,width:"10%"}],columnDefs:[{targets:6,visible:!0,render:function(data,type,row,meta){return 0==data?'<i class="text-success">成功</i>':'<i class="text-danger">失败</i>'}},{targets:9,visible:!0,render:function(data,type,row,meta){return moment(data).format("YYYY-MM-DD hh:mm:ss")}},{targets:10,visible:!0,render:function(data,type,row,meta){return""}}]}),$scope.typeClick=function(e,n,i){if(i==$scope.filterBarModel.itemTypeId)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.itemTypeId=i,$scope.filterBarModel.itemTypeName=n},$scope.stateClick=function(e,n,i){if(i==$scope.filterBarModel.orderTypeId)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.orderTypeId=i,$scope.filterBarModel.orderTypeName=n},$scope.$table.on("click",".btn-retry",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();swal({html:"确认重新发货?",type:"warning",confirmButtonText:"确定",showCancelButton:!0,cancelButtonText:"取消"}).then(function(){appApi.sendReCallOrder(data,function(data){console.log(data),Query()})}).catch(swal.noop)}),$scope.Query=function(){Param(),console.log($scope.QueryParam),Query()},$(document).on("click",".daterangepicker .btn-unrestricted",function(){$scope.picker.hide(),$(".filter-bar").find(".date-range-picker").val("不限时间"),$scope.QueryDate=0})}}});