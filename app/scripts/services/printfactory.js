'use strict';

/**
 * @ngdoc service
 * @name proyectoFinalApp.printfactory
 * @description
 * # printfactory
 * Factory in the proyectoFinalApp.
 */
angular.module('proyectoFinalApp')
  .factory('printfactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      imprime: function(){

      },
      printSimulation: function(id){
        var funcion = function(){
          console.log("oh shi :3");
          var i=0;
            if(i < 100){
                i = i + 1;
                $("#"+id).css("width", i + "%").text(i + " %");
            }
            // Wait for sometime before running this script again
            setTimeout("imprime()", 100);  
        } 
        return funcion;
      }
    };
  });

  
