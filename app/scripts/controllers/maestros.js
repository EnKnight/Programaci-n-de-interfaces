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
    var nom, id;

    $http.get("http://localhost/UAA/DCA/loginusuario.php?nomusr=soto,wong&passwd=won")
   .then(function (response) {
    $scope.usuario = undefined;
    
      // $scope.usuario = response.data.usuario;
    });
   // angular.forEach($scope.usuario, function (usr) {
   //          console.log(usr.nom);
   //        });

   $ctrl.login = function(){
    $location.path("/loginMaestros");
   }

    $ctrl.validarLogin = function () {
      console.log($ctrl.nomusr);
      console.log($ctrl.passwd);

      $http.get("http://localhost/UAA/DCA/loginusuario.php?nomusr="+$ctrl.nomusr+"&passwd="+$ctrl.passwd).then(function (response) {
        $scope.usuario = response.data.usuario;
      });
      angular.forEach($scope.usuario, function (usr) {
        nom = usr.nom;
        id = usr.id;
        console.log(usr.nom);
        console.log(usr.nomusr);
        console.log(usr.passwd);
        console.log(usr.id);
        console.log(id);
      });
      // id = $scope.usuario.id;
      if($scope.usuario != undefined){
        // id = $scope.usuario.id;
        console.log(id);
        $location.path("/horariosMaestros");
        console.log("consulta exitosa de "+$ctrl.nomusr);
        // http://localhost/UAA/DCA/horariosmaestros.php?usr=2

        $http.get("http://localhost/UAA/DCA/horariosmaestros.php?usr="+id).then(function (response) {
          $scope.horario = response.data.usuario;
        });
        angular.forEach($scope.horario, function (usr) {
          console.log(usr.horario);
          console.log(usr.dias);
          // console.log(usr.passwd);
        });
        $http.get("http://localhost/UAA/DCA/horariosmaestros.php?usr="+id).then(function (response) {
          $scope.horario = response.data.usuario;
        });
        angular.forEach($scope.horario, function (usr) {
          console.log(usr.horario);
          console.log(usr.dias);
          // console.log(usr.passwd);
        });
        

      } else{
        console.log("consulta fallida de "+$ctrl.nomusr);
      }
      // var ctrlnomusr = new String($ctrl.nomusr);
      // var ctrlpasswd = new String($ctrl.passwd);
      // var scopenomusr = new String($scope.usuario.nomusr);
      // var scopepasswd = new String($scope.usuario.passwd);
      // console.log(""+ctrlnomusr.localeCompare(scopenomusr));
      // console.log(""+ctrlpasswd.localeCompare(scopepasswd));
      // console.log(ctrlnomusr==scopenomusr);
      // if(ctrlnomusr.localeCompare(scopenomusr) == -1 && ctrlpasswd.localeCompare(scopepasswd) == 1){
      //   $location.path("/horariosMaestros");
      //   console.log("consulta exitosa de "+$ctrl.nomusr);
      // } else{
      //   console.log("consulta fallida de "+$ctrl.nomusr);
      // }
    };

    $ctrl.consultarHorario = function(usuario){
      console.log(id);
      $http.get("http://localhost/UAA/DCA/horariosmaestros.php?usr="+id).then(function (response) {
        $scope.horario = response.data.usuario;
      });
      angular.forEach($scope.horario, function (usr) {
        console.log(usr.horario);
        console.log(usr.dias);
        // console.log(usr.passwd);
      });
    }

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
