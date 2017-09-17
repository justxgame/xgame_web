define(['local'],function(local){
	return {
		isVar: function(a) {
			if (typeof(a) != 'undefined' && a != '' && a != null) {
				return a;
			} else {
				return false
			}
		},
		extend: function(destination, source) { // 一个静态方法表示继承, 目标对象将拥有源对象的所有属性和方法
			for (var property in source) {
				destination[property] = source[property]; // 利用动态语言的特性, 通过赋值动态添加属性与方法
			}
			return destination; // 返回扩展后的对象
		},
		contains:function(a,b){
			var i = a.length;
			while (i--) {
				if (a[i] === b) {
					return true;
				}
			}
			return false;
		},
		mobileCheck:function(val,fn){
			if(val!=''&&val!=undefined){
				if(val.match(/^1[3|4|5|7|8][0-9]{9}$/)){
					fn();
				}else{
					alert('请输入正确的手机号码');
				};
			}else{
				alert('电话号码不能为空');
			};
		},
		enterDown:function(){
			document.onkeydown=function(event){
             var e = event || window.event || arguments.callee.caller.arguments[0];
            	if(e && e.keyCode==13){
            		alert('OK');
            	}
        	};
		},
		removeVal:function(ele,fn){
			var parent = ele.parent();
			var removeBtn = $('<a class="remove-btn icon">&#xe620;</a>');
			parent.css('position','relative').append(removeBtn);
			if(ele.val()!=''){
				removeBtn.show();
			};
			ele.on('input propertychange',function(){
				if($(this).val()!=''){
					removeBtn.show();
				}else{
					removeBtn.hide();
				};
			});
			removeBtn.on('click',function(e){
				e.stopPropagation();
				e.preventDefault();
				ele.val('');
				$(this).hide();
				fn();
			});
		},
		shadow:function(){
			var shadow = $('<div class="shadow"></div>');
			$('body').append(shadow);
			setTimeout(function(){
				shadow.remove();
			},500)
		}
	};
});