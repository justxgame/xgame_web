define(['angular'], function (angular) {
	'use strict';
	var appController = angular.module('app.controller', []);
	appController.controller('navController', function($scope,login) {
		$scope.logout = login.logout;
	});
});