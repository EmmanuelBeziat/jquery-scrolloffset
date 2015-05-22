/*!
 * Animate anchors to make them smooth, and allows offset
 * Version : 2.0
 * Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jQuery-ScrollOffset
 **/

;(function($, undefined) {
	"use strict";

	/**
	 * Default values
	 */
	var pluginName = 'scrollOffset',
		defaults = {
			offset: 0,
			speed: 400
		};

	/**
	 * Constructor
	 */
	var Plugin = function(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	};

	$.extend(Plugin.prototype, {
		init: function() {
			var plugin = this;

			$(plugin.element).on('click', function() {
				plugin.animate();
			});
		},

		animate: function() {
			$('html, body').animate({
				scrollTop: (this.settings.offset)
			}, this.settings.speed);
		}
	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {

		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};
})(jQuery);