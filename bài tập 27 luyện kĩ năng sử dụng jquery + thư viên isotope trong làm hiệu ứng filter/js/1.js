$(document).ready(function() {
    $('.content').isotope({
        itemSelector: '.khoi'
    });
    $('.header ul li a').click(function(e) {
        e.preventDefault();
        var danhmuc = $(this).data('danhmuc');
        var ten = $(this).text();
        console.log(danhmuc);
        if (danhmuc == 'all') {
            $('.content').isotope({
                filter: '*'
            })
        } else {
            $('h1').text(ten);
            $(' .content ').isotope({
                filter: danhmuc
            })

        }


    });
});