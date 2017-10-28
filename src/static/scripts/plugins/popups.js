;(function($) {
    var $popups = $('.popup'),
        $wrapper = $('<div class="popup-wrapper"></div>'),
        $closeBtn = $('<a href="#" class="btn btn--close js-popup-close"><svg><use xlink:href="#delete"/></svg></a>');

    $popups.hide();

    $('.js-popup').click(function(e) {
        e.preventDefault();
console.log(e.target);
        var $popup = $(this.hash),
            $closePos = $popup.data('close');

        if($popup.parent('.popup-wrapper').length == 0){
            $popup.wrap($wrapper);            

            if ($closePos == 'wrapper') {
                $('.popup-wrapper').append($closeBtn);
            } 
            else if ($closePos == 'popup') {
                $popup.prepend($closeBtn);
            }

            $popup.closest('.popup-wrapper').hide().fadeIn(300);
            $popup.fadeIn(300);

            $(window).resize();
        }
    });

    $(document).on("click", ".js-popup-close", function(e) {
        e.preventDefault();
        var $poplink = $(this);
        $poplink.closest('.popup-wrapper').fadeOut(300);
        setTimeout(function() {
            $poplink.closest('.popup').hide().unwrap('.popup-wrapper');
            $poplink.closest('.popup-wrapper').find('.btn--close').remove();
        }, 300);
    });

    $(document).on('mouseup touchend', function(e) {
        if (!$(e.target).closest('.popup, .popup *, js-popup-close, .js-popup').length) {

            $('.popup-wrapper').fadeOut(300);

            setTimeout(function() {
                $('.popup-wrapper').find('.btn--close').remove();
                $('.popup-wrapper').find('.popup').hide().unwrap('.popup-wrapper');
            }, 300);
            
        }
    });

}($))
