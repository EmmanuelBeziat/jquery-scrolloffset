/**
 * Plugin d'ancres animées avec décalage vertical
 * Version : 1.2
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 **/

(function($) {
	$.fn.scrollOffset = function(params) {
		params = $.extend({
			offset: 0,
			speed: 400
		}, params);

		this.each(function() {
			var lien = $(this);
			var ancre = lien.attr("href");
			var hauteur = $(ancre).offset().top;
			var decalage = hauteur - params.offset;
			var speed = params.speed;
			var easing = params.easing;
			var page = $('html, body');

			lien.on('click', function(event) {
				page.animate({
					scrollTop: (decalage)
				}, speed);
				event.preventDefault();
			});

		});

		// Chainage jQuery
		return this;
	};
})(jQuery);