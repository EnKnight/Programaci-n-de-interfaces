'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:EventosCtrl
 * @description
 * # EventosCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('EventosCtrl', function ($location) {
    var $ctrl = this;
    $ctrl.imprimir = function(){
    	// console.log("Ver Ballet");
    	$location.path("/printEvents");
    };
  });
