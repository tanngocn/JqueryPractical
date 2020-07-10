$(document).ready(function() {
    $(window).scroll(function() {
        var vitribody = $('body,html').scrollTop();
        var vitrigiaodien = $('.khoigd').offset().top;
        vitrigiaodien = vitrigiaodien - 500;
        if (vitribody >= vitrigiaodien) {
            $('.khoigd').addClass('hienra');
        }
    });
});