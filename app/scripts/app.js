'use strict';

/**
 * @ngdoc overview
 * @name proyectoFinalApp
 * @description
 * # proyectoFinalApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoFinalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/historia', {
        templateUrl: 'views/historia.html',
        controller: 'MainmenuCtrl',
        controllerAs: '$menu'
      })
      .when('/menu', {
        templateUrl: 'views/main.html',
        controller: 'MainmenuCtrl',
        controllerAs: '$menu'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'MainmenuCtrl',
        controllerAs: '$menu'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
