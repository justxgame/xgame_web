define(function() {
	return{
		add:function(keyName,jsonData){
			localStorage.setItem(keyName, JSON.stringify(jsonData));
		},
		get:function(keyName){
			return JSON.parse(localStorage.getItem(keyName));
		},
		remove:function(keyName){
			var remove =  JSON.parse(localStorage.getItem(keyName));
			localStorage.removeItem(keyName);
			return remove;
		}
	};
});