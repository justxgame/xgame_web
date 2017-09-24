define(['angular', 'require','local','echarts','kpiLine','kpiBar','kpiTable','paginator','echarts-themes'],function(angular, require,local,echarts,line,getbar,gettable){
	var  showChart = function(option,chartId){
		var myChart = echarts.init(document.getElementById(chartId),'fresh');
		 myChart.setOption(option);
	}

	var getSetTimeOut = function(classid,chartId,html){
		 document.getElementById(chartId).innerHTML=html;
		 $("#"+chartId).find('.'+classid).perfectScrollbar();
	}

	return getChartData =  function getChartData(data,cfg,type,selectDim,chartId){
			chartId = chartId ? chartId :'mydiv';
			var param = new Array();
			if( typeof cfg.showIndex =='undefined'){
				cfg.showIndex = cfg.index;
			}
			param['cfg'] = cfg;
			param['type'] = type;
			param['selectDim'] = selectDim;
			param['column_select_sort'] = cfg.column_select_sort;
			param['column_select_field'] = cfg.column_select_field;
			//console.log(param);
			if(type == 'line'){
				var option = line(data,param);
				showChart(option,chartId);
			}else if(type == 'table'){
				var html = gettable.one(data,param);
				if(document.getElementById(chartId)){
					document.getElementById(chartId).innerHTML=html;
					$("#"+chartId).find('.table-data-wrapper').perfectScrollbar();
				}else{//防止ID 不存在
					//setTimeout('getSetTimeOut("table-data-wrapper","'+chartId+'","'+html+'")',5000);
				}
				
			}else if(type == 'tableTwo'){
				var html = gettable.two(data,param);
				if(document.getElementById(chartId)){
					document.getElementById(chartId).innerHTML=html;				
					$("#"+chartId).find('.table-wrapper').perfectScrollbar();
				}else{//防止ID 不存在
					setTimeout('getSetTimeOut("table-wrapper","'+chartId+'","'+html+'")',5000);
					/*
					document.getElementById(chartId).innerHTML=html;				
					$("#"+chartId).find('.table-wrapper').perfectScrollbar();
					*/
				}
			}else if(type == 'bar'){
				var option = getbar(data,param);
				showChart(option,chartId);

			}else{
				var html = gettable.one(data,param);	
				document.getElementById(chartId).innerHTML=html;
				$("#"+chartId).find('.table-data-wrapper').perfectScrollbar()

			}
			
			return false;
	} 
});


