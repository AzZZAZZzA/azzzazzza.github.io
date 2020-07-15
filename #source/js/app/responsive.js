$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h){
	var headerMenu=$('.header_menu');
	var headerLeft=$('.left');
	var headerRight=$('.right');
	if (w<767) {
		if(!headerLeft.hasClass('done')){
			headerLeft.addClass('done').appendTo(headerMenu);
			headerRight.addClass('done').appendTo(headerMenu);
		}
		}else{
			if(headerLeft.hasClass('done')) {
				headerLeft.removeClass('done').prependTo($('.header_row'));
				headerRight.removeClass('done').appendTo($('.header_row'));
			}
		

	}
}	
function adaptive_function() {
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();