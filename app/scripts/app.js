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
        controller: 'MainmenuCtrl',
        controllerAs: '$menu'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/disciplinas', {
        templateUrl: 'views/disciplinas.html',
        controller: 'DisciplinasCtrl',
        controllerAs: '$dis'
      })
      .when('/disciplineBallet', {
        templateUrl: 'views/disciplineballet.html',
        controller: 'DisciplinasCtrl',
        controllerAs: '$dis'
      })
      .when('/eventos',{
        templateUrl: 'views/eventos.html',
        controller: 'EventosCtrl',
        controllerAs: '$eventos'
      })
      .when('/printEvents',{
        templateUrl: 'views/printevents.html',
        controller: 'EventosCtrl',
        controllerAs: '$eventos'
      })
      .when('/historia', {
        templateUrl: 'views/historia.html',
        controller: 'MainmenuCtrl',
        controllerAs: '$menu'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GalleryCtrl',
        controllerAs: '$gallery'
      })
      .when('/galleryBallet', {
        templateUrl: 'views/galleryballet.html',
        controller: 'GalleryCtrl',
        controllerAs: '$gallery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
