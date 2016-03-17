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

	$scope.email = {
	};
	$scope.list = [''];
	$scope.emailSend = function(){
			if ($scope.email.votroMail) {
	          $scope.email.push($scope.email.votroMail);

	        }
	}
  });