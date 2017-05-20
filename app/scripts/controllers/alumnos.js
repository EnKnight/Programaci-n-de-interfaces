'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:AlumnosCtrl
 * @description
 * # AlumnosCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('AlumnosCtrl', function ($location, $scope, $http) {
    var $ctrl = this;
    var host = "http://192.168.1.74";

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

    $ctrl.validarLogin = function () {
      $http.get('../../php/loginusuario.php?nomusr=dena&passwd=den209').then(function(response){
        $scope.usuario = response.data.usuario;
      });
      console.log($scope.usuario);
      console.log('yiah');
      // var mysql      = require('mysql');
      // var connection = mysql.createConnection({
      //   host     : 'localhost',
      //   user     : 'root',
      //   password : 'holis1234',
      //   database : 'escuela_danza'
      // });

      // connection.connect();

      // connection.query('SELECT * from alumnos', function(err, rows, fields) {
      //   if (!err)
      //     console.log('The solution is: ', rows);
      //   else
      //     console.log('Error while performing Query.');
      // });

      // connection.end();
      // var db = require("mysql-native").createTCPClient(); // localhost:3306 by default
      // db.auto_prepare = true;
      // function dump_rows(cmd)
      // {
      //    cmd.addListener('row', function(r) { console.dir(r); } );
      // }

      // db.auth("test", "testuser", "testpass");
      // dump_rows(db.query("select 1+1,2,3,'4',length('hello')"));
      // dump_rows(db.execute("select 1+1,2,3,'4',length(?)", ["hello"]));
      // db.close();
      // get the client
      // var mysql = require('mysql2');

      // create the connection to database
      // var connection = mysql.createConnection({host:'localhost', user: 'root', database: 'escuela_danza'});

      // simple query
      // connection.query('SELECT * FROM alumnos', function (err, results, fields) {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      // });

      // with placeholder
      // connection.query('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Page', 45], function (err, results) {
      //   console.log(results);
      // });
      // $http.get("loginusuario.php").then(function (response) {
      //   $scope.usuario = response.data.usuario;
      // });

      // console.log($scope.usuario);
      // $ctrl.invalid = false;
      // $ctrl.cargando = true;
      // var login = {
      //     email: $ctrl.email,
      //     password: $ctrl.pass
      // };

      // api.signIn(login, function (success) {
      //     $ctrl.cargando = false;
      //     $state.go('tiempos');
      // }, function (error) {
      //     $ctrl.cargando = false;
      //     $ctrl.invalid = true;
      // });
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
