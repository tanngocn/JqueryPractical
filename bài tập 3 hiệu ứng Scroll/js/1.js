$(document).ready(function() {
    console.log('çhay chua');
    // kiểm tra jquery đã nhận chưa
    $('.menutren ul li:nth-child(1) a').on('click', function(e) {

        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.chapter1').offset().top }, 2000, "easeOutElastic");



    });
    $('.menutren ul li:nth-child(2) a').on('click', function(e) {

        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.chapter2').offset().top }, 2000, "easeOutElastic");



    });
    $('.menutren ul li:nth-child(3) a').on('click', function(e) {
        console.log('çlick chua');
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.chapter3').offset().top }, 2000, "easeOutElastic");



    });
    $('.menutren ul li:nth-child(4) a').on('click', function(e) {

        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.chapter4').offset().top }, 2000, "easeOutElastic");



    });
    $('.nutlentren').on('click', function(e) {

        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 2000);



    });
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 200) {
            $('.menutren').addClass('maunen');

        } else {
            $('.menutren').removeClass('maunen');
        }

    });


});