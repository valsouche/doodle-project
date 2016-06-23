'use strict';

/**
 * @ngdoc function
 * @name projetsEpsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsEpsiApp
 */
angular.module('projetsEpsiApp')
  .controller('ReponseCtrl', function ($scope, $http, $stateParams) {
    var vm = this;

    vm._init = function() {
      vm.entityId = $stateParams.id;
      $http.get('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/'+ vm.entityId )
        .then(function (data) {
          $scope.askeetList = data.data;
          console.log(data.data);
        }, function (err) {
          console.log(err);
        });

      $scope.answers = {};
    };

    vm.addAnswer = function() {
      $http.put('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/'+ vm.entityId )
        .then(function (data) {
          $scope.askeetList = data.data;
          console.log(data.data);
        }, function (err) {
          console.log(err);
        });
    };

    vm._init();
  });