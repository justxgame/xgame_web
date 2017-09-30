/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-09-30 10:51
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert"],function(angular,require,NProgress,swal){return{controller:function($scope,appApi,dataFormat){function getfilterData(id){var tmp;return $scope.filterModel.forEach(function(item,index){item.id==id&&(tmp=$.extend(!0,{},item),$scope.formModel=$.extend(!0,{},item))}),initFormModel(),console.log(),tmp}function initFormModel(){$scope.formModel.items.forEach(function(item,index){item.conditions=[],1==index&&item.conditions.push({id:3,display:"近14天",val:"last14D"})})}NProgress.done(),$scope.filterBarModel={name:"项目1",id:1},$scope.projectList=[{name:"项目1",id:1},{name:"项目2",id:2}],$scope.drapListSearch=function(name){return void 0==$scope.inputKey||""==$scope.inputKey||name.indexOf($scope.inputKey)>-1},$scope.itemClick=function(e,n,i){if(i==$scope.filterBarModel.id)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.id=i,$scope.filterBarModel.name=n,$scope.filterData=getfilterData($scope.filterBarModel.id)},$scope.filterModel=[{id:1,name:"项目1",items:[{itemId:10001,itemkey:"queryInfo",itemName:"查询信息",type:"checkbox",conditions:[{id:0,display:"全选",val:"all"},{id:1,display:"手机号码",val:"mobile"},{id:2,display:"uid",val:"uid"},{id:3,display:"苹果设备号",val:"iosId"},{id:4,display:"安卓设备号",val:"androidId"}]},{itemId:10002,itemkey:"loginDate",itemName:"登录时间",type:"radio",conditions:[{id:1,display:"近3天",val:"last3D"},{id:2,display:"近7天",val:"last7D"},{id:3,display:"近14天",val:"last14D"},{id:4,display:"近30天",val:"last30D"}]},{itemId:10003,itemkey:"loginTimes",itemName:"登录频率",type:"checkboxInput",conditions:[{id:1,display:"不限",val:null},{id:2,display:"1次/周",val:"1Week"},{id:3,display:"2-10次/周",val:"2-10Week"},{id:4,display:"10-50次/周",val:"10-50Week"},{id:5,display:">50次/周",val:">50Week"}]},{itemId:10004,itemkey:"payDate",itemName:"付费时间",type:"radioDate",conditions:[{id:1,display:"近3天",val:"last3D"},{id:2,display:"近7天",val:"last7D"},{id:3,display:"近14天",val:"last14D"},{id:4,display:"近30天",val:"last30D"}]},{itemId:10005,itemkey:"province",itemName:"省份",type:"select",conditions:[{id:1,display:"北京",val:"beijing"},{id:2,display:"上海",val:"shanghai"},{id:3,display:"广州",val:"guangzhou"},{id:4,display:"天津",val:"tianjin"},{id:5,display:"内蒙古",val:"neimenggu"},{id:6,display:"黑龙江",val:"heilongjiang"},{id:7,display:"江西",val:"jiangxi"}]}]},{id:2,name:"项目2",items:[{itemId:10001,itemkey:"queryInfo",itemName:"查询信息",type:"checkbox",conditions:[{id:0,display:"全选",val:"all"},{id:1,display:"手机号码",val:"mobile"},{id:2,display:"uid",val:"uid"},{id:3,display:"苹果设备号",val:"iosId"},{id:4,display:"安卓设备号",val:"androidId"}]},{itemId:10002,itemkey:"loginDate",itemName:"登录时间",type:"radio",conditions:[{id:1,display:"近3天",val:"last3D"},{id:2,display:"近7天",val:"last7D"},{id:3,display:"近14天",val:"last14D"},{id:4,display:"近30天",val:"last30D"}]},{itemId:10003,itemkey:"loginTimes",itemName:"登录频率",type:"checkboxInput",conditions:[{id:1,display:"不限",val:null},{id:2,display:"1次/周",val:"1Week"},{id:3,display:"2-10次/周",val:"2-10Week"},{id:4,display:"10-50次/周",val:"10-50Week"},{id:5,display:">50次/周",val:">50Week"}]},{itemId:10004,itemkey:"payDate",itemName:"付费时间",type:"radioDate",conditions:[{id:1,display:"近3天",val:"last3D"},{id:2,display:"近7天",val:"last7D"},{id:3,display:"近14天",val:"last14D"},{id:4,display:"近30天",val:"last30D"}]}]}],$scope.formModel={},$scope.filterData=getfilterData($scope.filterBarModel.id),console.log($scope.filterData),$scope.Query=function(){console.log($scope.formModel)}},tpl:tpl}});