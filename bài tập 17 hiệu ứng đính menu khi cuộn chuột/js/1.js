$(document).ready(function() {
    var vitrimenu = $('.header').offset().top;
    console.log(vitrimenu);
    $(window).scroll(function() {
        var vitribody = $('body,html').scrollTop();
        console.log(vitribody);
        if (vitribody >= vitrimenu) {
            $('.header').addClass('menubeo');
        } else {
            $('.header').removeClass('menubeo');
        }
    });
});