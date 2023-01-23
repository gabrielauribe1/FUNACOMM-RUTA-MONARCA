(function ($) {
	"use strict";

    $(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        //Wow js
		new WOW().init();
		//product
		$('.testimonial-1 .owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true
			}
			}
		});
		
		
		$('.testimonial-2 .owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				dots: true
			}
			}
		});
		



    });


    $(window).on('load',function(){
		
		//Preloader
		$('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});
        
    });


}(jQuery));	

$(document).ready(function () {

    // Check for video loading complete
    var video = document.getElementById("tm-welcome-video");

    video.onloadeddata = function() {
        $('#tm-video-text-overlay').removeClass('d-none');
        $('#tm-video-loader').addClass('d-none');

        $('#rotate').rotaterator({
            fadeSpeed: 1000,
            pauseSpeed: 300
        });
    }

    // Update year in copyright text
    document.querySelector('.tm-current-year').textContent = new Date().getFullYear();
});
