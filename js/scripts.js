$(function(){
	$('input[type=submit]').addClass('hvr-bounce-to-right');

	$('h2').addClass('shadow');
	$('div.logo').addClass('svg-shadow');
	$('div.hamburger').on('click', function(){
		// $('div.social').slideToggle('fast');
		$('div.primary').slideToggle();
		$(this).children().toggleClass('toggle-close');
		// $('div.toggle-bar').toggle(function(){
		// 	$('div.toggle-bar').addClass('toggle-close');
		// 	$('div.toggle-bar').addClass('toggle-close');
		// });
	});
	$('div.primary a').addClass('hvr-underline-from-center');
});