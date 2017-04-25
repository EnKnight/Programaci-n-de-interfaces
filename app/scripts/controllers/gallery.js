'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('GalleryCtrl', function ($location) {
    var $ctrl = this;
    $ctrl.verBallet = function(){
    	console.log("Ver Ballet");
    	$location.path("/galleryBallet");
    };

    $ctrl.verGaleria = function(){
    	console.log("Ver Historia");
    	$location.path("/galeria");
    };
  });
