$(document).ready(function() {


	$('.form').on('click', '.tabs', function() {
		$('.form').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab-form').eq($(this).index()).addClass('active');
	});


	$('.inp').focus(function() {
		$(this).parent().addClass("focus");
	}).blur(function() {
		if($(this).val()==='') {
			$(this).parent().removeClass("focus");
		}
	});

});