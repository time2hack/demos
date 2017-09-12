/**
* jQuery rollingButtons Plugin 0.1
*
* http://www.pankaj.pro/
*
* Copyright (c) 2013 Pankaj Patel
*/

var options = {
	background : '#DD4D42',
	color : '#fff'
};

(function($){
	$.fn.rollingButtons = function(opts){
		//Link background colors 
		if(opts != null){
			options = opts
		}
		var style = '<style>.rollers {display: inline-block;overflow: hidden;vertical-align: top;-webkit-perspective: 600px;-moz-perspective: 600px;-ms-perspective: 600px;perspective: 600px;-webkit-perspective-origin: 50% 50%;-moz-perspective-origin: 50% 50%;-ms-perspective-origin: 50% 50%;perspective-origin: 50% 50%;}.rollers:hover {text-decoration:none;}.rollers span {display: block;position: relative;padding: 0 2px;-webkit-transition: all 400ms ease;-moz-transition: all 400ms ease;-ms-transition: all 400ms ease;transition: all 400ms ease;-webkit-transform-origin: 50% 0%;-moz-transform-origin: 50% 0%;-ms-transform-origin: 50% 0%;transform-origin: 50% 0%;-webkit-transform-style: preserve-3d;-moz-transform-style: preserve-3d;-ms-transform-style: preserve-3d;transform-style: preserve-3d;}.rollers:hover span {background: '+ options.background +';-webkit-transform: translate3d( 0px, 0px, -30px ) rotateX( 90deg );-moz-transform: translate3d( 0px, 0px, -30px ) rotateX( 90deg );-ms-transform: translate3d( 0px, 0px, -30px ) rotateX( 90deg );transform: translate3d( 0px, 0px, -30px ) rotateX( 90deg );}.rollers span:after {content: attr(data-title);display: block;position: absolute;left: 0;top: 0;padding: 0 2px;color: '+options.color+';background: '+ options.background +';-webkit-transform-origin: 50% 0%;   -moz-transform-origin: 50% 0%;   -ms-transform-origin: 50% 0%;   transform-origin: 50% 0%;-webkit-transform: translate3d( 0px, 105%, 0px ) rotateX( -90deg );   -moz-transform: translate3d( 0px, 105%, 0px ) rotateX( -90deg );   -ms-transform: translate3d( 0px, 105%, 0px ) rotateX( -90deg );   transform: translate3d( 0px, 105%, 0px ) rotateX( -90deg );}</style>';

		return this.each(function(i,obj){
			$this = $(this);
			//$anchors = $this;
			$('body').prepend(style);
			$.each($this, function(j,ele){
				x= $(ele).html();
				$(ele).addClass('rollers').html('<span data-title="'+x+'">'+x+'</span>');
			});
		});
	};
})(jQuery);