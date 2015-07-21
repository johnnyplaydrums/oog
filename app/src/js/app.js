var main = function() {
	$('.arrow-down').click(function() {
		$('body').animate({
			scrollTop: $('#about').offset().top - 60	
		}, 1000);
	});
};

$(document).ready(main());
