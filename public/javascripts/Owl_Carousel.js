
$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 3
            },
            1024: {
                items: 4
            },
            1440: {
                items: 5
            },
            2000: {
                items: 6
            }
        }
    })
});