var EPAMjobs = (function($) {

    function init() {
        $('#menu_more').on('click', function() {
            var that = this;
            var eHeaderBottom = $('.eHeaderBottom');
            if($(that).hasClass("opened")) {
                $(that).removeClass("opened");
                $(that).addClass("closed");
                eHeaderBottom.slideUp();
            }else if($(that).hasClass("closed")) {
                $(that).removeClass("closed");
                $(that).addClass("opened");
                eHeaderBottom.slideDown();
            }else {
                $(that).addClass("opened");
                eHeaderBottom.slideDown();
            }
        });

        // attach click function onclick for tab menu items
        var eTabMenu = document.getElementById('eTabMenuItems');
        var eTabMenuItems = eTabMenu.getElementsByTagName("a");
        for (var i = 0; i < eTabMenuItems.length; i++) {
            var tabNumber = i+1;
            $(eTabMenuItems[i]).attr("onclick", "EPAMjobs.shopTab(this, "+tabNumber+")");
        }

        ensureAdvertisingItemHeight();

        $(window).resize(function() {
            var menu_more = $('#menu_more');
            var eHeaderBottom = $('.eHeaderBottom');
            if($(window).width() > 720) {
                eHeaderBottom.slideDown(10);
                menu_more.removeClass("closed");
                menu_more.removeClass("opened");

            }else {
                eHeaderBottom.slideUp(10);
                menu_more.removeClass("opened");
                menu_more.addClass("closed");

            }
            // ensure main container items height
            ensureAdvertisingItemHeight();
        });

    }

    function ensureAdvertisingItemHeight() {
        var mainContainerItem = $('.eCommerceMain .eMainCenter .eShoesContainer1>div');
        var mainContainerItemWidth = mainContainerItem.width();
        mainContainerItem.css('height', mainContainerItemWidth+'px');
    }

    function shopTab(element, selector) {
        $('.eTabTop .active').removeClass('active');
        $('.ePlaceholderContainer .active').removeClass('active');
        $(element).addClass('active');
        $('#tabPlaceholder'+selector).addClass('active');
        $('.eCurrentTab').hide();
        var appropriateTab = $('#eCurrentTab'+selector);
        appropriateTab.show();
    }

    return{
        init: init,
        shopTab: shopTab
    }
})(jQuery);

window.onload = function() {
    EPAMjobs.init();
};