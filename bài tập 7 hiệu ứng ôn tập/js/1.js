$(document).ready(function() {
    $('.ndthem').slideUp();
    TweenMax.staggerFrom($('.ndbandau .khoi'), 1, { top: -200, opacity: 0 }, 0.5);
    $('.nutload').click(function(e) {
        e.preventDefault();
        $('.ndthem').slideDown(200);
        TweenMax.staggerFrom($('.ndthem .khoi'), 1, { left: -200, opacity: 0 }, 0.5);

    });

});