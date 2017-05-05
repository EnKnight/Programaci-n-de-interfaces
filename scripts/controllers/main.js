'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoFinalApp
 */

 var bandera=false;
 $(document).ready(function() { bandera=false});

angular.module('proyectoFinalApp')
  .controller('MainCtrl', function () {
    
  });

    function Audio(tagname, file1, file2){
  	if (!bandera){
		document.getElementById(tagname).play();
		document.getElementById('sound_img').src = "images/".concat(file1);
		bandera=true;
  	}
	else {
		document.getElementById(tagname).pause();
		document.getElementById('sound_img').src = "images/".concat(file2);
		bandera=false;
	  }
  }

