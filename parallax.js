(function() {

	function check() {
		var current_scroll = $(this).scrollTop();

	    oVal = ($(window).scrollTop() / 3);
	    console.log(oVal)
		$(".parallax") .css({
	        'background-position': ' -0 ' + oVal + 'px',
	      
	    });
	}
	

    $(window).on('scroll', check);


})();
     