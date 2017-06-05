/*!
 * Animate anchors to make them smooth, and allows offset
 * Version : 2.1.1
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jQuery-ScrollOffset
 **/

;(function($, window, document, undefined) {
	'use strict';

	var pluginName = 'scrollOffset';

	/**
	 * Constructor
	 */
	function Plugin(element, options) {
		this.element = element;
		this._name = pluginName;
		this._defaults = $.fn[pluginName].defaults;
		this.options = $.extend( {}, this._defaults, options );

		this.init();
	}

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		// Initialization logic
		init: function() {
			this.buildCache();
			this.bindEvents();
		},

		/**
		 * Remove plugin instance
		 * Example: $('selector').data('tabs').destroy();
		 */
		destroy: function() {
			this.unbindEvents();
			this.$element.removeData();
		},

		/**
		 * Create variables that can be accessed by other functions
		 * Useful for DOM performances
		 */
		buildCache: function() {
			this.$element = $(this.element);
			this.$body = $('html, body');
		},

		/**
		 * Attach actions to events
		 */
		bindEvents: function() {
			var plugin = this;

			plugin.$element.on('click' + '.' + plugin._name, function(event) {
				plugin.animate.call(plugin, event);
			});

			/**
			 * Allow callback on complete loading
			 */
			this.callback();
		},

		/**
		 * Remove actions from events
		 */
		unbindEvents: function() {
			this.$element.off('.' + this._name);
		},

		/**
		 * When anchors are used, lock up the scroll
		 */
		animate: function(event) {
			var $target = $($(event.currentTarget).attr('href'));

			this.$body.animate({
				scrollTop: ($target.offset().top - this.options.offset)
			}, this.options.duration);

			event.preventDefault();
		},

		/**
		 * When loading tab is complete
		 */
		callback: function() {
			// Cache onComplete option
			var onComplete = this.options.onComplete;

			if (typeof onComplete === 'function') {
				onComplete.call(this.element);
			}
		}

	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {
		this.each(function() {
			if (!$.data( this, "plugin_" + pluginName)) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
		return this;
	};

	/**
	 * Plugin options and their default values
	 */
	$.fn[pluginName].defaults = {
		offset: 0,
		duration: 400,
		onComplete: null
	};

})( jQuery, window, document );
