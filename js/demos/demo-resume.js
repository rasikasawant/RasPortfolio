/*
Name: 			Resume
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	5.7.0


(function( $ ) {

	'use strict';


	// Contact Form Validate
	$('#callSendMessage').validate({
		onkeyup: false,
		onclick: false,
		onfocusout: false,
		errorPlacement: function(error, element) {
			if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
				error.appendTo(element.parent().parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	/*
	* Header Image Anim
	*
	var lastScrollTop = 0;

	$(window).on('scroll', function(){
	   var st = $(this).scrollTop();
	   
	   if (st > lastScrollTop){
	   		$('img[custom-anim]').css({
	   			transform: 'translate(0, -'+ st +'px)'
	   		});
	   } else {
	      $('img[custom-anim]').css({
	   			transform: 'translate(0, '+ -Math.abs(st) +'px)'
	   		});
	   }
	   lastScrollTop = st;
	});

	/*
	* Menu Movement
	
	var menuFloatingAnim = {
		$menuFloating: $('#header.header-floating .header-container > .header-row'),

		build: function() {
			var self = this;

			self.init();
		},
		init: function(){
			var self  = this,
				divisor = 0;

			$(window).scroll(function() {
			    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()),
			    	st = $(this).scrollTop();

				divisor = $(document).height() / $(window).height();

			    self.$menuFloating.find('.header-column > .header-row').css({
			    	transform : 'translateY( calc('+ scrollPercent +'vh - '+ st / divisor +'px) )' 
			    });
			});
		}
	}

	if( $('.header-floating').get(0) ) {
		if( $(window).height() > 700 ) {
			menuFloatingAnim.build();
		}
	}

}).apply( this, [ jQuery ]);*/