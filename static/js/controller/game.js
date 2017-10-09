/*-----------------------
 * Site:  Kingnet - ./ - controller
 * Author: Clearlove 7*
 * Updated: 2017-10-09 16:01
 * Version: 1.0.0
 * -----------------------*/
"use strict";define(["angular","require","nprogress","sweetalert"],function(angular,require,NProgress,swal){return{controller:function($scope,appApi){function Query(){appApi.getGameSetting($scope.filterBarModel.serverId,function(data){console.log(data),$scope.dt.fnClearTable(),0!=data.length&&$scope.dt.fnAddData(data)})}NProgress.done(),$scope.filterBarModel={},$scope.serverBox=[],$scope.$table=$(".game-table"),$scope.$modal=$(".game-modal"),$scope.QueryParam={},$scope.formModel={},appApi.getGameServerInfo(function(data){$scope.serverBox=data,$scope.filterBarModel.serverName=data[0].serverName,$scope.filterBarModel.serverId=data[0].serverId,console.log($scope.filterBarModel),Query()}),$scope.drapListSearch=function(name){return void 0==$scope.inputKey||""==$scope.inputKey||name.indexOf($scope.inputKey)>-1},$scope.serverClick=function(e,n,i){if(i==$scope.filterBarModel.serverId)return e.stopPropagation(),void e.preventDefault();$scope.filterBarModel.serverId=i,$scope.filterBarModel.serverName=n,Query()},$scope.dt=$scope.$table.dataTable({fixedColumns:{leftColumns:2},scrollX:!0,buttons:{buttons:[{extend:"copyHtml5",className:"btn-success btn-sm"},{extend:"excelHtml5",title:"游戏信息表",className:"btn-success btn-sm"},{extend:"csvHtml5",className:"btn-success btn-sm"}]},columns:[{data:null},{data:"id"},{data:"match_item_type"},{data:"game_type"},{data:"name"},{data:"match_mode"},{data:"min_start_player_num"},{data:"max_start_player_num"},{data:"can_int_min_coin"},{data:"can_in_max_coin"},{data:"table_cost"},{data:"max_point"},{data:"init_base"},{data:"base_increase_second"},{data:"base_times"},{data:"sign_cost"},{data:"icon_id"},{data:"winner_rewards"},{data:"init_start_scores"},{data:"remain_player_num"},{data:"second_round_player_number"},{data:"phase2_game_rounds"},{data:"early_show_hour"},{data:"early_exam_minute"},{data:"date_mon_day"},{data:"date_week_day"},{data:"date_day_hour"},{data:"date_hour_minute"},{data:"allow_late_minutes"},{data:"open_flag"}],columnDefs:[{targets:0,visible:!0,render:function(data,type,row,meta){return'<button class="btn btn-info btn-edit">编辑</button>'}}]}),console.log($.fn.dataTable.FixedColumns),$scope.addGame=function(e){$scope.title="新增",$scope.$modal.modal("show"),$scope.formModel.id=9999},$scope.$table.on("click",".btn-edit",function(e){var data=$scope.dt.api(!0).row($(this).parents("tr")).data();$scope.formModel=$.extend(!0,{},data),console.log($scope.formModel),$scope.title="编辑",$scope.$digest(),$scope.$modal.modal("show")}),$scope.submitForm=function(e){return $scope.success?($scope.$modal.modal("hide"),!1):($scope.modalForm.$submitted=!0,$scope.modalForm.$valid?void appApi.setGameServerInfo($scope.formModel,function(data){console.log(data),$scope.btnText="关闭",$(".submit-success").css("visibility","visible"),$scope.success=!0,Query(),setTimeout(function(){$scope.$modal.modal("hide")},1e3)}):(e.stopPropagation(),e.preventDefault(),!1))},$scope.$modal.on("shown.bs.modal",function(){$scope.$modal.find(".game-form-wrapper").perfectScrollbar({suppressScrollX:!0})}),$scope.$modal.on("hidden.bs.modal",function(){$scope.success=!1,$scope.formModel={},$(".submit-success").css("visibility","hidden"),$scope.modalForm.$submitted=!1,$scope.modalForm.$setUntouched()})}}});