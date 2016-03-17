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
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

      .state('home', {
        url: '/home',
        views: {
          'mainView': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          'mainView': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
          }
        }
      })
  });
