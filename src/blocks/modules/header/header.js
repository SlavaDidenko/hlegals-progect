import $ from "jquery";
$(document).ready(function() {
    $('.header__lang').click(function(){
        $('.header__lang').removeClass('header__lang-active');
        $(this).addClass('header__lang-active');

    });
});
