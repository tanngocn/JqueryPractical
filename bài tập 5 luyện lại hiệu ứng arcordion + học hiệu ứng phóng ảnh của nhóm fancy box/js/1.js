$(document).ready(function() {
    $('.nd_khoi').slideUp();
    // xu tinh nang them class
    $('.td_khoi').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('xanh');
        // xu ly hieu ung accordion
        $(this).next('.nd_khoi').slideToggle(800);
        //  xu hieu ung cuon chip
        $('body,html').animate({ scrollTop: $(this).offset().top }, 2000, 'easeOutElastic');


    });
    // xu ly hieu ung phong anh 
    $('.vaianh a').fancybox({
        'overlayShow': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });



});