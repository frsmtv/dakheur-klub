$(document).ready(function() {

    // LAUNCH
    $('#launch').click(function(){
      $('#launch').fadeOut();
    });

    // PROJECTS PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        $('#portfolio li').not(this).css('opacity', '.5');
        $(this).css('transform', 'scale(1.05)');
    });

    $('#portfolio li').mouseout(function(){
        $('#portfolio li').css('opacity', '1');
        $(this).css('transform', 'scale(1)');
    });

    // SLICK SLIDER
  //   $('.slider').slick({
  //   // setting-name: setting-value
  //     autoplay: true,
  //     dots: true
  // });

});
