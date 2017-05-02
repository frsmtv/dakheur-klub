$(document).ready(function() {

    // PROJECTS PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        $('#portfolio li').not(this).css('opacity', '.5');
    });

    $('#portfolio li').mouseout(function(){
        $('#portfolio li').css('opacity', '1');
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

   //  404 PAGE
   $('#houston').click(function(){
     $('#houston-nav').fadeIn();
     $('#error q').fadeOut();
   })

   // SCROLLA
   $('.animate').scrolla();

});
