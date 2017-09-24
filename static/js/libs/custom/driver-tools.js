define(["session","local"],function(session,local){
	return {
		isVar: function(a) {
			if (typeof(a) != "undefined" && a != "") {
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
		pageInfo:function(){
			var pageInfo=session.get("driver-pageInfo")!=undefined&&session.get("driver-pageInfo")!=null&&session.get("driver-pageInfo")!=""?session.get("driver-pageInfo"):[];
			var nowPage=window.location.href;
			var oldPage = pageInfo.shift();
			//alert(oldPage);
			if(oldPage!=null&&oldPage!=undefined&&oldPage!=""){
				if(oldPage!=nowPage){
					pageInfo.unshift(oldPage);
					pageInfo.unshift(nowPage);
				}else{
					pageInfo.unshift(nowPage);
				};
			}else{
				pageInfo.unshift(nowPage);
			};
			session.add("driver-pageInfo",pageInfo);
			console.log(session.get("driver-pageInfo"));
		},
		lpageInfo:function(){
			var pageInfo=local.get("driver-pageInfo")!=undefined&&local.get("driver-pageInfo")!=null&&local.get("driver-pageInfo")!=""?local.get("driver-pageInfo"):[];
			var nowPage=window.location.href;
			var oldPage = pageInfo.shift();
			console.log(oldPage);
			if(oldPage!=null&&oldPage!=undefined&&oldPage!=""){
				if(oldPage!=nowPage){
					pageInfo.unshift(oldPage);
					pageInfo.unshift(nowPage);
				}else{
					pageInfo.unshift(nowPage);
				};
			}else{
				pageInfo.unshift(nowPage);
			};
			local.add("driver-pageInfo",pageInfo);
			console.log(local.get("driver-pageInfo"));
		},
		mobileCheck:function(val,fn){
			if(val!=""&&val!=undefined){
				if(val.match(/^1[3|4|5|7|8][0-9]{9}$/)){
					fn();
				}else{
					alert("请输入正确的手机号码");
				};
			}else{
				alert("电话号码不能为空");
			};
		},
		formatData:function(val){
			var newTime = new Date(val);
			var day = newTime.getDate();
			var month = newTime.getMonth()+1;
			var year = newTime.getFullYear();
			var result = year+"-"+month+"-"+day;
			return result;
		},
		enterDown:function(){
			document.onkeydown=function(event){
             var e = event || window.event || arguments.callee.caller.arguments[0];
            	if(e && e.keyCode==13){
            		alert("OK");
            	}
        	};
		},
		removeVal:function(ele,css){
			console.log(ele.parent());
			var parent = ele.parent();
			var removeBtn = $('<button class="remove-btn icon">&#xe616;</button>');
			var btnCss = this.extend({},css);
			removeBtn.css(btnCss);
			parent.css("position","relative").append(removeBtn);
			if(ele.val()!=""){
				removeBtn.show();
			};
			ele.on("input propertychange",function(){
				if($(this).val()!=""){
					removeBtn.show();
				}else{
					removeBtn.hide();
				};
			});
			removeBtn.on("tap",function(){
				ele.val("");
				$(this).hide();
			});
		}
	};
});