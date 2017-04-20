$(document).ready(function() {

    // PROJECTS PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        $('#portfolio li').not(this).css('opacity', '.5');
        $('#portfolio li').not(this).css('transform', 'scale(.95)');
        $(this).css('transform', 'scale(1.01)');
    });

    $('#portfolio li').mouseout(function(){
        $('#portfolio li').css('opacity', '1');
        $(this).css('transform', 'scale(1)');
        $('#portfolio li').not(this).css('transform', 'scale(1)');
    });

    // CONTACT FORM ANIMATION
    $('#formlink').click(function(){

        $('form').addClass('animated fadeIn');

        setTimeout(function() {
           $('form').removeClass("animated fadeIn");
        }, 1800);
   });

  //  MODAL
   $('#modal-content-1').apFullscreenModal({
     openSelector: '#formlink',
     closeSelector: '.close-modal, #send-1'
   });

});
