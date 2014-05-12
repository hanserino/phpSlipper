/*  ================================================================================
 DEFAULT PARAMETERS
 ================================================================================  */
var mobileWidth = 550,
	defaultAnimationSpeed = 300,
	defaultAnimationStartTimeout = 0,
	defaultFadeInDelay = 300,
	$smallClass = 'small',
	$mediumClass = 'medium',
	$largeClass = 'large';

var notificationTime = 10000000;


/*  ================================================================================
 CHECKS AND STUFF
 ================================================================================  */
function onResize() {
	var windowWidth = $(window).width();
	if (windowWidth <= mobileWidth) {
		$('body').addClass($smallClass);
	}
	else {
		$('body').removeClass($smallClass);
	}

}




/*  ================================================================================
 DOCUMENT READY
 ================================================================================  */
$(document).ready(function() {
	onResize();

	console.log('document ready');



	$('#devTrigger').click(function() {
		$('body').toggleClass('devMode');
	});



	


});

/*  ================================================================================
 WINDOW LOAD
 ================================================================================  */
$(window).load(function() {
	setTimeout(function(){$('body').addClass('docReady');}, defaultAnimationStartTimeout);
	setTimeout(function(){$('body').addClass('fadeInReady');}, (defaultAnimationStartTimeout + defaultFadeInDelay));
});


/*  ================================================================================
	ON RESIZE
 ================================================================================  */
$(window).resize(onResize);
