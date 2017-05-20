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
    $ctrl.verAereo = function(){
        // console.log("Ver Ballet");
        $location.path("/galleryAereo");
    };

    $ctrl.verBallet = function(){
    	// console.log("Ver Ballet");
    	$location.path("/galleryBallet");
    };

    $ctrl.verContemporaneo = function(){
        // console.log("Ver Ballet");
        $location.path("/galleryContemporaneo");
    };

    $ctrl.verHipHop = function(){
        // console.log("Ver Ballet");
        $location.path("/galleryHipHop");
    };

    $ctrl.verJazz = function(){
        // console.log("Ver Ballet");
        $location.path("/galleryJazz");
    };

    $ctrl.verGaleria = function(){
    	// console.log("Ver Historia");
    	$location.path("/galeria");
    };

    $ctrl.verMenu = function(){
      $location.path("/");
    };
  });
