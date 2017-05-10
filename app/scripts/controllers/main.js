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
		var sound = document.getElementById(tagname);

	  	if (!bandera){
			sound.play();
			document.getElementById('sound_img').src = "images/".concat(file1);
			bandera=true;
	  	}
	  	
		else {
			sound.pause();
			sound.currentTime = 0;
			document.getElementById('sound_img').src = "images/".concat(file2);
			bandera=false;
	  	}
  	}

