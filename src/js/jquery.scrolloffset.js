/*!
 * Animate anchors to make them smooth, and allows offset
 * Version : 2.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jQuery-ScrollOffset
 **/

 ;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Default values
	 */
	var pluginName = 'scrollOffset',
		defaults = {
			offset: 0,
			duration: 400
		};

	/**
	 * Constructor
	 */
	var Plugin = function(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);

		this.body = $('html, body');

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	};

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		init: function() {
			var plugin = this;

			$(plugin.element).on('click', function(event) {
				plugin.animate(plugin.body, $(event.target).attr('href'));
				event.preventDefault();
			});
		},

		/**
		 * Get the position of the targeted element and add the offset
		 */
		animate: function(body, target) {
			body.animate({
				scrollTop: ($(target).offset().top - this.settings.offset)
			}, this.settings.duration);
		}
	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {
		var _oPlugin;

		if ( $.data( this, 'plugin_' + pluginName ) !== true ) {
			_oPlugin = new Plugin( this, options );
			$.data( this, 'plugin_' + pluginName, true );
		}
	};
})(jQuery, window, document);