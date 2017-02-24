$(document).ready(function() {

    // **** NAV FADEOUT ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('nav.moove').addClass('animated fadeOutUp')
        } else {
            $('nav.moove').removeClass('fadeOutUp').addClass('fadeInDown')
        }
    });

    // **** SCROLLA ****
    $('.animate').scrolla();

});