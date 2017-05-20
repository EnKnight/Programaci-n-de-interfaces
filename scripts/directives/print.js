'use strict';

/**
 * @ngdoc directive
 * @name proyectoFinalApp.directive:print
 * @description
 * # print
 */
angular.module('proyectoFinalApp')
  .directive('print', function ($location, printfactory) {
    return {
      restrict: 'EA',
      scope: {
        id: '@',
      },
      replace: true,
      link: function (scope, element, attrs) {
        var imprime = printfactory.printSimulation(scope.id);
        console.log("yiah "+scope.id);
        var i=0;

        function makeProgress(){
          if(i < 100){
              i = i + 1;
              $("#"+scope.id).css("width", i + "%").text(i + " %");
              setTimeout(makeProgress, 50);
          } else{
            document.getElementById('imprimir').style.display = "block";
            document.getElementById('animacion-imprimir').style.display = "none";
            
          }
        }
        makeProgress();
      }
    };
  });
