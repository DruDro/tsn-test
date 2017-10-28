$(function(){	
    var $accordeonLinks = $('.js-accordeon-link');

    $accordeonLinks.click(function(e) {
        e.preventDefault();
        e.stopPropagation;

        var $accordeonLink = $(this),
            $accordeonCont = $(this).next('.js-accordeon-cont');

        $accordeonCont.slideToggle(300).toggleClass('dropped');
        $accordeonLink.toggleClass('dropped');     
        if($accordeonLink.closest('.js-accordeon').hasClass('egoistic')){        	
	        $accordeonCont.closest('.js-accordeon').find('.js-accordeon-cont').not($accordeonCont).slideUp(300).removeClass('dropped');
	        $accordeonLink.closest('.js-accordeon').find('.js-accordeon-link').not($accordeonLink).removeClass('dropped');
        }
	});
});