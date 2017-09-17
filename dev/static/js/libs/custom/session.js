define(["cookie","jquery"],function() {
	return{
		add:function(keyName,jsonData){
			if(jsonData instanceof Array){
				jsonData=jsonData.toString();
				console.log(jsonData);
			}else{
			jsonData=JSON.stringify(jsonData);
			};
			jQuery.cookie(keyName,jsonData, {expires: 7});
			//sessionStorage.setItem(keyName, JSON.stringify(jsonData));
		},
		get:function(keyName,type){
			if(type=="ary"){
				return jQuery.cookie(keyName).split(",");
			}else{
				var val = jQuery.cookie(keyName);
				
		console.log(val);
			};
			
			//JSON.parse(sessionStorage.getItem(keyName));
		},
		remove:function(keyName){
			$.cookie(keyName,null);
			//var remove =  JSON.parse(sessionStorage.getItem(keyName));
			//sessionStorage.removeItem(keyName);
			//return remove;
		}
	};
});