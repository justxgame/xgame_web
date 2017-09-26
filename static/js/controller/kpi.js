/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-09-26 22:24
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","text!tpl/kpi.html","require","nprogress"],function(angular,tpl,require,NProgress){return{controller:function($scope,appApi,dataFormat){function Query(id){appApi.kpiGetData(id,function(data){console.log(data),$scope.kpiData=data})}NProgress.done(),$scope.filterBarModel={},appApi.kpiGetNav(function(data){$scope.allType=data,$scope.filterBarModel.navName=data[0].navName,$scope.filterBarModel.kpiMetaModelList=data[0].kpiMetaModelList,$scope.filterBarModel.kpiName=data[0].kpiMetaModelList[0].kpiName,$scope.filterBarModel.kpiId=data[0].kpiMetaModelList[0].kpiId,console.log(data)}),$scope.navClick=function(e,n,l){$scope.filterBarModel.navName=n,$scope.filterBarModel.kpiMetaModelList=l,$scope.filterBarModel.kpiName=l[0].kpiName,$scope.filterBarModel.kpiId=l[0].kpiId},$scope.kpiClick=function(e,n,i){$scope.filterBarModel.kpiName=n,$scope.filterBarModel.kpiId=i},$scope.Query=function(){Query($scope.filterBarModel.kpiId)}}}});