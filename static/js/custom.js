
(function($){
	"use strict";
	var NAY = {};
	$.fn.exists = function () {
        return this.length > 0;
    };

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	NAY.PreLoad = function() {
		document.getElementById("loading").style.display = "none"; 
	}

    /*--------------------
        * Menu Close
    ----------------------*/
    NAY.MenuClose = function(){
      $('.navbar-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	NAY.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    NAY.OnePage = function(){
        $('.js-scroll-trigger').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - -2,
                      }, 1000);
                      return false;
                  }
            }
        });
    }



	NAY.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('.header-height').css("min-height", HHeight);	
	}


	NAY.FadeIn = function () {	
			
		/* Check the location of each desired element */
		$('.hideme').each( function(i){
			var benchmark = $(this).outerHeight()/2 > 150 ? 150 : $(this).outerHeight()/2;
			var bottom_of_object = $(this).offset().top + benchmark;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){
				$(this).addClass('slide-top')
				
			}
			
		}); 
	}



	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body    = document.getElementsByTagName('body')[0];
	      var script    = document.createElement('script');
	      script.type   = 'text/javascript';
	      script.src    = scriptName;
	      // NAYn bind NAY event to NAY callback function
	      // NAYre are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire NAY loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	// Window on Load
	$(window).on("load", function(){
		NAY.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		NAY.HeaderFixd(),
		NAY.OnePage(),
		NAY.MenuClose(),
		NAY.HeaderHeight(),
		NAY.FadeIn();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		NAY.HeaderFixd();
		NAY.FadeIn();
	});

	// Window on Resize
	$(window).on("resize", function(){
		NAY.HeaderHeight();
	});


})(jQuery);