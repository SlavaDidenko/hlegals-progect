import $ from "jquery";
$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').addClass('open-menu');
        $('.header__navigation').addClass('open-menu');
    });
    $('.header__close-btn').click(function(){
        $('.menu-burger__header').removeClass('open-menu');
        $('.header__navigation').removeClass('open-menu');
    });
});