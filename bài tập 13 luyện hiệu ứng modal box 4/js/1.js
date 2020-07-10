$(document).ready(function() {
    $('.nut').click(function(e) {
        e.preventDefault();
        $('.noidung').addClass('ndhienra');
        $('.nen').addClass('nenhienra');

    });
    $('.nutclose,.nen').click(function(e) {
        e.preventDefault();
        $('.noidung').removeClass('ndhienra');
        $('.nen').removeClass('nenhienra');

    });

});