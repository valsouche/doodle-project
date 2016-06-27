'use strict';

/**
 * @ngdoc function
 * @name projetsEpsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsEpsiApp
 */
angular.module('projetsEpsiApp')
  .controller('ReponseCtrl', function ($scope, $http, $stateParams, $location) {
    var vm = this;
    var newAskeet = null;
    var email = {};
    var emailRemove= {};
    $scope.isNoAskeet = false;

    vm._init = function() {
      $scope.loader = {isLoading: true};
      vm.entityId = $stateParams.id;
      vm.id= $stateParams.entityId;
      var link = vm.generateLink(vm.id, vm.entityId);
      $http.get('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/'+ vm.entityId )
        .then(function (data) {
          if (data.data === "") {
            $location.url('askeet/not-found');
          }
          $scope.askeetList = data.data;
          newAskeet = $scope.askeetList;
          email = {
            "entityFrom": "valentin.souche@gmail.com",
            "entityTo": "valentin.souche@gmail.com",
            "entitySubject":"Une réponse a été portée sur votre Doodle" ,
            "entityContent":"Bonjour " + newAskeet.entityName + ", </br> un de vos invité a donné sa réponse sur votre Askeet. </br> Allez vois ça desuite: </br>" + link
          };
          emailRemove = {
            "entityFrom": "valentin.souche@gmail.com",
            "entityTo": "valentin.souche@gmail.com",
            "entitySubject":"Askeet supprimé avec succès" ,
            "entityContent":"Bonjour, votre Askeet a bien été supprimé. A bientôt !"
          };

          $scope.loader = {isLoading: false};
          console.log(data.data);
        }, function (err) {
          $scope.loader = {isLoading: false};
          console.log(err);
        });

      $scope.answers = {
        "entityName": ""
      };
    };


    $scope.addAnswer = function() {
      console.log($scope.answers);
      newAskeet.entityResponses.push($scope.answers);

      $http.put('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/'+ newAskeet.id, newAskeet)
        .then(function (data) {
          console.log(data.data);
          $http.post('http://glassfish.security-helpzone.com/doodle-project/ws/email', email)
            .then(function(data) {
              console.log('Mail envoyé !')
            })
        }, function (err) {
          console.log(err);
        });

      $scope.answers = {
        "entityName": "",
        "entityResponses": {}
      };
    };

    vm.generateLink = function(entityId, id) {
      vm.displayLink = true;
      return vm.generatedLink = "http://localhost:9000/#/admin/askeet/" + id + "/" + entityId;
    };

    $scope.deleteAskeet = function() {
      $http.delete('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/' + newAskeet.id)
        .then(function(data) {
          console.log('Supprimé !!!');
          $http.post('http://glassfish.security-helpzone.com/doodle-project/ws/email', emailRemove)
            .then(function(data) {
              console.log('Mail suppression envoyé !');
            })
        })
    };

    vm._init();
  });