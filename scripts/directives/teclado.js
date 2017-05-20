'use strict';

/**
 * @ngdoc directive
 * @name proyectoFinalApp.directive:teclado
 * @description
 * # teclado
 */
angular.module('proyectoFinalApp')
  .directive('teclado', function () {
    return {
      restrict: 'EA',
      scope: {
        id: '@',
        placeholder: '@',
        name: '@'
      },
      replace: true,
      template: '<textarea  cols="1" class="form-control" maxlength="15" placeholder="{{scope.placeholder}}" name="{{scope.name}}"></textarea>',

      link: function (scope, element, attrs) {
        var i=0;
        var $password = $('#'+scope.id),
		shift = false,
		capslock = false;
		console.log(scope.id);
		$('#keyboard li').click(function(){
			var $this = $(this),
				character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
			
			// Shift keys
			if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
				$('.letter').toggleClass('uppercase');
				$('.symbol span').toggle();
				
				shift = (shift === true) ? false : true;
				capslock = false;
				return false;
			}
			
			// Caps lock
			if ($this.hasClass('capslock')) {
				$('.letter').toggleClass('uppercase');
				capslock = true;
				return false;
			}
			
			// Delete
			if ($this.hasClass('delete')) {
				var html = $password.html();
				
				$password.html(html.substr(0, html.length - 1));
				return false;
			}
			
			// Special characters
			if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
			if ($this.hasClass('space')) character = ' ';
			if ($this.hasClass('tab')) character = "\t";
			if ($this.hasClass('return')) character = "\n";
			
			// Uppercase letter
			if ($this.hasClass('uppercase')) character = character.toUpperCase();
			
			// Remove shift once a key is clicked.
			if (shift === true) {
				$('.symbol span').toggle();
				if (capslock === false) $('.letter').toggleClass('uppercase');
				
				shift = false;
			}
			
			// Add the character
			$password.html($password.html() + character);
		});

		// $(document).ready(function(){
		//   $(document).mousemove(function(e){
		//      TweenLite.to($('body'), 
		//         .5, 
		//         { css: 
		//             {
		//                 'background-position':parseInt(event.pageX/8) + "px "+parseInt(event.pageY/12)+"px, "+parseInt(event.pageX/15)+"px "+parseInt(event.pageY/15)+"px, "+parseInt(event.pageX/30)+"px "+parseInt(event.pageY/30)+"px"        
		//             }
		//         });
		//   });
		// });

		$(document).ready(function(){
			$("#"+scope.id).click(function(){
				$('#kb-container').show("swing");
			 });
			//$('#password').replaceWith('<input type="password">');
		});
      }
    };
  });
