
function scroll_to(clicked_link, nav_height) {
	var class_elem = $(clicked_link).attr('href').replace('#',  ".");
	var scroll_to = 0;
	if(class_elem != '.top-content') {
		class_elem += "-container";
		scroll_to = $(class_elem).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 2000)
	}
}


$(document).ready(function() {

	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$("#"+$(this).data('modal-id')).modal()
	});

	new WOW().init()
	
	$(".top-content").backstretch("img/bg_1.jpg");
	$('.how-it-works-container').backstretch("img/bg_1.jpg");
	$('.call-to-action-container').backstretch("img/bg_1.jpg");

	$('.nav-toggle').click(function(e) {
		if($(this).hasClass('on')) {
			$(".nav-list").slideUp('sloy')
			$(this).removeClass('on')
		}else {
			$('.nav-list').slideDown('sloy')
			$(this).addClass('on')
		}
	});

	$(".tab-cont:first").show();
	$(".nav-tabs li a").click(function() {
		$(".nav-tabs li").removeClass("active").eq($(this).closest('li').index()).addClass("active");
		$(".tab-cont").hide().eq($(this).closest('li').index()).fadeIn(1300)
	}).eq(0).addClass("active");
});