/**
 * Plugin d'ancres animées avec décalage vertical
 * Version : 2.0
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/RhooManu/jQuery-scrollOffset
 **/

(function($) {

	// Variables globales
	var current = null,
		page = $('html, body');

	// Constructeur
	$.scrollOffset = function(element, params) {
		this.params = $.extend({}, $.scrollOffset.defaults, params);		

		$(element).on( 'click', function(event) {
			current.scroll($(this));
			event.preventDefault();
		});			
	};

	// Méthodes
	$.scrollOffset.prototype = {

		// Constructeur
		constructor: $.scrollOffset,

		// Scrolle jusqu'à une ancre, avec l'offset souhaité
		scroll: function(element) {
			var ancre = element.attr('href'),
				hauteur = $(ancre).offset().top,
				decalage = hauteur - this.params.offset,
				speed = this.params.speed;

			page.animate({
				scrollTop: (decalage)
			}, speed);
		}
	};

	// Paramètres par défaut
	$.scrollOffset.defaults = {
		offset: 0,
		speed: 400
	};

	// Initialisation
	$.fn.scrollOffset = function(params) {

		if (0 < this.length)
			current = new $.scrollOffset(this, params);

		// Chaînage jQuery
		return this;
	};
})(jQuery);