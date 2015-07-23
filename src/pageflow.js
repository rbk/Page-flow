$(function(){

	// In page links
	$('a[href*=#]:not([href=#])').click(function() {
		$('#page-flow li').removeClass('active');
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			$(this).parent().addClass('active');
			target = target.length ? target : $('[page-flow=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
	$(window).scroll(function(){
		checkSection();
	});
	function checkSection() {
		$('[page-flow]').each(function(){
			var o = $(this).offset().top;
			var e = $(this).outerHeight();
			var w = $(window).scrollTop();
			var p = $(this).attr('page-flow');
			if(w > (o-200)) {
				$('#page-flow li').removeClass('active');
				$('.nav-'+p).parent().addClass('active');
			}
		});
    }
});
