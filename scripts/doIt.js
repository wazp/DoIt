var doIt = (function(){
	function init(){
		$('#p, #w, nav').css({
			height: $(window).height() - $('header').outerHeight()
		});
		// handle resize;
		$(window).on('resize.diHeight',function(){
			$('#p, #w, nav').css({
				height: $(window).height() - $('header').outerHeight()
			});
		});
	}
	
	return {
		init: init
	}
})(doIt);

$(function(){
	doIt.init();
});