/*
Author       : Masum Billah.
Template Name: ketfa - Tour & Travel Agency Template
Version      : 1.0
*/
(function($) {
	'use strict';

	/*PRELOADER JS*/
	$(window).on('load', function() { 
		$('.preloader').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	}); 
		
	jQuery(document).on('ready', function(){
		
		/*END PRELOADER JS*/		
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		/*START Home Slider JS*/	
		
		$('.home-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
		
		$('#datepicker').datepicker();
		 $('#travel-dropdown').dropdown();
		
		/*START MENU JS*/
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/	


		/* START COUNTDOWN JS*/
		$('.single-counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */						
		
		/*START PACKAGE JS*/	
		$("#top-package").owlCarousel({
			items:3,
			dots:false,
			nav:true,
			navText: ["<i class='pe-7s-angle-left'></i>" ,"<i class='pe-7s-angle-right'></i>"],
			margin: 30,
			slideSpeed:1000,
			autoPlay:true,
			loop: true,
			responsive:{
				0:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:3,
			
				}
			}
		});
		
		/*END PACKAGE JS*/
			
		
		/*Image Popup*/
		 $('.gallery_enlarge_icon').magnificPopup({
			 type:'image',
			 gallery:{
				enabled:true
			  }
		});		

		$('.widget_instagram a').magnificPopup({
		 type:'image',
		 gallery:{
			enabled:true
		  }
		});
		
		/*START Tour Slider JS*/	
		
		$('.tour_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
		

		 /*START Testimonials LOGO*/	
		$('#testimonial-slider').owlCarousel({
			items : 3,
			autoplay: true,
			center: true,
			loop: true,
			navText:["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			nav: true,
			dots: false,
			margin: 30,
			responsive:{
				0:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:3,
			
				}
			}
		});
		
		/*END Testimonials LOGO*/
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
			margin: 30,
			autoPlay: 5000, //Set AutoPlay to 3 seconds
			items : 5,
			nav: false,
			loop: true,
			responsive:{
				0:{
					items:2,
					
				},
				600:{
					items:3,
					
				},
				1000:{
					items:5,
			
				}
			}
		});
		/*END PARTNER LOGO*/
		
	}); 	
	
			
})(jQuery);