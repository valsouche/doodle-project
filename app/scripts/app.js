'use strict';

/**
 * @ngdoc overview
 * @name projetsEpsiApp
 * @description
 * # projetsEpsiApp
 *
 * Main module of the application.
 */
angular
  .module('projetsEpsiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider

      .state('home', {
        url: '/home',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
      })

      .state('about', {
        url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
      })

      .state('createAskeet', {
        templateUrl: 'views/create-askeet-form.html',
        controller: 'CreateAskeetCtrl',
        controllerAs: 'vm'
      })

      .state('createAskeet.step1', {
        url: '/new-askeet',
        templateUrl: 'views/multi-step-form/step1.html'
      })

      .state('createAskeet.step2', {
        url: '/new-askeet2',
        templateUrl: 'views/multi-step-form/step2.html'
      })

      .state('createAskeet.step3', {
        url: '/new-askeet3',
        templateUrl: 'views/multi-step-form/step3.html'
      })

      .state('createAskeet.step4', {
        url: '/new-askeet4',
        templateUrl: 'views/multi-step-form/step4.html'
      })

      .state('createAskeet.step5', {
        url: '/new-askeet5',
        templateUrl: 'views/multi-step-form/step5.html'
      })

      .state('reponse', {
        url: '/askeet/{id}/{entityId}',
          templateUrl: 'views/reponse.html',
          controller: 'ReponseCtrl',
          controllerAs: 'reponse'
      })
  })

  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
