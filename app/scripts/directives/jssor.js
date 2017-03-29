'use strict';

/**
 * @ngdoc directive
 * @name proyectoFinalApp.directive:jssor
 * @description
 * # jssor
 */
angular.module('proyectoFinalApp')
  .directive('jssor', ['jssorf', function (jssorf) {
    return {
      template: '<div id="{{scope.id}}"></div>',
      restrict: 'E',
      replace: true,
      scope: {
      	id: '@'
      },
      link: function (scope, element, attrs) {
        var executeJssor = jssorf.generarJssor();
        executeJssor();
      }
    };
  }]);
