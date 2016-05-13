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

		function CreateAskeetCtrl($scope, $filter) {
			var vm = this;
			vm.displayTextInput = false;
			vm.displayDatepicker = true;
			vm.displayTimePicker = false;
			vm.datepicker = {data: null};
			vm.dateTmp = null;
			vm.timeTmp = null;
			vm.textTmp = null;

			vm.askeet = {
				title: null,
				name: null,
				email: null,
				location: null,
				description: null,
				criteria: [],
				details: {
					privateVote: false,
					voteModification: false,
					voteModificationByUsers: false,
					multipleVote: false,
					addAnswerByUser: false,
					displayResult: false
				},
				invitations: []
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
					vm.askeet.criteria.push({data: vm.dateTmp});
					vm.dateTmp = null;
				}
				else if (!_.isNull(vm.textTmp)) {
					vm.askeet.criteria.push({data: vm.textTmp});
					vm.textTmp = null;
				}
				else if (!_.isNull(vm.timeTmp)) {
					vm.askeet.criteria.push({data: vm.timeTmp});
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
					vm.askeet.invitations.push(vm.tmpEmail);
					vm.tmpEmail = "";
				} else {
					vm.invalid = true;
				}
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

