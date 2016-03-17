'use strict';

/**
 * @ngdoc function
 * @name projetsEpsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsEpsiApp
 */
angular.module('projetsEpsiApp')
	.controller('CreateAskeetCtrl', function ($scope) {
		$scope.format = 'yyyy/MM/dd';
		$scope.date = new Date();
	});
