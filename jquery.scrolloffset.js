/**
 * Plugin d'ancres animées avec décalage vertical
 * Version : 2.0
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/RhooManu/jQuery-scrollOffset
 **/

(function($) {

	var current = null,
		page = $('html, body');

	$.scrollOffset = function(element, params) {
		this.params = $.extend({}, $.scrollOffset.defaults, params);		

		$(element).on( 'click', function(event) {
			current.scroll($(this));
			event.preventDefault();
		});			
	};

	$.scrollOffset.prototype = {
		constructor: $.scrollOffset,

		scroll: function(element) {
			var ancre = element.attr('href'),
				hauteur = $(ancre).offset().top,
				decalage = hauteur - this.params.offset,
				speed = this.params.speed;

			page.animate({
				scrollTop: (decalage)
			}, speed);
		},
	};

	$.scrollOffset.defaults = {
		offset: 0,
		speed: 400
	};

	$.fn.scrollOffset = function(params) {

		if (0 < this.length)
			current = new $.scrollOffset(this, params);

		return this;
	};
})(jQuery);