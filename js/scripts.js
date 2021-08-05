$(document).ready(function() {

	$('.skill-list li').waypoint({
		handler: function(direction) {
			var $elm = $(this.element);
			var $percentage = $elm.find('.percentage');
			var value = $percentage.attr('data-percentage');
			$percentage.width(0).animate({
				width: value + '%'
			},2000)
		},
		offset: 'bottom-in-view'
	})

	$('.btn-top').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, "1000", 'swing')
	})

	$('.header-nav_mobile').on('click', function() {
		var $this = $(this);
		if($this.hasClass('active')) {
			$this.removeClass('active');
			$('.header-nav').slideUp('fast');
		}else {
			$this.addClass('active');
			$('.header-nav').slideDown('sloy');
		}
	})
});

document.addEventListener('DOMContentLoaded', function() {
		// фикс бага: пропадает навигационное меню после ресайза

	// https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event
	(function() {
		var throttle = function(type, name, obj) {
			obj = obj || window;
			var running = false;
			var func = function() {
				if (running) { return; }
				running = true;
				 requestAnimationFrame(function() {
					obj.dispatchEvent(new CustomEvent(name));
					running = false;
				});
			};
			obj.addEventListener(type, func);
		};
	
		/* init - you can init any event */
		throttle("resize", "optimizedResize");
	})();
	
	// handle event
	window.addEventListener("optimizedResize", function() {
		if (window.matchMedia("(max-width: 1000px)").matches) {
			$('.header-nav').removeAttr("style")
		}
	});
})