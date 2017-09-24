define(function() {
	var status = window.applicationCache.status;
	if (status == window.applicationCache.UPDATEREADY){  
        window.applicationCache.update();   
	}
	return status;
});