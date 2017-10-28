;
(function($) {
    var tabContainers = $('.js-tab-cont'),
        links = '.js-tab-link',
        active = 'tab-link--active',
        initialTab = $('.' + active).length > 0 ? $('.' + active)[0].hash : ':first';

    tabContainers.hide().filter(initialTab).show();
    $(links).filter('[href="#' + tabContainers.filter(initialTab).attr("id") + '"]').addClass('tab-link--active');

    $('.js-accordeon-link[href="#' + tabContainers.filter(initialTab).attr("id") + '"]').addClass('dropped');
    
    setTimeout(function() {
        tabContainers.filter(initialTab).trigger("tabInit");
    }, 500);


    $(links).click(function(e) {
        e.preventDefault();

        if (tabContainers.is(':animated')) {
            return false;
        }

        tabContainers.hide(); // прячем все табы

        if (!$(this).hasClass(active)) {
            tabContainers.filter(this.hash).show(); // показываем содержимое текущего
            $(links).removeClass(active); // у всех убираем класс active
            $(links + '[href="' + this.hash + '"]').addClass(active); // текушей вкладке добавляем класс active

        } else {
            tabContainers.filter(this.hash).hide(); // показываем содержимое текущего
            $(links).removeClass(active); // у всех убираем класс active
        }
        tabContainers.filter(this.hash).trigger("tabInit");
        return false;
    });

}($))