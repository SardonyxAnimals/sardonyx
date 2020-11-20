$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#navegacao').addClass('navevagacao-fixed-top', 500);
        } else {
            $('#navegacao').removeClass('navegacao-fixed-top', 500);
        }
    });
});