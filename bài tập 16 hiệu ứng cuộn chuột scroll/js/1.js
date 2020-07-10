$(document).ready(function() {
    $(window).scroll(function() {
        console.log('bạn đã cuộn chuột');
        var vitri = $('body,html').scrollTop();
        if (vitri > 400) {
            $('.header').addClass('bienhinh');
        } else {
            $('.header').removeClass('bienhinh');
        }
    });
});