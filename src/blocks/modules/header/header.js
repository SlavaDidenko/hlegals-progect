import $ from "jquery";
$(document).ready(function() {
    $('.header__lang').click(function(){
        $('.header__lang').removeClass('header__lang-active');
        $(this).addClass('header__lang-active');

    });

    $("a.main-section__scroll-btn").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});
