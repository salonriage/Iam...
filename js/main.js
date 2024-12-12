'use strict';

{
    // slick
    // $('.slider').slick({
    //     isFinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // });
    
    $('.slider').slick({
        dots: true,
        arrows: true,
        // prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        // nextArrow: '<div class="slide-arrow next-arrow"></div>',
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3400,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
      });

    
}