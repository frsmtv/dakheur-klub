$(document).ready(function() {

    // PROJECTS PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        $('#portfolio li').not(this).css('opacity', '.5');
        // $('#portfolio li').not(this).css('transform', 'scale(.95)');
        // $(this).css('transform', 'scale(1.01)');
    });

    $('#portfolio li').mouseout(function(){
        $('#portfolio li').css('opacity', '1');
        // $(this).css('transform', 'scale(1)');
        // $('#portfolio li').not(this).css('transform', 'scale(1)');
    });

    // CONTACT FORM ANIMATION
    $('#formlink').click(function(){

        $('form').addClass('animated fadeIn');

        setTimeout(function() {
           $('form').removeClass("animated fadeIn");
        }, 1800);
   });

   //  NAV HOVER EFFECT ON SECTIONS
   // MAIN MENU
   $('#main-nav a').not('.active').mouseover(function(){
     $('#intro').css('opacity', '.4');
     $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('#main-nav a').not('.active').mouseout(function(){
     $('#intro').css('opacity', '');
     $('section').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   // SINGLE-PROJECTS NAV
   $('.next').mouseover(function(){
     $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('.next').mouseout(function(){
     $('section').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   $('.prev').mouseover(function(){
     $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('.prev').mouseout(function(){
     $('section').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   //  CONTACT FORM SUBMIT BUTTON ACTIVATION
  //  $(document).ready(function (){
  //   validate();
  //  $('.require').change(validate);
  //  });
   //
  //  function validate(){
  //      if ($('#first_name').val().length   >   0   &&
  //          $('#last_name').val().length  >   0   &&
  //          $('#email').val().length  >   0 ) {
  //          $('#envoyer').removeClass('disabled');
  //      }
  //      else {
  //        $('#envoyer').addClass('disabled');
  //      }
  //  }

   //  404 PAGE
   $('#houston').click(function(){
     $('#houston-nav').fadeIn();
     $('#error q').fadeOut();
   })

  //  MODAL
  // (Always put this function on bottom of document)
   $('#modal-content-1').apFullscreenModal({
     openSelector: '#formlink',
     closeSelector: '.close-modal, #send-1'
   });

});
