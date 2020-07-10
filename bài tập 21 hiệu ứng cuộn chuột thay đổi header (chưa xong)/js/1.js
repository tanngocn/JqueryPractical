$(document).ready(function() {
    $(window).scroll(function() {
        var vitribody = $('body,html').scrollTop();

        if (vitribody > 0) {
            console.log(vitribody);
            $('.header').addClass('noidung');

        } else {
            $('.header').removeClass('noidung');
        }

    });
});