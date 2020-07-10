$(document).ready(function() {

    $('.portfolio .khoiphotograph').animate({ opacity: 0, marginTop: -100 });
    $('.portfolio .khoiwebdesign').animate({ opacity: 0, marginTop: 100 });
    $('.portfolio .khoiprint').animate({ opacity: 0, marginLeft: -100 });
    // nhap vao nut all
    $('.portfolio a.nut_port:nth-of-type(1)').click(function(e) {
        e.preventDefault();

        $('.portfolio .khoiphotograph').animate({ opacity: 1, marginTop: 0 });
        $('.portfolio .khoiwebdesign').animate({ opacity: 1, marginTop: 0 });
        $('.portfolio .khoiprint').animate({ opacity: 1, marginLeft: 0 });
        $('.portfolio a.nut_port').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.portfolio a.nut_port:nth-of-type(4)').click(function(e) {
        e.preventDefault();

        $('.portfolio .khoiphotograph').animate({ opacity: 0, marginTop: 0 });
        $('.portfolio .khoiwebdesign').animate({ opacity: 0, marginTop: 0 });
        $('.portfolio .khoiprint').animate({ opacity: 1, marginLeft: 0 });
        $('.portfolio a.nut_port').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.portfolio a.nut_port:nth-of-type(3)').click(function(e) {
        e.preventDefault();

        $('.portfolio .khoiwebdesign').animate({ opacity: 1, marginTop: 0 });
        $('.portfolio .khoiprint').animate({ opacity: 0, marginLeft: 0 });
        $('.portfolio .khoiphotograph').animate({ opacity: 0, marginTop: 0 });
        $('.portfolio a.nut_port').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.portfolio a.nut_port:nth-of-type(2)').click(function(e) {
        e.preventDefault();

        $('.portfolio .khoiwebdesign').animate({ opacity: 0, marginTop: 0 });
        $('.portfolio .khoiprint').animate({ opacity: 0, marginLeft: 0 });
        $('.portfolio .khoiphotograph').animate({ opacity: 1, marginTop: 0 });
        $('.portfolio a.nut_port').removeClass('active');
        $(this).toggleClass('active');
    });
    // hieu ung cuon chuot  
    $('.menu .menuphai li.nav-item:nth-child(2) a.nav-link').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.about').offset().top }, 2000, "easeInOutElastic");
        $('.menu .menuphai li.nav-item').removeClass('active');
        $('.menu .menuphai li.nav-item:nth-child(2)').addClass('active');


    });
    $('.menu .menuphai li.nav-item:nth-child(3) a.nav-link').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.portfolio').offset().top }, 2000, "easeInOutElastic");
        $('.menu .menuphai li.nav-item').removeClass('active');
        $('.menu .menuphai li.nav-item:nth-child(3)').addClass('active');


    });
    $('.back .nutback').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 2000, "easeOutElastic");
        $('.menu .menuphai li.nav-item').removeClass('active');
        $('.menu .menuphai li.nav-item:nth-child(1)').addClass('active');

    });
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 100) {
            $('.menu').addClass('maunen');
            $('.logo').addClass('maulogo')
        } else {
            $('.menu').removeClass('maunen');
            $('.logo').removeClass('maulogo')
        }
    });

});