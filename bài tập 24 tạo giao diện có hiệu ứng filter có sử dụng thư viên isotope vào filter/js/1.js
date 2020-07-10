$(document).ready(function() {
    $('.content ul').isotope({
        itemSelector: 'li'
    });
    // code cho nút nav
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        var danhmuc = $(this).data('danhmuc');
        var ten = $(this).text();
        if (danhmuc == 'all') {
            $('.content ul').isotope({
                filter: '*'
            });
        } else {
            $('.content h1').text(ten);
            $('.content ul').isotope({
                filter: danhmuc
            });
        }


    });
});