$(document).ready(function() {
    new WOW().init();
    $('body,html').scrollspy({ target: '.menutren' });
    $('.menutren ul li a ').click(function(e) {
        e.preventDefault();
        var vitri = $(this).attr('href');
        var toado = $(vitri).offset().top;
        $('body,html').animate({ scrollTop: toado });

    });
});