$(document).ready(function() {

    // SCROLLA
    // $('.animate').scrolla();

    // LAUNCH
    $('#launch').click(function(){
      $('#launch').hide();
      $('header').fadeIn();
      $('#intro').fadeIn();
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
    $('.slider').slick({
    // setting-name: setting-value
      autoplay: true,
      dots: true
  });

});
