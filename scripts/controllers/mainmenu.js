'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:MainmenuCtrl
 * @description
 * # MainmenuCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('MainmenuCtrl', function ($location) {
    var $ctrl = this;
    $ctrl.verHistoria = function(){
    	console.log("Ver Historia");
    	$location.path("/historia");
    };

    $ctrl.verDisciplinas = function(){
        $location.path("/disciplinas");
    };

    $ctrl.verMaestros = function(){
        $location.path("/maestros");
    };

    $ctrl.verAlumnos = function(){
        $location.path("/alumnos");
    };

    $ctrl.verGaleria = function(){
        $location.path("/galeria");
    };

    $ctrl.verEventos = function(){
        $location.path("/eventos");
    };

    $ctrl.regresar = function(){
    	$location.path("/menu");

    };
  });
