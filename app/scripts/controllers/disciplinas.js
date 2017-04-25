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
    $ctrl.verBallet = function(){
    	console.log("Ver Ballet");
    	$location.path("/disciplineBallet");
    };

    $ctrl.verDisciplinas = function(){
    	$location.path("/disciplinas");
    };
  });
