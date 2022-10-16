$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1500);
    });
});