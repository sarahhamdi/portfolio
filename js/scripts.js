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
	$('h2').addClass('shadow');
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
		$(this).children().toggleClass('open toggle-close');
	});


});