$(document).ready(function() {

    // **** PROJECTS -> ACCORDION ****
    // $('.accordion').accordion({
    //     "transitionSpeed": 400
    // });

    // **** SCROLLA ****
    $('.animate').scrolla();

    $('li').mouseover(function(){
      $(this).find('h2').css('visibility', 'visible');
    });

    $('li').mouseout(function(){
      $(this).find('h2').css('visibility', 'hidden');
    });

});
