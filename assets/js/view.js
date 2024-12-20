/*
 * APP UI: Alert
 * Source: https://github.com/backbone-ui/alert
 * Copyright © Makesites.org
 *
 * Initiated by Lyndel Thomas (@ryndel)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

// imports
import { APP } from "https://cdn.jsdelivr.net/gh/makesites/app/dist/app.min.js";
import "https://cdn.jsdelivr.net/gh/jquery/jquery@3.7.1/dist/jquery.min.js";
import * as _ from "https://cdn.jsdelivr.net/npm/underscore@1.12.1/underscore-esm-min.js";
// custom element
import "../../src/main.js";


var $ = window.$ || window.jQuery;
// support for APP() is required...
var isAPP = ( typeof APP !== "undefined" );
var Parent = ( isAPP && typeof APP.View !== "undefined" ) ? APP.View : class {};

class View extends Parent {

	el(){ return $('<ui-alert><span></span></ui-alert>'); }

	defaults() {
		return {
			parentEl: "body",
			message: "",
			type: "info",
			position: "top-center",
			fade: 0,
		}
	}
/*
	events: {
		"click": "close",
	}
*/
	initialize( options ) {
		console.log($);
		var $el = $(this.el);
		// extend default options
		this.options = _.extend({}, this.options, options);
		//var alertBox = $('<div class="ui-alert top-center error"><span>' + this.options.message + '</span></div>');
		$el.addClass( this.options.type ).addClass( this.options.position );
		$el.find("span").html( this.options.message );

		$(this.options.parentEl).append( $el );
		// add fading effect
		if( this.options.fade ){
			setTimeout(function(){
				//$el.fadeOut("fast", function(){ $el.remove(); });
				$el.addClass("fade-out");
				$el.on('webkitTransitionEnd', function(e){ $el.remove(); });
			}, this.options.fade);
		}

	}

	close() {
		$(this.el).remove();
	}

}


export { View as Alert };
