$(document).ready(function() {
    hoatdongtruoc = new TimelineMax({ onComplete: hdsauvao });
    hoatdongtruoc
    // hieu ung chay loading
        .to($('.cham1'), 0.1, { scale: 1.2, ease: Elastic.easeOut.config(1, 0.3) })
        .to($('.cham1'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham1'), 0.1, { scale: 1.2, ease: Elastic.ease })
        .to($('.cham1'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham1'), 0.1, { scale: 1.2, ease: Elastic.ease })
        .to($('.cham1'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham1'), 0.1, { scale: 1.2, ease: Elastic.ease })
        .to($('.cham1'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 1.2, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { scale: 0.9, ease: Elastic.ease }, "+=0.2")



    // hieuung hop nhat
    .to($('.cham3'), 0.2, { right: 651, ease: Elastic.ease }, "+=0.2")
        .to($('.cham4'), 0.2, { left: 652, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.2, { right: 651, ease: Elastic.ease }, "+=0.2")
        .to($('.cham1'), 0.2, { left: 652, ease: Elastic.ease }, "+=0.2")
        // hiệu ứng bùng nổ
        .to($('.cham4'), 0.5, { scale: 5, opacity: 0, ease: Elastic.ease }, "+=0.2")
        .to($('.cham3'), 0.5, { scale: 5, opacity: 0, ease: Elastic.ease }, "+=0.2")
        .to($('.cham2'), 0.5, { scale: 5, opacity: 0, ease: Elastic.ease }, "+=0.2")
        .to($('.cham1'), 0.5, { scale: 5, opacity: 0, ease: Elastic.ease }, "+=0.2")
        // ketthuc  
        .to($('.truoc'), 4, { x: 2000, opacity: 0, ease: Elastic.easeOut }, "+=0.2")


    hoatdongsau = new TimelineMax({ paused: true });

    hoatdongsau.from($('hr.vientren'), 0.5, { x: 2000, ease: Elastic.ease })
        .from($('hr.vienduoi'), 0.5, { x: -2000, ease: Elastic.ease }, "+=0.5")
        .from($('.logo img'), 1, { scale: 0.3, opacity: 0 }, "+=0.5")
        .from($('.td'), 0.5, { x: 1000, opacity: 0, ease: Elastic.ease }, "+=1")
        .staggerFrom($('.khoi'), 0.5, { y: 400, opacity: 0, ease: Bounce.ease }, 0.2)

    function hdsauvao() {
        hoatdongsau.
        play();
    }
});