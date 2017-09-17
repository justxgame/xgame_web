define(["ajax","baseSet"],function(ajax,baseSet) {
	var area = {};
	return{
		init:function(){
			
		},
		getData:function(){
			ajax.ajaxPost({
				url:baseSet.serverSite+"service/common/provcitycty_list/0",
				
			})
		},
		getProvince:function(){
			
		},
		getCity:function(){
			
		},
		getArea:function(){
			
		}
	}
})