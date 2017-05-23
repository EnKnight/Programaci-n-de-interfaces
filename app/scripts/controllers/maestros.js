'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:MaestrosCtrl
 * @description
 * # MaestrosCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('MaestrosCtrl', function ($location) {
    var $ctrl = this;

    $ctrl.verMenu = function(){
      $location.path("/");
    };

    $ctrl.verAereo = function(){
        $location.path("/maestrosAereo");
    };

    $ctrl.verBallet = function(){
        $location.path("/maestrosBallet");
    };

    $ctrl.verContemporaneo = function(){
        $location.path("/maestrosContemporaneo");        
    };

    $ctrl.verHiphop = function(){
        $location.path("/maestrosHiphop");        
    };

    $ctrl.verJazz = function(){
        $location.path("/maestrosJazz");        
    };
  });
