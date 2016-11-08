$(document).ready(function() {
	
	// navbar
	$('.wrapper .navbar-collapse').on('show.bs.collapse', function() {
		$('.navbar.js-navbar-top').toggleClass('navbar-default navbar-inverse');
		$(".navbar").toggleClass("js-toggleClass js-noToggleClass");
	});
	$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
    	$(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    	$(".navbar").toggleClass("js-toggleClass js-noToggleClass");
	});

	$(".navbar-nav > li > a").click(function() {
    	$(".navbar-collapse").collapse('hide');
	});

	$(".wrapper").waypoint(function() {
   	 	$(".navbar").toggleClass("js-navbar-top");
    	$(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
    	return false;
	}, { offset: "-20px" });

	// toggle sidebar 
	$('.js-toggle-sidebar').on('click', function(e) {
		e.preventDefault();
		console.log('aaaaa')
		$('.wrapper').toggleClass('js-wrapper-aside');
		$('.navbar').toggleClass('js-navbar-aside');
		$('.sidebar').toggleClass('js-sidebar-aside');
		return false
	})

	// smooth scroll to anchor
	$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 70) // 70px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });

	// carousel 
	$('#testimonials-carousel').owlCarousel({
		items: 2,
		navigation: true,
		navigationText: ['<i class="oi oi-arrow-left"></i>','<i class="oi oi-arrow-right"></i>']
	})
	// peity
	$('span.skills-iteam-pb').peity('donut', {
		fill: ['#f67280',"#eee"],
		height: 140,
		width: 140,
		innerRadius: 68,
		radius: 70
	});
	$('span.skills-iteam-pb').eq(1).peity('donut', {
		fill: ['#C06C84','#eee']
	});
	$('span.skills-iteam-pb').eq(2).peity('donut', {
		fill: ['#6c5b7b','#eee']
	});
	$('span.skills-iteam-pb').eq(3).peity('donut', {
		fill: ['#355C7D','#eee']
	});
	// lightbox
	lightbox.option({
		maxWidth: 608,
		maxHeight: 408
	})
	// animate
	$('.section-skills').waypoint(function() {

		setTimeout(function(){
			$('.skills-iteam').each(function() {
				$(this).css('visibility', 'visible')
			})
		},11);

		$(".skills-iteam-pb").each(function() {
			var $this = $(this);
			var updateChart = $this.peity('donut');
			var text = '';
			var i = 0;
			var arr = $this.text().split('/');
			var value = arr[0];
			var maxValue = arr[1];
			var step = value/100;

			(function myLoop() {
				setTimeout(function() {
					text = i + '/' + maxValue;
				updateChart.text(text)
							.change();
				i += step;
				if(i<=value) myLoop();
				},10)
			})();
		})

		this.destroy()
	}, {offset: '90%'});

	// WOW animations
	$(".wow").each(function() {
	    var wowHeight = $(this).height();
	    $(this).attr("data-wow-offset", wowHeight);
	});

	new WOW().init();
});
