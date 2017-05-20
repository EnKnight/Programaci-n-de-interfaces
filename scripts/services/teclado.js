'use strict';

/**
 * @ngdoc service
 * @name proyectoFinalApp.teclado
 * @description
 * # teclado
 * Factory in the proyectoFinalApp.
 */
angular.module('proyectoFinalApp')
  .factory('teclado', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
