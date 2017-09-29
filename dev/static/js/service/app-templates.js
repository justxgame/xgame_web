define(['angular'], function(angular) {
try {
  var module = angular.module('app.template');
} catch (e) {
  var module = angular.module('app.template', []);
};
angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('console.html',
    '<div class="module-wrapper server"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>日志统计</h2></div><div class="x_content"><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">服务器选择</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.serverName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索服务器"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-show="drapListSearch(item.serverName)" ng-class="{\'active\':filterBarModel.serverId===item.serverId}"></li></ul></div></div></div></div><div class="pull-right form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"></div></div><table class="table table-striped table-hover table-bordered console-table"><thead><tr><th>时间</th><th>操作内容</th><th>修改内容</th></tr></thead><tbody></tbody></table></div></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('delivery.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>发货管理</h2></div><div class="x_content"><!--filter-bar--><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">货物类别</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.itemTypeName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索货物类别"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in filterBarData.itemTypeBoxModel.itemTypeModelList" ng-bind="item.itemTypeName" ng-click="typeClick($event,item.itemTypeName,item.itemTypeId)" ng-show="drapListSearch(item.itemTypeName)" ng-class="{\'active\':filterBarModel.itemTypeId===item.itemTypeId}"></li></ul></div></div></div></div><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">状态</div><div class="channel-drapdown dropdown form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.orderTypeName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><ul class="dropdown-menu animated fadeInUpSmall fast" role="menu"><li role="presentation" ng-repeat="item in filterBarData.orderTypeBoxModel.orderTypeModelList" ng-bind="item.orderTypeName" ng-click="stateClick($event,item.orderTypeName,item.orderTypeId)" ng-class="{\'active\':filterBarModel.orderTypeId===item.orderTypeId}"></li></ul></div></div><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">日期范围</div><div class="form-content has-daterangepicker"><date-range-picker class="md" model="QueryDate" picker="picker"></date-range-picker></div></div><div class="form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Query($event)"><span>查询</span> <i class="icon-loading"></i></button></div></div><!--datatable--><table class="table table-striped table-hover table-bordered delivery-data"><thead><tr><th>uid</th><th>服务单号</th><th>货物类别</th><th>数量</th><th>手机号</th><th>地址</th><th>状态</th><th>供货商单号</th><th>异常原因</th><th>订单时间</th><th>操作</th></tr></thead><tbody></tbody></table></div></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('demo.html',
    '<div class="module-wrapper demo"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>DEMO</h2></div><div class="x_content"><div class="filter-bar form-line clearfix"><div class="form-item only col-md-3 col-sm-12 col-xs-12"><div class="form-tag">项目</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.name"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索项目"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in filterModel" ng-bind="item.name" ng-click="itemClick($event,item.name,item.id)" ng-show="drapListSearch(item.name)" ng-class="{\'active\':filterBarModel.id===item.id}"></li></ul></div></div></div></div></div><div class="fliter-bar-wrapper" ng-repeat="item in filterData.items" ng-init="itemIndex = $index"><flt-checkbox ng-if="item.type==\'checkbox\'" model="formModel.items[itemIndex]" data="item"></flt-checkbox><flt-radio ng-if="item.type==\'radio\'" model="formModel.items[itemIndex]" data="item"></flt-radio><flt-checkbox-input ng-if="item.type==\'checkboxInput\'" model="formModel.items[itemIndex]" data="item"></flt-checkbox-input><flt-radio-date ng-if="item.type==\'radioDate\'" model="formModel.items[itemIndex]" data="item"></flt-radio-date><flt-select ng-if="item.type==\'select\'" model="formModel.items[itemIndex]" data="item"></flt-select></div><div class="filter-bar form-line clearfix"><div class="form-item col-md-2 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Query($event)"><span>查询</span> <i class="icon-loading"></i></button></div></div></div></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('game.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>游戏管理</h2></div><div class="x_content"><!--filter-bar--><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">服务器选择</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.serverName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索服务器"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-show="drapListSearch(item.serverName)" ng-class="{\'active\':filterBarModel.serverId===item.serverId}"></li></ul></div></div></div></div><div class="pull-right form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="addGame($event)"><span>新增游戏配置</span> <i class="icon-loading"></i></button></div></div><!--datatable--><table class="table table-striped table-hover table-bordered game-table"><thead><tr><th>操作</th><th>编号</th><th>奖品大类型</th><th>比赛类别</th><th>比赛名称</th><th>比赛类型</th><th>最少开赛人数</th><th>最多开赛人数</th><th>金币场最低入门数量</th><th>金币场门槛最高</th><th>房费</th><!--10--><th>封顶分</th><th>初始底分</th><th>底分增长间隔时间</th><th>默认倍数</th><th>报名消耗物品id和数量</th><th>对应图标显示</th><th>奖励获取的最后为名次</th><th>初始开始分</th><th>开始淘汰的剩余人数</th><th>进入淘汰赛的人数</th><!--20--><th>淘汰赛进行的局数</th><th>定时赛开始的每个月的日期</th><th>比赛提前显示小时</th><th>比赛提前报名分钟</th><th>定时赛开始的每周几</th><th>定时赛开启的小时</th><th>定时赛开始的分钟</th><th>定时赛允许迟到的秒数</th><th>开放标志</th><!--29--></tr></thead><tbody></tbody></table></div></div></div></div></div><div class="modal fade custom-modal game-modal form-modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title text-center" id="myModalLabel"><span class="pull-left">{{title}}游戏配置</span></h4></div><div class="modal-body"><div class="body-container" ng-class="{\'success overflow\':success}"><div class="submit-success transition-05"><div class="center"><p class="icon"><i class="icon">&#xe60c;</i></p><p class="text">提交成功</p></div></div><form role="form" name="modalForm" class="clearfix transition-05" novalidate><div class="game-form-wrapper"><div class="form-line pull-left"><div class="form-tag">奖品大类型</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.match_item_type" valid="true" required="required" focus="focus" name="match_item_type"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">比赛类别</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.game_type" valid="true" required="required" focus="focus" name="game_type"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">比赛名称</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.name" valid="true" required="required" focus="focus" name="name"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">比赛类型</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.match_mode" valid="true" required="required" focus="focus" name="match_mode"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">最少开赛人数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.min_start_player_num" valid="true" required="required" focus="focus" name="min_start_player_num"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">最多开赛人数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.max_start_player_num" valid="true" required="required" focus="focus" name="max_start_player_num"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">金币场最低入门数量</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.can_int_min_coin" valid="true" required="required" focus="focus" name="can_int_min_coin"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">金币场门槛最高</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.can_in_max_coin" valid="true" required="required" focus="focus" name="can_in_max_coin"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">房费</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.table_cost" valid="true" required="required" focus="focus" name="table_cost"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">封顶分</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.max_point" valid="true" required="required" focus="focus" name="max_point"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">初始底分</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.init_base" valid="true" required="required" focus="focus" name="init_base"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">底分增长间隔时间</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.base_increase_second" valid="true" required="required" focus="focus" name="base_increase_second"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">默认倍数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.base_times" valid="true" required="required" focus="focus" name="base_times"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">报名消耗物品id和数量</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.sign_cost" valid="true" required="required" focus="focus" name="sign_cost"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">对应图标显示</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.icon_id" valid="true" required="required" focus="focus" name="icon_id"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">奖励获取的最后为名次</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.winner_rewards" valid="true" required="required" focus="focus" name="winner_rewards"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">初始开始分</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.init_start_scores" valid="true" required="required" focus="focus" name="init_start_scores"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">开始淘汰的剩余人数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.remain_player_num" valid="true" required="required" focus="focus" name="remain_player_num"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">进入淘汰赛的人数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.second_round_player_number" valid="true" required="required" focus="focus" name="second_round_player_number"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">淘汰赛进行的局数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.phase2_game_rounds" valid="true" required="required" focus="focus" name="phase2_game_rounds"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">比赛提前显示小时</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.early_show_hour" valid="true" required="required" focus="focus" name="early_show_hour"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">比赛提前报名分钟</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.early_exam_minute" valid="true" required="required" focus="focus" name="early_exam_minute"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">定时赛开始的每个月的日期</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.date_mon_day" valid="true" required="required" focus="focus" name="date_mon_day"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">定时赛开始的每周几</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.date_week_day" valid="true" required="required" focus="focus" name="date_week_day"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">定时赛开启的小时</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.date_day_hour" valid="true" required="required" focus="focus" name="date_day_hour"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">定时赛开始的分钟</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.date_hour_minute" valid="true" required="required" focus="focus" name="date_hour_minute"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">定时赛允许迟到的秒数</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.allow_late_minutes" valid="true" required="required" focus="focus" name="allow_late_minutes"></ng-input></div></div><div class="form-line pull-left last"><div class="form-tag">开放标志</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.open_flag" valid="true" required="required" focus="focus" name="open_flag"></ng-input></div></div></div></form></div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-submit" ng-click="submitForm($event)" ng-bind="success?\'关闭\':\'提交\'"></button></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('inform.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>广播管理</h2></div><div class="x_content"><!--filter-bar--><div class="filter-bar form-line clearfix"><!--<div class="form-item col-md-3 col-sm-12 col-xs-12">\n' +
    '							<div class="form-tag">广播类型</div>\n' +
    '							<div class="channel-drapdown dropdown form-content transition-02">\n' +
    '								<a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">\n' +
    '									<span class="val pull-left" ng-bind="filterBarModel.serverName"></span>\n' +
    '									<div class="pull-right">\n' +
    '										<span class="caret icon-arrow"></span>\n' +
    '									</div>\n' +
    '								</a>\n' +
    '								<ul class="dropdown-menu animated fadeInUpSmall fast" role="menu">\n' +
    '									<li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-class="{\'active\':filterBarModel.serverId===item.serverId}"></li>\n' +
    '								</ul>\n' +
    '							</div>\n' +
    '						</div>--><div class="form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Send($event)"><span>发送</span> <i class="icon-loading"></i></button></div></div><!--datatable--><table class="table table-striped table-hover table-bordered inform-data"><thead><tr><th>广播内容</th><th>广播类型</th><th>发送时间</th><th>发送人</th><!--<th>操作</th>--></tr></thead><tbody></tbody></table></div></div></div></div></div><div class="modal fade custom-modal inform-modal form-modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title text-center" id="myModalLabel"><span class="pull-left">发送广播</span></h4></div><div class="modal-body"><div class="body-container" ng-class="{\'success overflow\':success}"><div class="submit-success transition-05"><div class="center"><p class="icon"><i class="icon">&#xe60c;</i></p><p class="text">提交成功</p></div></div><form role="form" name="modalForm" class="clearfix transition-05" novalidate><div class="form-line pull-left"><div class="form-tag">服务器</div><div class="dropdown form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="formModel.serverName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><ul class="dropdown-menu animated fadeInUpSmall fast" role="menu"><li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-class="{\'active\':formModel.serverId===item.serverId}"></li></ul></div></div><div class="form-line pull-left has-textarea"><div class="form-tag">信息</div><div class="form-input"><div class="textarea-wrapper"><textarea name="message" ng-model="formModel.message" placeholder="请输入广播内容..." required></textarea><span class="error-lable" ng-show="(modalForm.message.$error.required&&modalForm.message.$touched)||(modalForm.message.$error.required&&modalForm.$submitted)">广播内容不可为空</span></div></div></div></form></div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-submit" ng-click="submitForm($event)" ng-bind="success?\'关闭\':\'提交\'"></button></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('kpi.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>数据统计</h2></div><div class="x_content"><!--filter-bar--><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">统计类型</div><div class="channel-drapdown dropdown form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.navName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><ul class="dropdown-menu animated fadeInUpSmall fast" role="menu"><li role="presentation" ng-repeat="item in allType" ng-bind="item.navName" ng-click="navClick($event,item.navName,item.kpiMetaModelList)" ng-class="{\'active\':filterBarModel.navName===item.navName}"></li></ul></div></div><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">统计选项</div><div class="channel-drapdown dropdown form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.kpiName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><ul class="dropdown-menu animated fadeInUpSmall fast" role="menu"><li role="presentation" ng-repeat="item in filterBarModel.kpiMetaModelList" ng-bind="item.kpiName" ng-click="kpiClick($event,item.kpiName,item.kpiId)" ng-class="{\'active\':filterBarModel.kpiId===item.kpiId}"></li></ul></div></div><div class="form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Query($event)"><span>查询</span> <i class="icon-loading"></i></button></div></div><!--datatable--><table class="table table-striped table-hover table-bordered kpi-data"><thead><tr><th>渠道名称</th><th>应用名称</th><th>已复用应用数</th><th>操作</th></tr></thead><tbody></tbody></table></div></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('player.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>玩家管理</h2></div><div class="x_content"><!--filter-bar--><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">服务器选择</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.serverName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索服务器"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-show="drapListSearch(item.serverName)" ng-class="{\'active\':filterBarModel.serverId===item.serverId}"></li></ul></div></div></div></div><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">玩家搜索</div><div class="form-input transition-02"><ng-input class="md" type="number" placeholder="请输入uid..." model="filterBarModel.userId" valid="true"></ng-input></div></div><!--<div class="form-item col-md-3 col-sm-12 col-xs-12">\n' +
    '							<div class="form-tag">角色名</div>\n' +
    '							<div class="form-input transition-02">\n' +
    '								<ng-input class="md" placeholder="请输入角色名..." model="filterBarModel.userName"  focus="focus"></ng-input>\n' +
    '							</div>\n' +
    '						</div>--><div class="form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Query($event)"><span>查询</span> <i class="icon-loading"></i></button> <span class="error-msg">{{errorMsg}}</span></div></div><!--datatable--><table class="table table-striped table-hover table-bordered player-table"><thead><tr><th>pid</th><th>用户名</th><th>金币</th><th>钻石</th><th>门票</th><th>优惠券</th><th>操作</th></tr></thead><tbody></tbody></table></div></div></div></div></div><div class="modal fade custom-modal palery-modal form-modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title text-center" id="myModalLabel"><span class="pull-left">{{title}}</span></h4></div><div class="modal-body"><div class="body-container" ng-class="{\'success overflow\':success}"><div class="submit-success transition-05"><div class="center"><p class="icon"><i class="icon">&#xe60c;</i></p><p class="text">提交成功</p></div></div><form role="form" name="modalForm" class="clearfix transition-05" novalidate><div class="form-line pull-left" ng-if="formModel.actionId==4"><div class="form-tag">玩家名称</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.userName" valid="true" required="required" focus="focus" name="name"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">金币</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.coins" valid="true" required="required" focus="focus" name="money"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">钻石</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.diamond" valid="true" required="required" focus="focus" name="coins"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">门票</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.ticket" valid="true" required="required" focus="focus" name="ticket"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">优惠券</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.counpon" valid="true" required="required" focus="focus" name="points"></ng-input></div></div></form></div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-submit" ng-click="submitForm($event)" ng-bind="success?\'关闭\':\'提交\'"></button></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('server.html',
    '<div class="module-wrapper server"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>服务器管理</h2></div><div class="x_content"><div class="filter-bar form-line clearfix"><div class="form-item col-md-3 col-sm-12 col-xs-12"><div class="form-tag">服务器选择</div><div class="channel-drapdown dropdown select form-content transition-02"><a href="#" class="dropdown-toggle clearfix" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"><span class="val pull-left" ng-bind="filterBarModel.serverName"></span><div class="pull-right"><span class="caret icon-arrow"></span></div></a><div class="dropdown-menu search animated fadeInUpSmall fast" role="menu"><ng-input class="sm" icon-left="&#xe623;" model="inputKey" type="text" placeholder="搜索服务器"></ng-input><div class="dropdown-list clearfix"><ul class="clearfix"><li role="presentation" ng-repeat="item in serverBox" ng-bind="item.serverName" ng-click="serverClick($event,item.serverName,item.serverId)" ng-show="drapListSearch(item.serverName)" ng-class="{\'active\':filterBarModel.serverId===item.serverId}"></li></ul></div></div></div></div><div class="pull-right form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><!--<button type="submit" class="btn btn-success btn-query" ng-click="addServer($event)">\n' +
    '								<span>新增服务器</span>\n' +
    '								<i class="icon-loading"></i>\n' +
    '							</button>--></div></div><table class="table table-striped table-hover table-bordered server-table"><thead><tr><th>服务器名称</th><th>ip:port</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div></div></div></div></div><div class="modal fade custom-modal server-modal form-modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title text-center" id="myModalLabel"><span class="pull-left">{{title}}服务器</span></h4></div><div class="modal-body"><div class="body-container" ng-class="{\'success overflow\':success}"><div class="submit-success transition-05"><div class="center"><p class="icon"><i class="icon">&#xe60c;</i></p><p class="text">提交成功</p></div></div><form role="form" name="modalForm" class="clearfix transition-05" novalidate><div class="form-line pull-left"><div class="form-tag">服务器名称</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.serverName" valid="true" required="required" focus="focus" name="serverName"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">服务器ID</div><div class="form-input"><ng-input class="sm" type="number" placeholder="请输入..." form="modalForm" model="formModel.serverId" valid="true" required="required" focus="focus" name="serverId"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">ipPort</div><div class="form-input"><ng-input class="sm" placeholder="请输入..." form="modalForm" model="formModel.ipPort" valid="true" required="required" focus="focus" name="ipPort"></ng-input></div></div><div class="form-line pull-left"><div class="form-tag">gmPort</div><div class="form-input"><ng-input class="sm" type="number" placeholder="请输入..." form="modalForm" model="formModel.gmPort" valid="true" required="required" focus="focus" name="gmPort"></ng-input></div></div></form></div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-submit" ng-click="submitForm($event)" ng-bind="success?\'关闭\':\'提交\'"></button></div></div></div></div>');
}]);

angular.module('app.template').run(['$templateCache', function($templateCache) {
  $templateCache.put('user.html',
    '<div class="module-wrapper"><div class="row"><div class="col-xs-12"><div class="x_panel"><div class="x_title"><h2>系统人员配置</h2></div><div class="x_content"><div class="filter-bar form-line clearfix"><div class="form-item btn-wrap clearfix col-md-3 col-sm-12 col-xs-12"><button type="submit" class="btn btn-success btn-query" ng-click="Query($event)"><span>新增系统人员</span> <i class="icon-loading"></i></button></div></div><table class="table table-striped table-hover table-bordered user-table"><thead><tr><th>账号</th><th>姓名</th><th>角色</th><th>最后登录时间</th><th>最后登录ip</th><th>操作</th></tr></thead><tbody></tbody></table></div></div></div></div></div>');
}]);

})