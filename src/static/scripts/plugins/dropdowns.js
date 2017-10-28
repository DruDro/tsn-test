;(function($) {
    var $dropdownLinks = $('.js-dropdown-link'),
        $dropdownConts = $('.js-dropdown-cont');

    $dropdownLinks.click(function(e) {
        e.preventDefault();
        e.stopPropagation;

        
        var $dropdownLink = $(this),
            $dropdownCont = $(this.hash);
        
        $dropdownCont.fadeToggle(300).toggleClass('dropped');
        $dropdownLink.toggleClass('dropped');            
        $dropdownConts.not($dropdownCont).fadeOut(300).removeClass('dropped');
        $dropdownLinks.not($dropdownLink).removeClass('dropped');

        $(window).resize();

        return false;
    });

    $(document).on('mouseup touchend', function(e) {
        if (!$(e.target).closest('.dropdown, .dropdown *, .js-dropdown-link').length) {
            $dropdownConts.fadeOut(300).removeClass('dropped');            
            $dropdownLinks.removeClass('dropped');            
        }
    });

}($))