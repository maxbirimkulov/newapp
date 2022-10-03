var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});


$('ul.directions__list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.directions__content').removeClass('active').eq($(this).index()).addClass('active');
});


var swiperStaff = new Swiper(".mySwiperStaff", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
});
