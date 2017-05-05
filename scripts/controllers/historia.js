'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:HistoriaCtrl
 * @description
 * # HistoriaCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp').controller('HistoriaCtrl', function ($scope) {
    var $ctrl = this;

    $scope.datosTransicion = [
    	{
    		"image":"La empresa fue fundada por Luisa Cristina Aranda Soto y Paulina Acosta Carvajal en el año 2011, ambas egresadas de la Universidad Autónoma de Aguascalientes con títulos en turismo y mercadotecnia respectivamente. "+
    		"La empresa fue fundada para cubrir la necesidad que se había detectado previamente en los jóvenes que viven en los fraccionamientos circundantes al colegio Esperanza de poder expresarse a través de una de las bellas artes: "+
    		"la danza. La empresa actualmente cuenta con aproximadamente 100 alumnos en las diferentes modalidades de jazz, danza aérea, hip-hop, yoga, ballet y contemporáneo. "+
			"La necesidad de generar este proyecto es para que la empresa incremente su matrícula y pueda dar a conocer de que trata la escuela, motivando a los aspirantes con fotos de los estudiantes, "+
			"eventos en los que participa la escuela, información de los profesores que imparten las diversas disciplinas, así como las instalaciones de la escuela.", 
    		"thumb":"Historia"
    	},
    	{
    		"image":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
	                    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
	                    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
	                    "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
	                    "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
	                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "+
	                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
	                    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
	                    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
	                    "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
	                    "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
	                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    		"thumb":"Al respecto" 
    	}
    ];

 });
