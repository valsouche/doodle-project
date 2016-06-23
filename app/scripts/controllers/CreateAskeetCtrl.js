'use strict';

/**
 * @ngdoc function
 * @name projetsEpsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsEpsiApp
 */
angular.module('projetsEpsiApp')
	.controller('CreateAskeetCtrl', CreateAskeetCtrl);

		function CreateAskeetCtrl($scope, $http, $filter) {
			var vm = this;
			vm.displayTextInput = false;
			vm.displayDatepicker = true;
			vm.displayTimePicker = false;
			vm.datepicker = {data: null};
			vm.dateTmp = null;
			vm.timeTmp = null;
			vm.textTmp = null;
			vm.askeetId = null;
			vm.generatedLink = null;
			vm.displayLink = false;

			vm.askeet = {
				"entityTitle": null,
				"entityName": null,
				"entityEmail": null,
				"entityLocation": null,
				"entityDescription": null,
				"entityCriteria": [],
				"entityDetails": {
					"entityPrivateVote": false,
					"entityVoteModification": false,
					"entityVoteModificationByUsers": false,
					"entityMultipleVote": false,
					"entityAddAnswerByUser": false,
					"entityDisplayResult": false
				},
				"entityInvitations": [],
				"entityResponses": []
			};


			vm.displayDate = function() {
				vm.displayDatepicker = true;
				vm.displayTextInput = false;
				vm.displayTimePicker = false;
			};
			vm.displayText = function() {
				vm.displayDatepicker = false;
				vm.displayTextInput = true;
				vm.displayTimePicker = false;
			};
			vm.displayTime = function() {
				vm.displayDatepicker = false;
				vm.displayTextInput = false;
				vm.displayTimePicker = true;
			};

			// Ajout d'input type date
			vm.addInput = function() {
				if (!_.isNull(vm.dateTmp)) {
					vm.askeet.entityCriteria.push(vm.dateTmp);
					vm.dateTmp = null;
				}
				else if (!_.isNull(vm.textTmp)) {
					vm.askeet.entityCriteria.push(vm.textTmp);
					vm.textTmp = null;
				}
				else if (!_.isNull(vm.timeTmp)) {
					vm.askeet.entityCriteria.push(vm.timeTmp);
					vm.timeTmp = null;
				}
			};

			vm.deleteInput = function(criteria) {
				vm.askeet.criteria.splice(_.indexOf(vm.askeet.criteria, _.find(vm.askeet.criteria, { 'data': criteria.data })), 1);
			};

			// Gestion ajout emails invitations
			vm.tmpEmail = null;
			vm.invalid = null;
			vm.addEmail = function() {
				if (!_.isNull(vm.tmpEmail) && _.includes(vm.tmpEmail, '@')) {
					vm.invalid = false;
					vm.askeet.entityInvitations.push(vm.tmpEmail);
					vm.tmpEmail = "";
				} else {
					vm.invalid = true;
				}
			};

			vm.createAskeet = function() {
				$http.post('http://glassfish.security-helpzone.com/doodle-project/ws/askeet/create', vm.askeet)
					.then(function(res) {
						console.log('créé ' + res);
						vm.askeetEntityId = res.data.entityId;
						vm.askeetId = res.data.id;
						vm.generateLink(vm.askeetEntityId, vm.askeetId);
					}, function(err) {
						console.log('error ' + err);
					})
			};

			vm.generateLink = function(entityId, id) {
				vm.displayLink = true;
				return vm.generatedLink = "http://localhost:9000/askeet/" + id + "/" + entityId;
			};



			//CODE LIBRAIRIES TIERCES
			//
			// Gestion du date picker (cc angular-bootstrap)
			$scope.today = function() {
				$scope.dt = new Date();
			};
			$scope.today();
			$scope.clear = function() {
				$scope.dt = null;
			};
			$scope.dateOptions = {
				formatYear: 'yy',
				maxDate: new Date(2020, 5, 22),
				minDate: new Date(),
				startingDay: 1
			};
			$scope.open1 = function() {
				$scope.popup1.opened = true;
			};
			$scope.setDate = function(year, month, day) {
				$scope.dt = new Date(year, month, day);
			};
			$scope.format = 'yyyy/MM/dd';
			$scope.popup1 = {
				opened: false
			};

			// Gestion du time picker (cc angular-bootstrap)
			$scope.mytime = new Date();
			$scope.hstep = 1;
			$scope.mstep = 15;
			$scope.ismeridian = true;
			$scope.toggleMode = function() {
				$scope.ismeridian = ! $scope.ismeridian;
			};
		}

