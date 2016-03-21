var EPAMstore = (function($) {

    function init() {
        $('#menu_more').on('click', function() {
            if($(this).hasClass("opened")) {
                $(this).removeClass("opened");
                $(this).addClass("closed");
                $('.eHeaderBottom').slideUp();
            }else if($(this).hasClass("closed")) {
                $(this).removeClass("closed");
                $(this).addClass("opened");
                $('.eHeaderBottom').slideDown();
            }else {
                $(this).addClass("opened");
                $('.eHeaderBottom').slideDown();
            }
        });

        ensureShoesItemHeight();

        $(window).resize(function() {
            var menu_more = $('#menu_more');
            if($(window).width() > 720) {
                $('.eHeaderBottom').slideDown(10);
                menu_more.removeClass("closed");
                menu_more.removeClass("opened");
            }else {
                $('.eHeaderBottom').slideUp(10);
                menu_more.removeClass("opened");
                menu_more.addClass("closed");
            }

            // ensure main container items height
            ensureShoesItemHeight();

        });
    }

    function ensureShoesItemHeight() {
        var mainContainerItem = $('.eCommerceMain .eMainCenter .eShoesContainer1>div');
        var mainContainerItemWidth = $('.eCommerceMain .eMainCenter .eShoesContainer1>div').width();
        mainContainerItem.css('height', mainContainerItemWidth+'px');
    }

    function shopTab(element, selector) {
        var active = $('.eTabMenuItems .active');
        var activeLabel = $('.ePlaceholderContainer .active');
        active.removeClass('active');
        activeLabel.removeClass('active');
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
    EPAMstore.init();
}