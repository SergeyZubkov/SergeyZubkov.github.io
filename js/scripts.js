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

	if($('#form').length) {
		$("#form").submit(function() {
	        var form_data = $(this).serialize(); //собераем все данные из формы
	        $.ajax({
		        type: "POST", //Метод отправки
		        url: "send.php", //путь до php фаила отправителя
		        data: form_data,
		        success: function() {
		               //код в этом блоке выполняется при успешной отправке сообщения
		               alert("Ваше сообщение отпрвлено!");
		        }
	        });
    	});
	}
});