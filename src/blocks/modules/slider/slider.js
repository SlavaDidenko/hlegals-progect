// import Swiper, { Navigation, Pagination } from 'swiper';
// // });
if (document.querySelector('.product__slider')) {
    let names = [];
    let slides = document.querySelectorAll('.product__slider .swiper-slide');
    slides.forEach(element => {
        let nameSlide = element.getAttribute('data-name');
        names.push(nameSlide);
    });

    let product = new Swiper('.product__slider', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 128,
        watchOverflow: true,
        speed: 800,
        // Dotts
        pagination: {
            el: '.product .pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (names[index]) + '</span>';
            }
        },
    });
}