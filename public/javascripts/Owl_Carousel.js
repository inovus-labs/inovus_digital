
$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            320: {
                items: 4
            },
            768: {
                items: 4
            },
            1024: {
                items: 4
            },
            1440: {
                items: 6
            },
            2000: {
                items: 10
            }
        }
    })
});