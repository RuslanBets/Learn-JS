$('.my_slider').slick({
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});