define(["tools", "jquery"], function(t) {
	widgetMap = {
		init: function(options) {
			var ops = {
				"id": "allmap",//绑定ip
				"resizeEnable": true,//是否开启响应尺寸
				"rotateEnable": false,//是否能旋转
				"dragEnable": true,//是否开放拖动
				"zoomEnable": true,//是否开放缩放
				"point": "",//初始化坐标
				"zooms": null,//[12,18]最小12,最大18缩放尺寸
				"zoom": 12,//初始化缩放尺寸
				"callback": function() { //回调函数

				},
				"MGeocoderOps": {	//地图编码设置

				}
			}
			var obj = this;
			obj.options = t.extend(ops, options);
			var MGeocoderOps = {
				radius: 9000, //范围，默认：500
				extensions: "all",
				city:"021"
			}
			obj.MGeocoderOps = t.extend(MGeocoderOps, options.MGeocoderOps);
			obj._initBDMapCallBack();
			obj._loadBDMap();
		},
		_points: function() {
			var obj = this;
			var a = "";
			if (obj.options.point != "") {
				a = new AMap.LngLat(obj.options.point[0], obj.options.point[1]);
			}
			return a
		},
		_loadBDMap: function() {
			var obj = this,
				script = document.createElement("script");

			script.type = "text/javascript";
			script.src = "http://webapi.amap.com/maps?v=1.3&key=312ab479d547dc4f1e715c181cc02cb7&callback=MapCallback";
			document.body.appendChild(script);
		},
		_initBDMapCallBack: function() {
			var obj = this;

			window.MapCallback = function() {
				obj.map = new AMap.Map(obj.options.id, {
					resizeEnable: obj.options.resizeEnable,
					rotateEnable: obj.options.rotateEnable,
					dragEnable: obj.options.dragEnable,
					zoomEnable: obj.options.zoomEnable,
					//设置可缩放的级别
					zooms: obj.options.zooms,
					//传入2D视图，设置中心点和缩放级别
					view: new AMap.View2D({
						center: obj._points(),
						zoom: obj.options.zoom
					})
				});
				AMap.event.addListener(obj.map, 'complete', function() {
					obj.options.callback();
					obj.MGeocoderInit();
				});
			}
		},
		panTo: function(lnglat) {
			var obj = this;
			var lng = lnglat[0];
			var lat = lnglat[1];
			obj.map.panTo(new AMap.LngLat(lng, lat));
		},
		MGeocoderInit: function() {
			var obj = this;
			AMap.service(["AMap.Geocoder"], function() {
				obj.MGeocoder = new AMap.Geocoder(obj.MGeocoderOps);
			});
		},
		getAddress: function(ops) {
			/*
			 *	必要数据
			 * ops.lnglatXY 为坐标 [lng,lat]
			 * ops.callback	自定义回调方法
			 */
			var obj = this;
			obj.MGeocoder.getAddress(ops.lnglatXY, function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
					var address = result.regeocode.formattedAddress;
					ops.callback(address);
				}
			});
		},
		getLocation: function(ops) {
			var obj = this;
			t.isVar(obj.MGeocoder) ? true : obj.MGeocoderInit();
			/*
			 *	必要数据
			 * ops.add 地址解析全程
			 * ops.success	自定义回调方法
			 * ops.fail
			 */
			obj.MGeocoder.getLocation(ops.add, function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
					var geocode = result.geocodes[0];
					ops.success(geocode);
				} else {
					ops.fail();
				}
			});
		}
	}
	return widgetMap;
})