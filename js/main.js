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

});
