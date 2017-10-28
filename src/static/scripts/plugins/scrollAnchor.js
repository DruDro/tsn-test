$(function(){
	function scrollAnhor() {
		var $links = $('.js-anchor');

		$links.on('click', function(e) {
			e.preventDefault();

			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);

			$(this.hash).animate({"background":"#f5fff2"},500);

			setTimeout(function(){
				$(this.hash).animate({"background":"transparent"},500);
			}, 300);			
		})
	}
	scrollAnhor();
});