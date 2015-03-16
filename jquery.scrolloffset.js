/*!
 * Plugin d'ancres animées avec décalage vertical
 * Version : 1.2
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/RhooManu/jQuery-ScrollOffset
 **/

(function($, undefined) {
	"use strict";

	$.fn.scrollOffset = function(params) {

		// valeurs par défauts des options
		params = $.extend({
			offset: 0,
			speed: 400
		}, params);

		this.each(function() {

			// Variables
			var lien = $(this),
				ancre = lien.attr('href'),
				hauteur = $(ancre).offset().top,
				decalage = hauteur - params.offset,
				speed = params.speed,
				page = $('html, body');

			// Gestion de l'événement clic
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