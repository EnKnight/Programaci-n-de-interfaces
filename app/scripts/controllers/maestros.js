'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:MaestrosCtrl
 * @description
 * # MaestrosCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('MaestrosCtrl', function ($location, $http, $scope) {
    var $ctrl = this;

    $http.get("http://127.0.0.1/UAA/DCA/loginusuario.php")
   .then(function (response) {
      $scope.usuario = response.data.usuario;
    });

   $ctrl.login = function(){
    $location.path("/loginMaestros");
   }
    $ctrl.validarLogin = function () {
      $http.get("http://127.0.0.1/UAA/DCA/loginusuario.php")
     .then(function (response) {
        $scope.usuario = response.data.usuario;
      });
      console.log('yiah');
      angular.forEach($scope.usuario, function (usr) {
            console.log(usr.nombre);
          });
      $location.path("/bienvenidoAlumno");
  };

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
