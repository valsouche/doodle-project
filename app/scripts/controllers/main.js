'use strict';

/**
 * @ngdoc function
 * @name projetsEpsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsEpsiApp
 */
angular.module('projetsEpsiApp')
  .controller('MainCtrl', function ($scope,$http,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.email = {};
	$scope.list = ['test'];
	$scope.emailSend = function(){
		
			if ($scope.email) {
	          $scope.list.push(this.email);

	        }
	
	}
  });