;'use strict'

;(function(){

	$.fn.Swipe = function(options){

		var block = $(this);
		var touch = false;
		var posX = 0;
		var move = block.find('.swipe--content');
		var tl;
		var mw = move[0].scrollWidth;

		var blockMove = function(e){
			ml = tl + (-(posX - e))
			if (ml > 0) {ml = 0}
			if ((block.innerWidth() - ml) > mw) {ml = -( mw - block.innerWidth())}
			move.css({left: ml});
		}

		block.bind(
			{
				mousedown : function(e){
					touch = true;
					posX = e.pageX;
					tl = parseInt(move.css('left'));
				},
				touchstart: function(e){
					touch = true;
					posX = e.originalEvent.touches[0].pageX;
					tl = parseInt(move.css('left'));
				},
				mouseup: function(e){
					touch = false;
				},
				touchend: function(e){
					touch = false;
				},
				mouseleave: function(e){
					touch = false;
				},
				mousemove: function(e){
					if(touch == true) {
						blockMove(e.pageX);
					}
				},
				touchmove: function(e){
					if(touch == true) {
						blockMove(e.originalEvent.touches[0].pageX);
					}
				}
			}
		)
	}

})();