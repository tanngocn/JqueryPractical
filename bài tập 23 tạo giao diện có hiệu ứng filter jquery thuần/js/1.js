$(document).ready(function() {
    // viết cho nút người
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        //    phát hiện data-class nút được click;
        var danhmuc = $(this).data('class');
        // thay đổi nút tiêu đề
        var ten = $(this).text();
        // trỏ đến thẻ h1 rồi thay thế ten vào h1 
        // phải gọi cho đúng class chứa thẻ đó
        $('.content h1').text(ten);
        $('.content ul li').each(function(index, element) {
            if ($(this).hasClass(danhmuc)) {
                $(this).show(500);
            } else {
                $(this).hide(500);
            }

        });
        // data (tên sau data-tên);
    });
});