'use strict';

/**
 * @ngdoc service
 * @name proyectoFinalApp.viewDisciplines
 * @description
 * # viewDisciplines
 * Factory in the proyectoFinalApp.
 */
angular.module('proyectoFinalApp').factory('viewDisciplines', function () {
  // Service logic

  return {
    iniciarSecuencia: function () {
      var myFunction = function (options) {
        var defaults = {
          wrapper: this,
          aria: ""
        },
        options = $.extend(defaults, options),
        o = options,
        currentState = $(o.wrapper).attr("aria-" + o.aria),
        newState;

        if (currentState == "false") {
          newState = "true";
        } else {
          newState = "false";
        }

        $(o.wrapper).attr("aria-" + o.aria, newState);

      };
    } //Fin de iniciarSecuencia
  };
});