/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-10-09 22:00
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert"],function(angular,require,NProgress,swal){return{controller:function($scope,appApi){function Query(name){appApi.kpiGetData(name,function(data){$scope.kpiData[name]=data,setTable(name,data)})}function initTable(item){$scope.tableList[item.name]=$("."+item.cless).dataTable({order:[],buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:item.table+"表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:item.columns,columnDefs:[]})}function setTable(name,data){$scope.tableList[name].fnClearTable(),0!=data.length&&$scope.tableList[name].fnAddData(data)}NProgress.done(),$scope.kpiData={},$scope.tableList={},$scope.kpiList=[{cless:"active-table",name:"getActive",table:"日活",columns:[{name:"日期",data:"date"},{name:"服务器ID",data:"server_id"},{name:"DAU",data:"dau"}]},{cless:"new-active-table",name:"getNewActive",table:"新用户",columns:[{name:"日期",data:"date"},{name:"服务器ID",data:"server_id"},{name:"新用户数",data:"active_num"}]},{cless:"pay-table",name:"getPay",table:"支付金额",columns:[{name:"日期",data:"date"},{name:"服务器ID",data:"server_id"},{name:"支付金额",data:"pay"}]},{cless:"pay-number-table",name:"getPayNumber",table:"支付人数",columns:[{name:"日期",data:"date"},{name:"服务器ID",data:"server_id"},{name:"支付人数",data:"pay_number"}]},{cless:"retention-table",name:"getRetention",table:"留存",columns:[{name:"日期",data:"date"},{name:"服务器ID",data:"server_id"},{name:"1日留存",data:"day_1"},{name:"2日留存",data:"day_2"},{name:"3日留存",data:"day_3"},{name:"4日留存",data:"day_4"},{name:"5日留存",data:"day_5"},{name:"6日留存",data:"day_6"},{name:"7日留存",data:"day_7"}]}],$scope.Query=function(){Query($scope.filterBarModel.kpiId)},$scope.listFinish=function(){$scope.kpiList.forEach(function(item,index){initTable(item),Query(item.name)})}}}});