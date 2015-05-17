'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappApp
 */
angular.module('myApp')
	.controller('HomeCtrl', function ($scope) {
		$scope.init = function() {
			console.log("inside init function of HomeCtrl");
		};
	});