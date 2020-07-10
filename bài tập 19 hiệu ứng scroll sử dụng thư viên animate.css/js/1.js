$(document).ready(function() {
    $(window).scroll(function() {
        var vitribody = $('body,html').scrollTop();
        var vitrigiaodien = $('.khoigd').offset().top;
        vitrigiaodien = vitrigiaodien - 500;
        if (vitribody >= vitrigiaodien) {
            $('.khoigd .khoi:nth-child(1)').addClass('fadeInRight animated');
            $('.khoigd .khoi:nth-child(2)').addClass('bounceInLeft animated');
            $('.khoigd .khoi:nth-child(3)').addClass('flipInX animated');
            $('.khoigd .khoi:nth-child(4)').addClass('flipInY animated');
            $('.khoigd .khoi:nth-child(5)').addClass('slideInUp animated');
            $('.khoigd .khoi:nth-child(6)').addClass('zoomIn animated');
            $('.khoigd .khoi:nth-child(7)').addClass('jaxInTheBox animated');
            $('.khoigd .khoi:nth-child(7)').addClass('fadeInRight animated');
        }
    });
});