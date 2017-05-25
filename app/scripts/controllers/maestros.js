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
   $ctrl.verMaestros = function(){
    $location.path("/maestros");
   }
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

    $scope.aereo = [
      {
        "nombre": "Diana",
        "ap": "Diaz",
        "img": "../images/maestros/aereo/1.jpg",
        "desc":"Ha trabajado como actriz, bailarina, performer, coreógrafa, y profesora. Ha sido premiada en dos ocasiones: por academia de bailes Aguscalientes por la mejor profesora de ballet por dos años consecutivos en Ags., actualmente tiene 3 años trabajando en DCA."
      },
      {
        "nombre": "Victor",
        "ap": "Gonzalez",
        "img": "../images/maestros/aereo/3.jpg",
        "desc":"Estudió la licenciatura en teatro en la universidad de las artes, en el 2010, asisitió a un curso en la ciudad de México de danza aérea impartida por un ex miembro del Cirque du Soleil, obteniendo una certificación internacional, siendo maestro de la disciplina desde el 2013"
      }/*,
      {
        "nombre": "Ernesto",
        "ap": "Javala",
        "img": "../images/maestros/aereo/2.jpg",
        "desc":"Actualmente se encuentra realizando sus estudios de Comercio internacional en la UAA, tomó cursos de capacitación de la disciplina en el df desde el 2014, siendo maestro desde entonces"
      },
            {
        "nombre": "Juan Carlos",
        "ap": "Dominguez",
        "img": "../images/maestros/aereo/4.jpg",
        "desc":"Estudió administración de empresas en la UAA y estudió teatro desde la preparatoria, es maestro desde el 2016"
      }*/
    ];
    $scope.ballet = [
      {
        "nombre": "Cristina",
        "ap": "Aranda",
        "img": "../images/maestros/ballet/1.jpg",
        "desc":"Desde secundaria decidió ingresar al mundo del baile al estudiar ballet en el ICA, y ha dado clases desde los hace más de 9 años"
      },
      {
        "nombre": "Adriana",
        "ap": "Piña",
        "img": "../images/maestros/ballet/2.jpg",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en danza contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      }/*,
      {
        "nombre": "Enrique",
        "ap": "Soto",
        "img": "../images/maestros/ballet/3.jpg",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      }*/
    ];
    $scope.contemporaneo = [
      {
        "nombre": "Alejandra",
        "ap": "Legaria",
        "img": "../images/maestros/contemporaneo/1.jpg",
        "desc":"Inicio su carrera a los 10 años ya que le llamaba mucho la atención este tipo de danza, debido a su gran carrera desde hace 2 años trabaja con nosotros siendo un gran éxito su clase."
      },
      {
        "nombre": "Fernanda",
        "ap": "Zapata",
        "img": "../images/maestros/contemporaneo/2.jpg",
        "desc":"Inicio su carrera a los 15 años, le apasiona la danza tanto que a sus 18 años ya era maestra de danza folclórica y ahora trabaja con nosotros como maestra en danza contemporánea."
      }/*,
      {
        "nombre": "Enrique",
        "ap": "Soto",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      },
      {
        "nombre": "John",
        "ap": "Snow",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      }*/
    ];
    $scope.hiphop = [
      {
        "nombre": "Gary",
        "ap": "Ochoa",
        "img": "../images/maestros/hip-hop/1.jpg",
        "desc":"4 años de carrera profesional, desde niño tenía pasión por el baile así que la corta edad de 5 años sus pasres lo metieron a clases y aquí inicio su auje en el baile, actualmente tiene con nosotros 2 años."
      },
      {
        "nombre": "Paulina",
        "ap": "Acosta",
        "img": "../images/maestros/hip-hop/2.jpg",
        "desc":"Nació en 1995 y tiene dos años como maestra de hip hop en Aguascalientes. Hace un año pertenece a nuestra academia de baile debido a su gran talento y carisma."
      }/*,
      {
        "nombre": "Enrique",
        "ap": "Soto",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      },
      {
        "nombre": "John",
        "ap": "Snow",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      }*/
    ];

    $scope.jazz = [
      {
        "nombre": "Said",
        "ap": "Castorena",
        "img": "../images/maestros/jazz/1.jpg",
        "desc":"Actualmente cuenta con una importante trayectoria como bailarin de jazz, maestro de yoga y bailarin de ballet, Su obra está considerada entre las más valiosas dentro del género jaz en Aguscalientes, llegando a ser catalogado como “El maestro del jazz”"
      },
      {
        "nombre": "Michelle",
        "ap": "Mendoza",
        "img": "../images/maestros/jazz/2.jpg",
        "desc":"Bailarína, maestra de danza y coreógrafa mexicana. Es considerado el precursora de la danza moderna, además de iniciador de las técnicas coreográficas que aún hoy se siguen y de que fue el primero en resaltar el rol masculino entre las compañías de danza."
      }/*,
      {
        "nombre": "Enrique",
        "ap": "Soto",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      },
      {
        "nombre": "John",
        "ap": "Snow",
        "desc":"Inició su carrera a los 17 años cuando decidió entrar a la licenciatura en dana contemporánea, concluyendola en el 2015 y trabajando en DCA desde entonces"
      }*/
    ];

    // };
  });
