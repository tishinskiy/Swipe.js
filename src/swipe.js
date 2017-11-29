;'use strict'

;(function(){

	$.fn.Swipe = function(options){

		var block = $(this);
		var touch = false;
		var posX = 0;
		var move = block.find('.swipe--content');
		var tl = 1;
		var mw = 0;
		move.css({left: 0})

		var blockMove = function(e){
			if (tl == NaN) {tl = Number(0)}
			var ml = tl + (-(posX - e))
			if (ml > 0) {ml = 0}
			if ((block.innerWidth() - ml) > mw) {ml = -( mw - block.innerWidth())}
			move.css({left: ml, position: 'relative'});
		}

		block.bind(
			{
				mousedown : function(e){
					touch = true;
					posX = e.pageX;
					tl = parseInt(move.css('left'));
					mw = move[0].scrollWidth;
				},
				touchstart: function(e){
					touch = true;
					posX = e.originalEvent.touches[0].pageX;
					tl = parseInt(move.css('left'));
					mw = move[0].scrollWidth;
					// alert(11111)
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
					e.preventDefault();
					var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
					if(touch == true) {
						blockMove(t.pageX);
						// alert("move "+t.pageX);
					}
				}
			}
		)
	}

})();