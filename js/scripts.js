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
			$('body').animate({
				scrollTop: 0
			}, "1000", 'swing')
	})
});