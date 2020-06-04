
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

	NAY.projectImage = function () {
		$(".project-img").each(function() {
			var t = $(this);
			t.on("mousemove", function(o) {
				var a = t.outerWidth()
				  , n = t.outerHeight()
				  , r = t.offset().left - $(window).scrollLeft()
				  , i = t.offset().top - $(window).scrollTop()
				  , s = (o.clientX - r) / a
				  , l = (o.clientY - i) / n
				  , c = 2 * (l - .5)
				  , f = (5 - 10 * s).toFixed(2)
				  , d = ((10 * l - 5).toFixed(2),
				20 * c);
				console.log(t, f ,d)
				TweenLite.to(t, .3, {
					scale: 1.07,
					rotationY: f,
					y: 1
				})
			}),
			t.on("mouseleave", function(e) {
				TweenLite.to(this, .4, {
					scale: 1,
					rotationX: 0,
					rotationY: 0,
					y: 0
				})
			})
		})
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
		NAY.FadeIn(),
		NAY.projectImage();
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