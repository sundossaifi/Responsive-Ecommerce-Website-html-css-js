// swiper slide side-bar 
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});

// swiper slide sale-sec
var swiper = new Swiper(".sale-sec", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
        },
    }
});


// swiper slide product-swip
var swiper = new Swiper(".product-swip", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1500: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
});