$(document).ready(function() {
    thoigian = setInterval(() => {
        $('.next').trigger('click');
    }, 3000);

    $('.next').click(function(e) {
        e.preventDefault();
        clearInterval(thoigian);
        var vao = $('.active').next();
        // xu li cho phần nút slide  
        var vitri = $('.xanh').index() + 1;
        // ban đầu luôn bằng =0 nên phải index +1;
        $('.nutslide ul li').removeClass('xanh');
        if (vitri == $('.nutslide ul li').length) {
            vitri = 0;
        }
        $('.nutslide ul li:nth-child(' + (vitri + 1) + ')').addClass('xanh');
        // xu li cho phần slide

        if (vao.length == 0) {
            $('.active').addClass('di-ra-ben-trai').one('webkitAnimationEnd', function(e) {
                $('.di-ra-ben-trai').removeClass('di-ra-ben-trai')
            });
            $('.anhslide ._1slide:first-child').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(e) {
                $('.active').removeClass('active');
                // add active o slide ke tiep roi remove di vao ben phai
                $('.di-vao-ben-phai').addClass('active').removeClass('di-vao-ben-phai');

            });
        } else {
            // chay xong di ra ben trai thi remove class đo luôn
            $('.active').addClass('di-ra-ben-trai').one('webkitAnimationEnd', function(e) {
                $('.di-ra-ben-trai').removeClass('di-ra-ben-trai')
            });
            vao.addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(e) {
                // xoa active truoc
                $('.active').removeClass('active');
                // add active o slide ke tiep roi remove di vao ben phai
                $('.di-vao-ben-phai').addClass('active').removeClass('di-vao-ben-phai');

            });
        }

    });
    $('.prev').click(function(e) {
        e.preventDefault();
        clearInterval(thoigian);
        var ra = $('.active').prev();
        // xu li cho phần nút slide
        var vitri = $('.xanh').index() + 1;
        // ban đầu luôn bằng =0 nên phải index +1;
        $('.nutslide ul li').removeClass('xanh');
        if (vitri == 1) {
            vitri = $('.nutslide ul li').length + 1;
        }
        $('.nutslide ul li:nth-child(' + (vitri - 1) + ')').addClass('xanh');
        // xu li cho phần slide
        if (ra.length == 0) {
            $('.active').addClass('di-ra-ben-phai').one('webkitAnimationEnd', function(e) {
                $('.di-ra-ben-phai').removeClass('di-ra-ben-phai')
            });
            $('.anhslide ._1slide:last-child').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(e) {
                $('.active').removeClass('active');
                // add active o slide ke tiep roi remove di vao ben phai
                $('.di-vao-ben-trai').addClass('active').removeClass('di-vao-ben-trai');

            });
        } else {


            $('.active').addClass('di-ra-ben-phai').one('webkitAnimationEnd', function(e) {
                $('.di-ra-ben-phai').removeClass('di-ra-ben-phai')
            });
            ra.addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(e) {
                // xoa active truoc
                $('.active').removeClass('active');
                // add active o slide ke tiep roi remove di vao ben phai
                $('.di-vao-ben-trai').addClass('active').removeClass('di-vao-ben-trai');

            });
        }


    });

    //jquey cho nut slide
    $('.nutslide ul li').click(function(e) {
        e.preventDefault();
        $('.nutslide ul li').removeClass('xanh');
        $(this).addClass('xanh');
        // xoa slide hien tai
        $('.active').addClass('di-ra-ben-phai').one('webkitAnimationEnd', function(e) {
            $('.di-ra-ben-phai').removeClass('di-ra-ben-phai')
        });
        // click vao nut nào nut đó chạy đến vị trí đó
        $('.anhslide ._1slide:nth-child(' + ($(this).index() + 1) + ')').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(e) {
            $('.active').removeClass('active');
            // add active o slide ke tiep roi remove di vao ben phai
            $('.di-vao-ben-trai').addClass('active').removeClass('di-vao-ben-trai');

        });

    });


});