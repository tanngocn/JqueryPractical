$(document).ready(function() {
    $('.ndmotkhoi').slideUp();
    $('.motkhoi h3').click(function(e) {

        // $('.ndmotkhoi').slideUp();
        // truoc khi xổ ra tất cả đều co lại click cái này cái kia co lại
        $(this).next().slideToggle();
        // chon chính h3 click rồi phân tử tiếp theo của h3 là p.ndmotkhoi 
        // slide Toggle là hiệu ứng tự co lên phù hơpk
        $(this).toggleClass('xanh')

    });
});