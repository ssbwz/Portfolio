jQuery(document).ready(function ($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 10) {
			$('.ds-header').addClass('ds-fixed-header');
		}
		else {
			$('.ds-header').removeClass('ds-fixed-header');
		}
	}).scroll();

	
    // Typed Initiate
    if ($('.hero-text h2').length) {
        var typed_strings = $('.hero-text .typed-text').text();
        var typed = new Typed('.hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
	
	


});