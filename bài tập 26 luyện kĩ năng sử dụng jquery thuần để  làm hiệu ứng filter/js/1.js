$(document).ready(function() {
    $('.header ul li a').click(function(e) {
        e.preventDefault();
        var danhmuc = $(this).data('danhmuc');
        var ten = $(this).text();
        $('.content h1').text(ten);
        if (danhmuc == 'all') {
            $('.content .khoi').show(500);
        } else {
            $('.content .khoi').each(function(index, element) {
                if ($(this).hasClass(danhmuc)) {

                    $(this).show(500);
                } else {
                    $(this).hide(500);
                }

            });

        }


    });
});