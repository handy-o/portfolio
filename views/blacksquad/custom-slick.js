$(document).ready(function() {
    /* sec2 섹션 슬라이드 */
    $('#slide-wrap').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnHover : true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    /* sec3 미디어 슬라이드 */
    $('.video-slider-view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.video-slider-thumb',
        afterChange: function (slickSlider, i) {
            //remove all active class
            $('.video-slider-thumb .slick-slide').removeClass('slick-active');
            //set active class for current slide
            $('.video-slider-thumb .slick-slide').eq(i).addClass('slick-active');
        }
    });
    $('.video-slider-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.video-slider-view',
        /*dots: true,*/
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    $('.image-slider-view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.image-slider-thumb',
        afterChange: function (slickSlider, i) {
            //remove all active class
            $('.image-slider-thumb .slick-slide').removeClass('slick-active');
            //set active class for current slide
            $('.image-slider-thumb .slick-slide').eq(i).addClass('slick-active');
        }
    });
    $('.image-slider-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.image-slider-view',
        /*dots: true,*/
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });


    /* sec3 미디어 팝업 슬라이드 */
    $('#slickScreenshot').slick({
        slide: 'div',
        dots: false,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
    });
    //특정 캐릭터 번호에 맞춰 슬라이드 시작하기
    window.fnSlideScreenshot = function (idx) {
        $('#slickScreenshot').slick('setPosition');

        $('.shadow.screenshot, #screenshot').fadeIn();
        $('.layer-wrap#screenshot').css({'visibility': 'visible'}).stop().animate({'opacity':'1'});
        $('#slickScreenshot').slick('slickGoTo', idx - 1);
    }
});