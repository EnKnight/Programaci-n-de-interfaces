'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:HistoriaCtrl
 * @description
 * # HistoriaCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp').controller('HistoriaCtrl', function ($location) {
    var $ctrl = this;

    $ctrl.verMenu = function(){
      $location.path("/");
    };

 });
