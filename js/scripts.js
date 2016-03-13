$(function(){

	// smooth scroll or internal links
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// animates submit button
	$('input[type=submit]').addClass('hvr-bounce-to-right');

	// adds blue shadows to headers + logo
	// $('h2').addClass('shadow');
	$('div.logo').addClass('svg-shadow');

	// toggles nav hamburger animation + displays nav
	$('div.hamburger').on('click', function(){
		$('div.primary').slideToggle();
		$(this).children().toggleClass('open toggle-close');
	});

	// adds underline animation to nav menu items
	$('div.primary a').addClass('hvr-underline-from-center');
	
	// closes nav when someone clicks on a nav link
	$('div.primary a').on('click', function(){
		$('div.primary').slideToggle();
		$('div.hamburger').children().toggleClass('toggle-close open');
		// $(this).children().toggleClass('open toggle-close');
	});

	// animations on scroll function
	window.isScrolledIntoView = function($elem) {
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();

		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	// animates portfolio items + shadow on H2s on scroll using function above
	$(window).on('scroll', function(){

		$('.animate').each(function(){

			var $el = $(this);
			if(isScrolledIntoView($el)) {
				$el.addClass('visible');
			}
		});

		$('h2').each(function(){

			var $el = $(this);
			if(isScrolledIntoView($el)) {
				$el.addClass('shadow');
			}

		})
	})

	$(window).resize(function(){
	if ($(window).width() <= 500){	
		$('article.portfolio-piece').removeClass('animate visible');
	}	
});



});