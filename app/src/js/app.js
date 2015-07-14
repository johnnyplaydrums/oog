var main = function() {
	
	//Adjust background photo based on browser height
	var height = $(window).height();
	console.log(typeof height);
	$('body').css('background-size', height)

};

$(document).ready(main());
