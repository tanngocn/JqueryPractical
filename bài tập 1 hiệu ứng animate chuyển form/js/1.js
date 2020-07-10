$(document).ready(function() {
    $('.dangky').animate({ opacity: 0, marginLeft: -100 });

    $('.nutso1').click(function(e) {
        $('.dangnhap').animate({ opacity: 0, marginLeft: -100 });
        $('.dangky').animate({ opacity: 1, marginLeft: 0 });

    });
    $('.nutso2').click(function(e) {
        $('.dangky').animate({ opacity: 0, marginLeft: -100 });
        $('.dangnhap').animate({ opacity: 1, marginLeft: 0 });

    });
});