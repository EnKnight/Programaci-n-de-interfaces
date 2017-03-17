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
    // var btnHistoria = document.getElementById('historia');
    // console.log("Help :'(");
    /*var btnHistoria = document.getElementById("historia");
    var btnHistoria = document.getElementById("historia");
    var btnHistoria = document.getElementById("historia");
    var btnHistoria = document.getElementById("historia");
    var btnHistoria = document.getElementById("historia");
    */
    $ctrl.verHistoria = function(){
    	console.log("Ver Historia");
    	$location.path("/historia");
    };

    $ctrl.verDisciplinas = function(){

    };

    $ctrl.verMaestros = function(){

    };

    $ctrl.verAlumnos = function(){

    };

    $ctrl.verGaleria = function(){
        $location.path("/galeria");
    };

    $ctrl.verEventos = function(){

    };

    $ctrl.regresar = function(){
    	$location.path("/menu");

    };

    /*function verHistoria(){
    	console.log('Ver Historia');
    	$location.path('/historia');
    }
*/
    // btnHistoria.addEventListener('click', verHistoria); 
  });
