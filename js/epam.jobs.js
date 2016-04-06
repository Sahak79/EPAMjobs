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

        // get search parameter and set location to search page with appropriate parameter
        var jobTitle = getParameterByName("what");
        var whatInput = $('#whatInput');
        if(jobTitle !== null) {
            whatInput.val(jobTitle);
        }
        $('#searchBtn').on('click', function() {
            location.href = '/EPAMjobs/pages/search.html?what='+whatInput.val();
        });

        // attach click function for tab menu items
        var eTabMenu = document.getElementById('eTabMenuItems');
        if(eTabMenu != null) {
            var eTabMenuItems = eTabMenu.getElementsByTagName("a");
            for (var i = 0; i < eTabMenuItems.length; i++) {
                var tabNumber = i+1;
                $(eTabMenuItems[i]).attr("onclick", "EPAMjobs.shopTab(this, "+tabNumber+")");
            }
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

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    return{
        init: init,
        shopTab: shopTab,
        getParameterByName: getParameterByName
    }
})(jQuery);

window.onload = function() {
    EPAMjobs.init();
};