'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:DisciplinasCtrl
 * @description
 * # DisciplinasCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('DisciplinasCtrl', function ($location) {
  	var $ctrl = this;
    $ctrl.verAereo = function(){
      // console.log("Ver Ballet");
      $location.path("/disciplineAereo");
    };

    $ctrl.verBallet = function(){
    	// console.log("Ver Ballet");
    	$location.path("/disciplineBallet");
    };

    $ctrl.verContemporaneo = function(){
      // console.log("Ver Ballet");
      $location.path("/disciplineContemporaneo");
    };
    
    $ctrl.verHipHop = function(){
      // console.log("Ver Ballet");
      $location.path("/disciplineHipHop");
    };

    $ctrl.verJazz = function(){
      // console.log("Ver Ballet");
      $location.path("/disciplineJazz");
    };

    $ctrl.verDisciplinas = function(){
    	$location.path("/disciplinas");
    };

    $ctrl.verMenu = function(){
      $location.path("/");
    };
  });
