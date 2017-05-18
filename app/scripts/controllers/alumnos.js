'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:AlumnosCtrl
 * @description
 * # AlumnosCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('AlumnosCtrl', function ($location, $scope) {
    var $ctrl = this;

    $ctrl.verMenu = function(){
      	$location.path("/");
    };

    $ctrl.registrarAlumno = function(){
        $location.path("/registrarAlumno");
    };

    $ctrl.verMenuSesiones = function(){
        $location.path("/alumnos");
    };

    $ctrl.login = function(){
    	$location.path("/login");
  	};

    $ctrl.validarLogin = function(){
      $location.path("/verClases");
    };

  	$scope.clases = [
  		{
  		  "nombre": "Ballet intermedio",
        "dias": "Lunes, Miércoles y Viernes",
        "horario": "5:00 - 6:00"	
  		},
      {
        "nombre": "Jazz",
        "dias": "Lunes, Miércoles y Viernes",
        "horario": "6:00 - 7:00"  
      },
      {
        "nombre": "Hip hop",
        "dias": "Martes y Jueves",
        "horario": "7:00 - 8:00"  
      },
      {
        "nombre": "Jazz",
        "dias": "Lunes, Miércoles y Viernes",
        "horario": "6:00 - 7:00"  
      },
      {
        "nombre": "Jazz",
        "dias": "Lunes, Miércoles y Viernes",
        "horario": "6:00 - 7:00"  
      }
  	];
  });
