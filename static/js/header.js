$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 123.2){
            $('#nav').addClass('sticky');
        }else{
            $('#nav').removeClass('sticky');
        }
    });
});