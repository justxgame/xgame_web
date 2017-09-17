/*
	整合显示表格
*/
define(['angular', 'require','local'],function(angular, require,local){
	
	/*获取线图 需要的参数*/
	var gettable =  function gettable(data,param){
			var cfg = param['cfg'];
			var type = param['type'];
			var selectDim = param['selectDim'];
			var index = cfg.showIndex;

			var column_select_field = param['column_select_field'];
			var column_select_sort = param['column_select_sort'];
			console.log(data.length);
			if(data.length<1){
				return "<div class='no-result' style='line-height:50px;'>暂无结果</div>";
			}

			var html = "<div class='table-data-wrapper'><table class='default-table' >";
			html += "	<thead >";
	/*		
			$.each(index,function(k,v){
				html +="<td >"+ v.name+"</td>"
			});
	*/
			$.each(data,function(dataKey,dataVal){
				if(dataKey == 0){
					$.each(dataVal,function(key,val){


						var sort = 'desc';
						var select_class = '';
						if(column_select_field == key){
							if(column_select_sort == 'desc'){
								sort = "asc";
							}else{
								sort = "desc";
							}
							select_class = "active " +column_select_sort;
						}
						html +="<td class='title "+ select_class +"' field="+key+" sort='"+sort+"'>"+ index[key]['name']+"<i class='sort-icon'><em class='up'></em><em class='down'></em></i></td>"
					});
				}				
			});




			html += "	</thead >";
			html +="<tbody>";
			/*
			$.each(data,function(dataKey,dataVal){
				$.each(index,function(k,v){
					if(v.is_dim ||  typeof v.decomal ==  "undefined"){
						html +="<td >"+ dataVal[k]+"</td>"
					}else{
						var decimals = parseInt(v.decomal);
						if(decimals >=1){
							var valNum = parseFloat(dataVal[k]);//dataVal[k].toFixed(decimals);
							var num = number_format(valNum,decimals);
						}else{
							var valNum = parseInt(dataVal[k]);
							var num = toThousands(valNum);
						}
						html +="<td >"+ num +"</td>"
					}
				});
				html +="</tr>";
			});
			
*/
			$.each(data,function(dataKey,dataVal){
				html +="<tr>";
				$.each(dataVal,function(key,value){
					
					var is_dim = index[key]['is_dim'];
					var decomal = index[key]['decomal'];
					if(is_dim ||  typeof index[key]['decomal'] ==  "undefined"){
						html +="<td >"+ value+"</td>"
					}else{
						var suffix = typeof index[key]['suffix'] != "undefined" ? index[key]['suffix'] : '';
						if(value == null){
							var num = '0';
						}else{
							var decimals = parseInt(decomal);
							if(decimals >=1){
								var valNum = parseFloat(value);//dataVal[k].toFixed(decimals);
								var num = valNum < 0 ? '0' : number_format(valNum,decimals);
							}else{
								var valNum = parseInt(value);
								var num = valNum < 0 ? '0' : toThousands(valNum);
							}
							
						}
						if(num == '0.00'){
							num = 0;
						}
						/*
						if(num == '--'){
							html +="<td >"+ num  +"</td>";
						}else{
							html +="<td >"+ num + suffix +"</td>";
						}*/
						html +="<td >"+ num + suffix +"</td>";
						
					}
				});
				html +="</tr>";
			});



			html +="</tbody></table></div><div class='table-footer clearfix'><ul class='pagination pull-right'></ul></div>";
			return html;
	}
	var gettableTwo =  function gettable(data,param){
			var cfg = param['cfg'];
			var type = param['type'];
			var selectDim = param['selectDim'];
			var column_select_field = param['column_select_field'];
			var column_select_sort = param['column_select_sort'];
   

			var index = cfg.showIndex;
			console.log(data.length);
			if(data.length<1){  
				return "<div class='no-result' style='line-height:500px;line-height:500px'>暂无结果</div>";
			}
			var html = "<div class='table-wrapper' ><div class='scrollbar-wrapper' ><table><thead>";
			/*
			$.each(index,function(k,v){
				html +="<td ><p>"+ v.name+"</p></td>"
			});
			*/
			$.each(data,function(dataKey,dataVal){
				if(dataKey == 0){
					$.each(dataVal,function(key,val){  
						var sort = 'desc';
						var select_class = '';
							
						if(column_select_field == key){
							if(column_select_sort == 'desc'){
								sort = "asc";
							}else{
								sort = "desc";
							}
							select_class = "active " +column_select_sort;
							
						}
						html +="<td class='title "+ select_class +"' field="+key+" sort='"+sort+"'><p >"+ index[key]['name']+"<i class='sort-icon'><em class='up'></em><em class='down'></em></i></p></td>";
					});
				}				
			}); 


			html += "	</thead >";

			html +="<tbody>";
			/*
			$.each(data,function(dataKey,dataVal){
				$.each(index,function(k,v){
					if(v.is_dim ||  typeof v.decomal ==  "undefined"){
						html +="<td >"+ dataVal[k]+"</td>"
					}else{
						var decimals = parseInt(v.decomal);
						if(decimals >=1){
							var valNum = parseFloat(dataVal[k]);
							var num = number_format(valNum,decimals);
						}else{
							var valNum = parseInt(dataVal[k]);
							var num = toThousands(valNum);
						}
						html +="<td >"+ num +"</td>"
					}
					
				});
				html +="</tr>";
			});
			*/
			$.each(data,function(dataKey,dataVal){
				html +="<tr>";
				$.each(dataVal,function(key,value){
					
					var is_dim = index[key]['is_dim'];
					var decomal = index[key]['decomal'];
					if(is_dim ||  typeof index[key]['decomal'] ==  "undefined"){
						html +="<td >"+ value+"</td>"
					}else{
						if(value == null){
							num = '0';
						}else{
							var decimals = parseInt(decomal);
							if(decimals >=1){
								var valNum = parseFloat(value);   //dataVal[k].toFixed(decimals);
								var num = valNum < 0 ? '0' : number_format(valNum,decimals);   
							}else{
								var valNum = parseInt(value);
								var num = valNum < 0 ? '0' :toThousands(valNum);
							}
							
						}
						var suffix = typeof index[key]['suffix'] != "undefined" ? index[key]['suffix'] : '';
						if(num == '0.00'){
							num = 0;
						}
						//if(num == '--'){
						//	html +="<td >"+ num  +"</td>"
						//}else{
							html +="<td >"+ num + suffix +"</td>";
						//}

						//html +="<td >"+ num + suffix +"</td>";
					}
				});
				html +="</tr>";
			});

			html +="</tbody></table></div></div><div class='table-footer'><ul class='pagination pull-right'></ul></div>";
			return html; 
	}  
	
	var number_format = function (s, n) {
  
			n = n > 0 && n <= 20 ? n : 2;   
		   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
		   var l = s.split(".")[0].split("").reverse(),   
		   r = s.split(".")[1];   
		   t = "";   
		   for(i = 0; i < l.length; i ++ )   
		   {   
			  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
		   }   
		   return t.split("").reverse().join("") + "." + r;   
	}

	var toThousands = function(num) {
		var num = (num || 0).toString(), result = '';
		while (num.length > 3) {
			result = ',' + num.slice(-3) + result;
			num = num.slice(0, num.length - 3);
		}
		if (num) { result = num + result; }
			return result;
	}

	return {
		one:gettable,
		two:gettableTwo
	};
});


