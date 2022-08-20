/* 섹션스크롤 */
function secScrollnone() {
    //$("#content section").unbind('mousewheel DOMMouseScroll');
    //첫페이지만 스크롤 되게
    $('#sec1').on("mousewheel DOMMouseScroll", function (e, delta) {
        if (delta) {
            if (window.opera) delta = -delta;
        }
        if (delta < 0) {
            if (undefined != $(this).next() ) {
                var moveTop = $('#sec2').offset().top;
                $("html,body").stop().animate({'scrollTop': moveTop});
            }
            // 마우스휠을 아래에서 위로
        } else {
        }
    });
}
secScrollnone();

$(document).ready(function() {
    AOS.init();
    var winWidth = window.innerWidth;
    // 메인 백그라운드 영상
    function setVideo() {
        var winWidth = $(window).innerWidth();
        var myVideo = $('#main_video').get(0);

        if(  winWidth > 1024 ) {
            $('#main_video').attr('poster', 'https://file.valofe.com/Valofe_file/web/blacksquad/video/bg-main.jpg');
            $('#main_video').css('display', 'block');
            $('#main_video *').remove();
            $('#main_video').append("<source src='https://file.valofe.com/Valofe_file/web/blacksquad/video/Black_Squad_cut.webm' type='video/webm'><source src='https://file.valofe.com/Valofe_file/web/blacksquad/video/Black_Squad_cut.mp4' type='video/mp4'> ");
            //myVideo.currentTime = 0;
            myVideo.play();
        } else {
            $('#main_video').attr('poster', 'https://file.valofe.com/Valofe_file/web/blacksquad/video/bg-main-m.jpg');
            $('#main_video').css('display', 'none')
            $('#main_video *').remove();
            myVideo.pause();
        }
    }
    setVideo();


    //header 위치
    function setHeaderTop() {
        var thisScroTop = $(this).scrollTop();
        //console.log('thisScroTop:'+ thisScroTop);
        if( thisScroTop <= 60) {
            //console.log('aa')
            $('#header').css({'top':60 - thisScroTop +'px' });
        } else {
            $('#header').css({'top':0});
        }
    }
    setHeaderTop();
    // header nav-2depth 보이기/숨기기
    function hide2Depth() {
        if( $(this).hasClass('on') == true) {
            $('#header .row-w').css({'overflow':'visible'});
            $(this).find('ul').css({'display':'inline-block'});
        } else {
            $('#header .row-w').css({'overflow':'hidden'});
            $(this).find('ul').css({'display':'none'});
        }
    }
    function show2Depth() {
            $('#gnb li').on('mouseover', function() {
                if( winWidth > 1280) {
                $('#gnb li .nav-2depth').css({'display':'none'});
                $('#header .row-w').css({'overflow':'visible'});
                $(this).find('ul').css({'display':'inline-block'});
                } else {}
            }).on('mouseleave', function() {
                hide2Depth();
            });
    }
    show2Depth();

    // 로드 된 스크롤 위치의 메뉴 활성화 하기
    function navOn() {
        var windowHt = $(window).height();
        var nowTop = $(window).scrollTop();
        /*var thisIndex = Math.ceil(nowTop / windowHt);*/
        var thisIndex = Math.round(nowTop / windowHt - 0.3);
        //console.log(thisIndex)
        $('#header .row-w').css({'overflow':'hidden'});
        $('#gnb li .nav-2depth').css({'display':'none'});

        $('#gnb > li').removeClass('on');
        $('#gnb > li').each(function (e) {
            if (e == thisIndex) {
                switch (thisIndex) {
                    case 0 :
                        $('#gnb > li').eq(0).addClass('on');
                        break;
                    case 1 :
                        $('#gnb > li').eq(1).addClass('on');
                        break;
                    case 2 :
                        $('#header .row-w').css({'overflow':'visible'});
                        $('#gnb > li').eq(2).addClass('on');
                        break;
                    case 3 :
                        $('#gnb > li').eq(2).addClass('on');
                        break;
                    case 4 :
                        $('#gnb > li').eq(3).addClass('on');
                        break;
                    case 5 :
                        $('#gnb > li').eq(4).addClass('on');
                        break;
                }
            };
        }); // END each FUNCITON
    };
    navOn();
    // 네비 클릭시 위치로 이동
    function goNav() {
        $('#gnb > li > a').on('click', function() {
            if( $(this).hasClass('no-scroll') ) {

            } else {
                var secIndex = $(this).parent().index() ;
                var secTop = $('section').eq(secIndex).offset().top;
                $('html, body').stop().animate({

                    scrollTop: secTop
                }, 400);
                if(winWidth < 1024) {
                    $('.btn-shadow').fadeOut();
                    $('#header').stop().animate({'right':'-280px'});
                    $('#header').removeClass('on');
                }
            }

        });
    };
    goNav();

    // 타이틀 세로 중앙정렬
    var vertiHeight = function () {

        var row1Half = $('#sec1 .row-w').height();  //요소의 높이만 측정 (계산된 padding값이 영향을 줌)
        var winH = $(window).outerHeight();
        var calcPadding = Math.abs( winH - row1Half ) / 2;
        var alittle = winH / 11;

       /* console.log('sec1:' + row1Half)
        console.log('wind:' + winH)*/

        if( window.innerWidth <= window.innerHeight) { // 세로 긴 화면
            //$('#sec1 .row-w').css('padding-top', 'calc(' + calcPadding + 'px + 10vh)');
            $('#sec1 .row-w').css('padding-top',  calcPadding + alittle + 'px');
        } else {    //일반 화면
            $('#sec1 .row-w').css('padding-top', calcPadding + 30 + 'px');   // +30은 헤더의 높이의 반정도만 더
        }


        /*
        calcPadding = Math.abs( winH - row1Half ) / 2 + 30; // +30은 헤더의 높이의 반정도만 더
        $('#sec1 .row-w').css('padding-top', calcPadding + 'px');
        */


    };
    vertiHeight();
    setTimeout(function() {
        vertiHeight();
    },200)

    /* 스크롤 펑션 */
    $(window).scroll(function() {
       /* if( winWidth > 1024 ) {setHeaderTop();}*/
        setHeaderTop();
        navOn();
    });
    window.addEventListener('resize', function() {
        winWidth = window.innerWidth;
        show2Depth();
        hide2Depth();
        setVideo();
        vertiHeight();
        navOn();
        setNav();
        fnPcFloating();
        holeGageBar();
        /*inviteTabSlide();*/
    });

    //모바일 헤더 보이기
    window.fnToggleNav = function() {
        if( $('#header').hasClass('on') == true ) {
            $('.btn-shadow').fadeOut();
            $('#header').stop().animate({'right':'-280px'});
            $('#header').removeClass('on');
        } else {
            $('.btn-shadow').fadeIn();
            $('#header').stop().animate({'right':'0'});
            $('#header').addClass('on');
        }
    }
    //모바일 헤더 위치
    window.setNav = function() {
        if(winWidth > 1280) {
            $('#header').css({'right':'0'});
        } else {
            $('.btn-shadow').fadeOut();
            $('#header').css({'right':'-280px'});
            $('#header').removeClass('on');
        }
    }

    // sec4 슬라이드
    $('#slide-wrap').on('beforeChange', function (event, slick, currentSlide) {
        var currentSlide = slick.slickCurrentSlide() + 1 ;
        //console.log(currentSlide);
        $('#sec4').css({'background-image' : 'url(https://file.valofe.com/Valofe_file/web/blacksquad/images/landing/teaser/sec2/bg-sec2-'+ currentSlide + '.jpg?123)', 'transition':'background 0.4s'});
        if ( currentSlide == 3 ){
            $('.chr-wrap, .bg-top').fadeIn('fast');
            $('#sec4 .slick-prev').css({'background':'url(https://file.valofe.com/Valofe_file/web/blacksquad/images/landing/teaser/arrow-prev2.png)no-repeat center / auto'});
            $('#sec4 .slick-next').css({'background':'url(https://file.valofe.com/Valofe_file/web/blacksquad/images/landing/teaser/arrow-next2.png)no-repeat center / auto'});
        } else {
            $('.chr-wrap, .bg-top').fadeOut('fast');
            $('#sec4 .slick-prev').css({'background':'url(https://file.valofe.com/Valofe_file/web/blacksquad/images/landing/teaser/arrow-prev.png)no-repeat center / auto'});
            $('#sec4 .slick-next').css({'background':'url(https://file.valofe.com/Valofe_file/web/blacksquad/images/landing/teaser/arrow-next.png)no-repeat center / auto'});
        }
    });

    // sec5 미디어 탭
    $('.tab-name li a').on('click', function() {
        var tabIndex = $(this).parent().index();

        $('.tab-name li').removeClass('on');
        $(this).parent().addClass('on');
        $('.media-wrap > div').css({'display':'none'}); //초기화
        $('.media-wrap > div').eq(tabIndex).css({'display':'block'});

        //console.log(tabIndex);
        $('.image-slider-view').slick('setPosition');
        $('.image-slider-thumb').slick('setPosition');
        $('.video-slider-view').slick('setPosition');
        $('.video-slider-thumb').slick('setPosition');
    });
    $('.tab-name li:nth-child(1) a').trigger('click');
    // 영상 팝업
    window.fnMediaPlay = function (idx) {

        /*  var isIE8 = $.browser.msie && +$.browser.version === 8;
          if (isIE8) {
              $('.shadow.media, #media').css({'display':'block', 'opacity':1});
          }*/
        switch(parseInt(idx)){
            case 1:
                $("#media_popup1").attr('src', 'https://file.valofe.com/Valofe_file/web/blacksquad/video/1st_promotion_video.webm');
                $("#media_popup2").attr('src', 'https://file.valofe.com/Valofe_file/web/blacksquad/video/1st_promotion_video.mp4');
                break;
            /*case 2:
                $("#media_popup1").attr('src', '/static/video/main/cl1.webm');
                $("#media_popup2").attr('src', '/static/video/main/cl1.mp4');
                break;
            case 3:
                $("#media_popup1").attr('src', '/static/video/main/cl2.webm');
                $("#media_popup2").attr('src', '/static/video/main/cl2.mp4');
                break;*/
        }
        $("#media_popup").get(0).load();
        $("#media_popup").get(0).play();
        $('.shadow-pop.media, #media').css({'visibility': 'visible'}).stop().animate({'opacity':'1'});
        return false;
    };
    // 미디어 팝업 닫기
    window.fnClosePopup = function() {
        $("#media_popup").get(0).pause();
        $('.shadow-pop, .btn-shadow, .layer-wrap').stop().animate({'opacity':'0'}).css({'visibility':'hidden'});
        return false;
    }


    // 사전예약 - 버튼 클릭 시 #sec(n) 으로 이동
    window.goSec = function(n) {
        if( n == 1) {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 400);
        } else {
            $('html, body').stop().animate({
                scrollTop: $('#sec' + n).offset().top
            }, 400);
        }

    }

    // 사전예약 - 친구초대 탭 슬라이드
    /*function inviteTabSlide() {
        if( winWidth > 768) {
            $('#inviteWrap').not('.slick-initialized').slick({  // error 로 not 추가
                dots: false,
                speed:100,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                pauseOnHover : true,
                fade:true,
            });
        } else {
            $('#inviteWrap').filter('.slick-initialized').slick('unslick');
        }
    }
    inviteTabSlide();
    $('#inviteWrap').on('afterChange', function (event, slick, currentSlide) {
        var currentSlide = slick.slickCurrentSlide();
        if ( currentSlide == 1 ){
            $('#sec3').css({'background-image' : 'url(/static/images/landing/reserve/invitation-event/bg-recom.jpg)'});
        } else {
            $('#sec3').css({'background-image':'url(/static/images/landing/reserve/invitation-event/bg-invite.jpg)'});
        }
    });*/
    // 사전예약 - 친구초대 탭 수크롤+LI
    $('.invite-link li a').on('click', function() {
        // 스크롤
        var inx = $(this).parent().index();
        $('html, body').stop().animate({
            scrollTop : $('#inviteWrap > li').eq(inx).offset().top
        }, 400);
        // 탭
        /*$('#inviteWrap').slick('slickGoTo', inx);*/
        /*$('#inviteWrap > li').removeClass('on');
        $('#inviteWrap > li').eq(inx).addClass('on')
        if( inx == 1) { // 추천인보상
            $('#sec3').css({'background-image':'url(/static/images/landing/reserve/invitation-event/bg-recom.jpg)'});
        } else {    // 친구초대
            $('#sec3').css({'background-image':'url(/static/images/landing/reserve/invitation-event/bg-invite.jpg)'});
        };*/
    });


    // 사전예약 - 게임정보 2depth
    $('.info-link li a').on('click', function() {
        // 스크롤
        $('html, body').stop().animate({
            scrollTop : $('#sec4').offset().top
        }, 400);
        var inxInfo = $(this).parent().index();
        // 탭
        $('#slide-wrap').slick('slickGoTo', inxInfo);

    });

    // 사전예약 - 공유하기
    window.fnShowSnsShare = function() {
        $('.do-share').toggleClass('on');
        $('.sns-wrap').fadeToggle().toggleClass('on');
    }

    // 사전예약 - 안내문구 텍스트 팝업 띄우기
    window.fnPopTxt = function() {
        $('.shadow.text, #text').fadeIn().stop().animate({'opacity':'1'});
        $('.layer-wrap#text').css({'visibility': 'visible'}).stop().animate({'opacity':'1'});
    }

    // 모바일 플로팅 배너 닫기
    window.fnCloseFloating = function() {
        $('#floating .close-float').css({'display':'none'});
        $('.floating-reserve').toggleClass('mb');
    }
    // 리사이즈 시
    function fnPcFloating() {
        if( winWidth > 1024 && $('.floating-reserve').hasClass('mb') == true) {
            $('.floating-reserve').removeClass('mb');
        } else  if( winWidth > 1024 && $('.floating-reserve').hasClass('mb') == false) {
            $('#floating .close-float').css({'display':'none'});
            $('.floating-reserve').removeClass('mb');
        } else if( winWidth < 1024  && $('.floating-reserve').hasClass('mb') == false ) {
            $('#floating .close-float').css({'display':'block'});
        }
    }

    // 친구초대 달성 게이지바
    // 누적 예약자수에 따른 bar 이동
    function gage() {
        var gageNum = $('#numSuccess').val();
        $('.invite-count-text span').text(gageNum);
        if (0 <= gageNum && gageNum < 1 ) { // 0명일 때

        } else if(1 <= gageNum && gageNum < 5  ) {// 1명 달성 + 4명까지
            $('.accum_percent .accumWrap:nth-child(1)').addClass('on'); // 1번 달성 체크아이콘
            $('.accum_percent #accum_01').css('width', '100%'); // 1번 달성 div 채우기
            var gage2 = (gageNum - 1) * 25 ;    // ex) 구간 1,2,3,4 총 3구간 => 100/3 => 33.33 인데, 가득차면 안되니까 총4구간으로해서 25 => 3일때 3-1 * 25 => 50%;
            $('.accum_percent #accum_02').css('width', gage2 + '%');

        } else if(5 <= gageNum && gageNum < 10) {   // 5 ~ 9
            $('.accum_percent .accumWrap:nth-child(-n+2)').addClass('on');
            $('#accum_01, #accum_02').css('width', '100%');
            var gage3 = (gageNum - 5)  * 20;
            $('.accum_percent  #accum_03').css('width', gage3 + '%');

        } else if(10 <= gageNum && gageNum < 20) {
            $('.accum_percent .accumWrap:nth-child(-n+3)').addClass('on');

            $('#accum_01, #accum_02, #accum_03').css('width', '100%');

            var gage4 = (gageNum - 10)  * 10;
            $('.accum_percent  #accum_04').css('width', gage4 + '%');

        }  /*else if(20 <= gageNum && gageNum < 20) {
            $('#accum_01, #accum_02, #accum_03, #accum_04').css('width', '100%');
            $('.count-mark li:nth-child(-n+4)').addClass('on');
            var gage5 = (gageNum - 50000)  / 250;
            $('.accum_percent  #accum_05').css('width', gage5 + '%');

        } */else { // 모두 달성
            $('.accum_percent .accumWrap:nth-child(-n+4)').addClass('on');
            $('.accum_percent .accum').css('width','100%'); //모두 채워짐
        }
    }
    gage();
    // 전체 게이지바 길이 구하기
    function holeGageBar() {
        var widthAccum01 = $('#accum_01').width();
        var widthAccum02 = $('#accum_02').width();
        var widthAccum03 = $('#accum_03').width();
        var widthAccum04 = $('#accum_04').width();
        //var widthAccum05 = $('#accum_05').width();
        $('#accum_hole').css({'width': widthAccum01 + widthAccum02 + widthAccum03 + widthAccum04 /*+ widthAccum05 */+'px'})
        //console.log( widthAccum01 , widthAccum02 , widthAccum03 , widthAccum04, /*widthAccum05*/)
        /*console.log(widthAccum06 +'widthAccum06')*/
    }
    setTimeout(function(){
        holeGageBar();
    }, 400);
    // 누적되고 나면 받았다는 아이콘으로 변경



});