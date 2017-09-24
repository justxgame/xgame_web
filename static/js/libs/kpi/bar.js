/*
	整合折线图
*/
define(['angular', 'require','local','echarts'],function(angular, require,local,echarts){
	
	/*获取线图 需要的参数*/
	var getbar =  function getbar(data,param){
			var cfg = param['cfg'];
			var type = param['type'];
			var selectDim = param['selectDim'];

			//var dim = cfg.charttype[type];
			//var adduser = cfg.adduser;
			//var title = cfg.title;
			//var remarks = cfg.remarks;
			var index = cfg.showIndex;
			var chart_dim = cfg.charttype[type];//该图形下面支持的维度
			//var chart_index_arr = new Object();//指标
			var legend = {};


			//获取指标 legend['data']
			var legendArr = getlinelegend(index,chart_dim);
			legend['data'] = legendArr['legend_data']; 
			chart_index_arr = legendArr['chart_index_arr']; 

			
			
			//var xAxis = [];
			//var xData = new Object();
			
			var xDataArr = getFormatChart(data,selectDim);
			var xData = xDataArr['xData'];
			var xAxis = xDataArr['xAxis'];
			var series = getResultData(chart_index_arr,xData,type,index);

			return getbarchart(legend['data'],xAxis,series);
	}
	
	/*获取参数 legend_data  和 指标*/
	var getlinelegend = function(index,chart_dim){
			var chart_index_arr = new Object();//指标
			var legend_data = new Array();
			var data = new Array();
			var i = 0;

			$.each(index,function(key,val){
				if(!chart_dim[key]){
					chart_index_arr[key] = val.name;
					legend_data.push(val.name); 
					i++;
				}
			});
			data['legend_data'] = legend_data;
			data['chart_index_arr'] = chart_index_arr;
			return data;
	}

	/*格式化参数*/
	var getFormatChart = function(data,selectDim){
		var result = new Array();
		var xAxis = [];
		var xData = new Object();
		var xDataI =0;

		$.each(data,function(key,val){
				xData[val[selectDim]] = val;
				xAxis[xDataI] = val[selectDim];
				xDataI++;

		});
		result['xAxis'] = xAxis;
		result['xData'] = xData;
		return result;
	}

	/*格式数据结果集*/
	var getResultData = function(chart_index_arr,xData,type,index){
		var j = 0;
		var series = [];
		console.log(chart_index_arr,xData,type);
		$.each(chart_index_arr,function(k,v){
			var seriesdata = [];
			var series_data = new Object;
			var i=0;
			var decomal = index[k].decomal; 
			series_data['name'] = v;
			series_data['type'] = type;	
			$.each(xData,function(xDataKey,xDataVal){
					if(decomal > 0 ){
						var num = xDataVal[k] > 0 ? new Number(xDataVal[k]) : 0;
						seriesdata[i] = num.toFixed(decomal);
					}else{
						seriesdata[i] = xDataVal[k] > 0 ? xDataVal[k] : 0 ; ;
					}
					i++;
			});	

			series_data['data'] = seriesdata;
			series[j]=series_data;
			j++;
			
		});
		return series;
	}
	
	/*最终结果集*/
	var getbarchart = function (legend,xAxis,series) { 
			return option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						top:'20',
						data:legend
					},
					grid: {
						left: '40',
						right: '40',
						bottom: '20',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: xAxis
					},
					yAxis: {
						type: 'value'
					},
					series: series
				};
		} 
		return getbar;
});


