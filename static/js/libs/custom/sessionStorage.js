define(function() {
	return{
		add:function(keyName,jsonData){
			sessionStorage.setItem(keyName, JSON.stringify(jsonData));
		},
		get:function(keyName){
			return JSON.parse(sessionStorage.getItem(keyName));
		},
		remove:function(keyName){
			var remove =  JSON.parse(sessionStorage.getItem(keyName));
			sessionStorage.removeItem(keyName);
			return remove;
		}
	};
});