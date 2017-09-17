/*
 * jquery-tap v1.0    jQuery-tap 
 * Copyright 2015, 7*
 */
$.fn.touch = function(fun){
	return this.each(function(){
		var $this = this;
		var className = "";
		var s_x=s_y=e_x=e_y=0;
		$this.addEventListener('touchstart', function(event){
			var touch = event.targetTouches[0];
			className = event.target.className;
			s_x=touch.screenX;
			s_y=touch.screenY;
		},false);
		$this.addEventListener('touchend', function(event){
			var touch = event.changedTouches[0];
			e_x=touch.screenX;
			e_y=touch.screenY;
			var c_x = Math.abs(Math.abs(e_x)-Math.abs(s_x));
			var c_y = Math.abs(Math.abs(e_y)-Math.abs(s_y));
			if(c_x==0 && c_y==0){
				fun($this,className);
			}
		},false);
	});
};