$(document).ready(function() {
    $('.content ul').isotope({
        itemSelector: 'li'
    });
    // code cho quick search
    $('.tukhoa').keypress(function(e) {
        if (e.keyCode == '13') {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content ul').isotope({
                filter: tu1
            });
        }
    });
    thoigian = setInterval(function() {
        tu1 = $('.tukhoa').val();
        tu1 = "." + tu1;
        $('.content ul').isotope({
            filter: tu1
        });
    }, 200);







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