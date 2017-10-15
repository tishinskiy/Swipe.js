;'use strict'

;(function(){

	$.fn.Swipe = function(options){

		var block = $(this);
		// var active;
		// var index = 0;

		// var defaults = {
		// 	actions: {}
		// }

		var touch = false;
		var posX = 0;
		var sb = block.find('.swipe--content');
		var tl = parseInt(sb.css('left'));

		var blockMove = function(e){
			console.log(touch);
			sb.css({left: tl + (-(posX - e.pageX))});
		}

		// var options = $.extend({}, defaults, options);

		block.bind(
			{
				mousedown: function(e){
					touch = true;
					posX = e.pageX;
					tl = parseInt(sb.css('left'));
				},
				mouseup: function(e){
					touch = false;
					console.log(touch);
				},
				mouseout: function(e){
					touch = false;
				},
				mousemove: function(e){
					if(touch == true) {
						blockMove(e);
					}
				}
			}
		)


	}

})();