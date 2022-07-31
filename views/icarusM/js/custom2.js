
$(document).ready(function() {

    /*************************************************************/
    /************************ IE CSS START ***********************/
    /*************************************************************/
    /*function checkBroswer(){*/        // 밑에 함수에서 사용하기 위해 전역변수로 풀어둡니다.

        var agent = navigator.userAgent.toLowerCase(),
            name = navigator.appName,
            browser = '';

        // MS 계열 브라우저를 구분
        if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
            browser = 'ie';
            if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
                agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
                browser += parseInt(agent[1]);
            } else { // IE 11+
                if(agent.indexOf('trident') > -1) { // IE 11
                    browser += 11;
                } else if(agent.indexOf('edge/') > -1) { // Edge
                    browser = 'edge';
                }
            }

            // IE일 경우 text-gradient 없애기
            //$('#desktopHeader .row-w #ltGnb li:hover a, #ltGnb li.on a').css({'background': 'none', 'color': '#786fda'}); // header.on 아래 navOn 스크립트로 이동
            $('#sec1 .btn-wrap .btn.pre-register span').css({'background': 'none', 'color': '#fff'}); //btn pre-register now
            $('#sec2 .bonus-wrap .bonus-content p span').css({'background': 'none'}); // bonus text

            // IE일 경우 인풋 안보이게 하기
            $('#sec2 .os .checkbox-os label input').css({'visibility': 'hidden'});
            $('#sec2 .checkbox-agree label input').css({'visibility': 'hidden'});

            //IE일 경우 버튼 태그 보더 없애기
            $("#sec2 .btn-wrap .btn.pre-register").css({'border': 'none'});
            $("#sec2 .btn-wrap .btn.pre-register-details").css({'border': 'none'});
            $('button').css({'cursor':'pointer'});


        } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
            if(agent.indexOf('opr') > -1) { // Opera
                browser = 'opera';
            } else if(agent.indexOf('chrome') > -1) { // Chrome
                browser = 'chrome';
            } else { // Safari
                browser = 'safari';
            }
        } else if(agent.indexOf('firefox') > -1) { // Firefox
            browser = 'firefox';
        }
        //alert(browser);
    /*}*/
  /*  checkBroswer();*/

    /********************** IE CSS END **************************/

    var vertiHeight = function () {
        setTimeout(function () {
            $('#sec1 .row-w').css('padding-top', 0);
            var gnbH ='';
            var combineH = $('#combineMenu').outerHeight(true) /2;
            var row1Half = $('#sec1 .row-w').outerHeight() /2;
            var sec1Half = $('#sec1').outerHeight() /2;
            if( window.matchMedia("screen and (min-width: 321px) and (max-width: 1024px)").matches ) {
                gnbH = $('#mobileHeader').outerHeight(true)/2;
                $('#sec1 .row-w').css('padding-top', (sec1Half + gnbH) - row1Half); // 슬라이드 1 타이틀 세로중앙
            } else if( window.matchMedia("screen and (max-width: 320px)").matches ) {
                $('#sec1 .row-w').css('padding-top', (sec1Half) - row1Half); // 슬라이드 1 타이틀 세로중앙
            } else{
                gnbH = $('#desktopHeader').outerHeight(true)/2;
                //console.log(sec1Half +'+'+ gnbH + '-' + row1Half);
                $('#sec1 .row-w').css('padding-top', (sec1Half + gnbH ) - row1Half ); // 슬라이드 1 타이틀 세로중앙
            }
        }, 0.5);
    };
    setInterval(function() {
        /**********************************************************/
        /************** 타이틀 세로 중앙 정렬 START ***************/
        /**********************************************************/
        vertiHeight();
        /*  window.addEventListener('DOMContentLoaded', vertiHeight);
          window.addEventListener('resize', vertiHeight);*/
    }, 300);
    /************** 타이틀 세로 중앙 정렬 END ***************/



    /* ////////////// 클래스 배경 비디오 video 사이즈 조정 ///////////////////// */
    // calculate page size
    function calcSize() {
        var mh = 850;
        var ww = $(window).width();
        var wh = $(window).height();

        if ((ww != $(window).width()) || (wh = $(window).height())) {
            ww = $(window).width();
            if ($(window).height() < mh) {
                wh = mh;
            }
            else {
                wh = $(window).height();
            };
            if ($(window).width() < 1480) {
                ww = 1480;
            }
            else {
                ww = $(window).width();
            };
            if ((wh / ww) > (9 / 16)) {
                $("#mainIntroVideo").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });

                /* 디큐브 추가 */
                $("#ch1Video").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });
                $("#ch2Video").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });
                $("#ch3Video").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });
                $("#ch4Video").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });
                $("#ch5Video").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });

                $("#worldviewVideo").width(Math.ceil(wh * (16 / 9))).css({ 'margin-left': -(Math.ceil(wh * (16 / 9)) / 2), 'margin-top': -(wh / 2) });
            }
            else {
                $("#mainIntroVideo").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });

                /* 디큐브 추가 */
                $("#ch1Video").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });
                $("#ch2Video").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });
                $("#ch3Video").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });
                $("#ch4Video").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });
                $("#ch5Video").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });

                $("#worldviewVideo").width(ww).css({ 'margin-left': -(ww / 2), 'margin-top': -(Math.ceil(ww * (9 / 16)) / 2) });
            }
        }
    }
    calcSize();

    // set page size
    $(window).on('resize', function () {
        setInterval(function() {
            calcSize();
            vertiHeight();
        }, 300);
        gage();
        holeGageBar();

        if( $(window).outerWidth() > 1024 ) {
            fnCloseMobileSlide();
        }
    });




    /****************************************************************/
    /********************* Desktop Header START *********************/
    /****************************************************************/
    // 스크롤 시 네비에 온!
    function navOn() {
        var eachSection = $('section');
        if ( $(window).outerWidth() > 1024 ) {
            if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
                var nowTop = $(window).scrollTop() + 164;   // IE는 3이상 정도 차이 남
            }else{
                var nowTop = $(window).scrollTop() + 161;   // header height 60 + 100
            }
        } else {
            var nowTop = $(window).scrollTop() + 61;
        }
        $.each( eachSection, function(idx){       // 선택자 없이 사용하여 사용할 배열을 매개변수로 넘김 (index , element)
            var sectionTop = eachSection.eq(idx).offset().top;
            if (sectionTop <= nowTop) {
                $('#ltGnb li, #ltMobileGnb li').removeClass('on');
                $('#ltGnb li, #ltMobileGnb li').eq(idx).addClass('on');

                if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
                    $('#ltGnb li a').css({
                        'background': 'none', 'color':'#5576c5'});
                    $('#ltGnb li').eq(idx).find('a').css({
                        'background': 'none',
                        'color': '#786fda'
                    }); // header.on
                }
                $('.mb-class-wrap .infoArea .btn-video a[data-video=' + (1) + ']').addClass('on');
            }
        });

    }; // function navOn
    navOn();

    $(window).scroll(function(){
        navOn();
    });

    // 클릭시 해당 섹션으로 이동 + 네비 온!
    $('#ltGnb li a, #ltMobileGnb li a').on('click', function() {
        var index = $(this).parent().index() + 1;
        var headerH = $('#desktopHeader').height();
        // 이동
        if ( $(window).outerWidth() > 1024 ) {
            $("html,body").stop().animate({"scrollTop": $('#sec'+ index).offset().top - headerH - 60}, 450);
        } else {
            $("html,body").stop().animate({"scrollTop": $('#sec'+ index).offset().top - 60 }, 450);
        }

        //네비 온
        $('#ltGnb li, #ltMobileGnb li').removeClass('on');
        //$('#ltGnb li, #ltMobileGnb li').eq(index).addClass('on');
        console.log(index);
    })


    // 첫번째 페이지에만 스크롤
    $("#sec1").on('DOMMouseScroll mousewheel', function(event, delta){
        event.preventDefault();
        var moveTop = null;
        var headerH = $('#desktopHeader').height();

        if (delta > 0) { //마우스 휠을 올렸을때
            moveTop = 0;
        } else if (delta < 0) { // 마우스 휠을 내렸을 때
            if ( $(window).outerWidth() > 1024 ) {
                moveTop = $('#sec2').offset().top - 60 - headerH;
            } else {
                moveTop = $('#sec2').offset().top - 60;
            }

        }
        $("html,body").stop().animate({scrollTop: moveTop + 'px'}, 450);

    });
    $("#sec2").on('DOMMouseScroll mousewheel', function(event, delta){
        event.preventDefault();
        var moveTop = null;

        // 파이어폭스 스크롤 이벤트 추가
        if (event.type == 'DOMMouseScroll') {
            if ( event.originalEvent.detail < 0) {//휠 올릴 때

                $(this).bind();
                moveTop = $('#sec1').offset().top;
                $("html,body").stop().animate({scrollTop: moveTop + 'px'}, 450);

            } else {  //휠 내릴 떄
                $("#sec2").unbind("DOMMouseScroll");
            }
        } else {

        // 기존 크롬 등 스크롤 이벤트
            if (delta > 0) { //마우스 휠을 올렸을때
                $("#sec2").bind();
                //$(this).mousewheel();
                moveTop = $('#sec1').offset().top;
                $("html,body").stop().animate({scrollTop: moveTop + 'px'}, 450);
            } else if (delta < 0) { // 마우스 휠을 내렸을 때
                $("#sec2").unbind('mousewheel');
                //$(this).unmousewheel();
            }
        }
    });

    /********************* Desktop Header END *********************/



    /********************* MOBILE Header END *********************/
    window.fnShowMbSlide = function () {
        $('#mobileSlide').stop().animate({"right" : "0"}, 250);
        $('.bg-black').css({"display" : "block"});
    };
    window.fnCloseMobileSlide = function(){
        $('#mobileSlide').stop().animate({"right" : "-300px"}, 250);
        $('.bg-black').css({"display" : "none"});
    };
    /********************* MOBILE Header END *********************/




    /********************* Floating Banner Start *********************/
     window.goSection = function(n) {
        var secTop = $('#sec' + n).offset().top;
        var headerH = $('#desktopHeader').height();

        if ( $(window).outerWidth() > 1024 ) {
            $("html,body").stop().animate({"scrollTop": $('#sec'+ n).offset().top - headerH - 58}, 450);
        } else {
            if (n == 5) {
                n = 6;
            }
            $("html,body").stop().animate({"scrollTop": $('#sec'+ n).offset().top }, 450);
        }

    }

    /* share 버튼 누르면 3개 sns 버튼 나타나기 */
    window.shareSns = function() {
        $('#floatingMenu li ul').toggle();
    }

    window.toSNS = function (sns, title, url) {
        var snsArray = new Array();

        snsArray['twitter'] = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url);
        snsArray['facebook'] = "http://www.facebook.com/share.php?u=" + encodeURIComponent(url);
        //snsArray['instagram'] = "https://www.instagram.com/?url=https://www.drdrop.co/" + encodeURIComponent(url) + "&url=" + encodeURIComponent(url);
        if(sns == 'twitter') {
            gtag('event', 'share', {'event_category': 'twitter', 'event_label': 'MORE'});
        } else {
            gtag('event', 'share', {'event_category': 'facebook', 'event_label': 'MORE'});
        }
        window.open(snsArray[sns]);
        console.log(encodeURIComponent);
    }

    /* CAMPAIGN */
    // 디테일 버튼 이동
    window.goDetails = function() {
        var detailSec = $('#sec3 .row-w.section2').offset().top - $('#desktopHeader').height() ;
        $("html,body").stop().animate({"scrollTop":detailSec - 60 + 'px'});
    }

    /****************************************************************/
    /********************* MILESTONE GRAPH START ********************/
    /****************************************************************/
    // 누적 예약자수에 따른 bar 이동
    function gage() {
        var gageNum = $('#numSuccess').val();

        if (0 <= gageNum && gageNum < 10000 ) {
            var gage1 = gageNum / 100;
            $('.accum_percent #accum_01').css('width', gage1 + '%');

        } else if(10000 <= gageNum && gageNum < 25000  ) {
            $('.accum_percent #accum_01').css('width', '100%');
            $('.count-mark li:nth-child(-n+1)').addClass('on');

            var gage2 = (gageNum - 1000) / 250;
            $('.accum_percent #accum_02').css('width', gage2 + '%');

        } else if(25000 <= gageNum && gageNum < 50000) {
            $('#accum_01, #accum_02').css('width', '100%');
            $('.count-mark li:nth-child(-n+2)').addClass('on');

            var gage3 = (gageNum - 25000)  / 250;
            $('.accum_percent  #accum_03').css('width', gage3 + '%');

        } else if(50000 <= gageNum && gageNum < 75000) {
            $('#accum_01, #accum_02, #accum_03').css('width', '100%');
            $('.count-mark li:nth-child(-n+3)').addClass('on');
            var gage4 = (gageNum - 50000)  / 250;
            $('.accum_percent  #accum_04').css('width', gage4 + '%');

        } else if (75000 <= gageNum && gageNum < 100000) {
            $('#accum_01, #accum_02, #accum_03, #accum_04').css('width', '100%');
            $('.count-mark li:nth-child(-n+4)').addClass('on');
            var gage5 = (gageNum - 75000)  / 250;
            $('.accum_percent  #accum_05').css('width', gage5 + '%');

        } else if ( 100000 <= gageNum ) {
            $('#accum_01, #accum_02, #accum_03, #accum_04, #accum_05').css('width', '100%');
            $('.count-mark li:nth-child(-n+5)').addClass('on');
            var gage6 = (gageNum - 100000)  / 250;
            $('.accum_percent  #accum_06').css('width', gage6 + '%');

        } else {
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
        var widthAccum05 = $('#accum_05').width();
        $('#accum_hole').css({'width': widthAccum01 + widthAccum02 + widthAccum03 + widthAccum04 + widthAccum05 +'px'})
    }
    setTimeout(function(){
        holeGageBar();
    }, 400);
    // 누적되고 나면 받았다는 아이콘으로 변경

    /********************* MILESTONE GRAPH END *********************/





    /****************************************************************/
    /************************** CLASS START *************************/
    /****************************************************************/
    // 모바일 시 슬라이드
    $('.mb-class-wrap').slick({
        slideToShow:1,

        autoplay:false,
        draggable : false,
        /*slide:'li',*/

        arrows: false,
        prevArrow : "<button type='button' class='class-slick-prev'>Previous</button>",
        nextArrow : "<button type='button' class='class-slick-next'>Next</button>",

        dots: true,
        //dotsClass : "class-slick-dots",
        customPaging: function(slider, i) {
            // this example would render "tabs" with titles
            var dotsName = ['icon_gladiator','icon_artist', 'icon_wizard', 'icon_ranger', 'icon_assassin']
            return '<img src="/static/images/event/icarusm_gl/pre-register/section4/' + dotsName[i] + '.png" alt="">';
        },
    });


        // 호버하면 영상 화면으로

        $('.class-wrap > li').on('click', function() {
            calcSize();
            if( $(window).outerWidth() > 1024) {
            $('.class-wrap > li').find('.small').fadeIn();  // 기본 - 작은것 보이는 상태

                if( $(this).hasClass('on') == true) {   // 펼쳐져 있는 것을 닫을 떄
                    $('.class-wrap > li').removeClass('on');
                    $('.class-wrap > li').css({'width':'20%','z-index':'1'});
                    $(this).find('.small').css({'display':'block'});
                    $(this).find('.big').css({'display':'none'});
                } else {    // 펼칠 때
                    $('.class-wrap > li').removeClass('on');
                    $(this).addClass('on');
                    $(this).find('.big').css({'display':'block'});
                    $(this).find('.small').css({'display':'none'});
                    $('.class-wrap > li').css({'width':'5%','z-index':'1'});
                    $(this).css({'width':'80%', 'z-index':'2'});
                }
            }
        });

        // 클래스 영상 재생 버튼
    $('.mb-class-wrap').on('afterChange', function(event, slick, currentSlide){
        $('.mb-class-wrap .infoArea .btn-video a').removeClass('on');
        $('.mb-class-wrap .infoArea .btn-video a[data-video=' + (currentSlide + 1) + ']').addClass('on');
    });

        // 클래스 모바일 시 브라우저 상단 바 때문 높이 고정
    function fixHeight() {
/*        var sec1Height = $('#sec1').outerHeight();
        $('#sec1').css({'height': sec1Height +'px'});*/

        var plyBtnH = $('#sec1 .btn-play').outerHeight();
        $('#sec1 .btn-play').css({'height': plyBtnH +'px'})


        /* 클래스 슬라이드 */
        var sec4Height = $('#sec4').outerHeight();
        $('#sec4').css({'height': sec4Height +'px'});

        var imgWrapH = $('.mb-class-wrap .img-wrap').height();
        $('.mb-class-wrap .img-wrap').css({'height': imgWrapH + 'px'});

        var slickLiH = $('.mb-class-wrap .slick-list li').outerHeight();
        $('.mb-class-wrap .slick-list li').css({'height': slickLiH +'px'});

        var slitDotH = $('.mb-class-wrap .slick-dots').outerHeight();
        $('.mb-class-wrap .slick-dots').css({'height': slitDotH +'px'});

        var chrH = $('.mb-class-wrap .img-wrap img[alt=\'chr\']').outerHeight();
        $('.mb-class-wrap .img-wrap img[alt=\'chr\']').css({'height': chrH +'px'});

        var descH = $('.mb-class-wrap .img-wrap img[alt=\'info\']').outerHeight();
        $('.mb-class-wrap .img-wrap img[alt=\'info\']').css({'height': descH +'px'});
        /* ./ 클래스 슬라이드 */

        var sec1Height = $('#sec5').outerHeight();
        $('#sec5').css({'height': sec1Height +'px'});

        var worldViewH = $('pop-and-slide').outerHeight();
        $('pop-and-slide').css({'height': worldViewH +'px'});



    }
    if($(window).outerWidth() <= 640) {
        fixHeight();
    }



        //클래스 영상 팝업 띄우기
          // youtube play
        window.fnYtPlay = function (e) {
            $('#ytURL').attr('src','');
            var selUrl = e;
            $('#ytURL').attr('src',selUrl);
            $('.shadow.yt, #yt').fadeIn().animate({opacity:1}, 500);
            return false;
        };
        // youtube 닫기
        window.fnYtClose = function () {
            var videoURL = $('#ytURL').attr('src');
            videoURL = videoURL.replace("&autoplay=1", "");
            $('#ytURL').attr('src','');
            $('#ytURL').attr('src',videoURL);

            $('.shadow.yt, #yt').fadeOut().animate({'opacity':0}, 1000);
            return false;
        }


    /********************* CLASS END *********************/


    /********************* WORLD VIEW START *********************/
    $('.world-view-slide').slick({
        slide: 'div',
        arrows : true,
        prevArrow : "<button type='button' class='icam-slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='icam-slick-next'>Next</button>",		// 다음 화살표 모양 설정
        dots: true,
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable : true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows : false,
                }
            }
        ]
    });

    // 해당 슬라이드 이미지에 맞는 이름 나타나게 하기
    $('.world-view-slide').on('afterChange', function(event, slick, currentSlide){
        $('.world-view-name li').hide();
        $('.world-view-name li[data-name=' + (currentSlide + 1) + ']').show();
    });

    // 특정 캐릭터 번호에 맞춰 슬라이드 시작하기
    window.fnSlideWV = function(idx2) {
        //$('#sec6').css({'display':'block'});
        $('#sec6').css({'visibility':'visible'});
        $('.shadow.worldview, .layer-wrap, .pop-and-slide').fadeIn().animate({opacity: 1}, 500);
        //$('#artworks.layer-wrap, #slickArtworks').css({'display': 'block'});
        $('.world-view-slide').slick('slickGoTo', idx2 - 1);
    }

    //1024 이하에 movile World View
    $(window).on('resize', function () {
        if(  $(window).outerWidth() <= 1024 ) {
            $('#sec6 .layer-wrap, #sec6 .pop-and-slide').css({'display':'block', 'opacity':'1'});
            $('.shadow.worldview').css({'display':'none'});
           // console.log('모바일 ')
        } else if ($(window).outerWidth() > 1024 && $('.shadow.worldview').css('display') == "none" ) {
            $('#sec6 .layer-wrap, #sec6 .pop-and-slide').css({'display':'none', 'opacity':'0'});
            $('.shadow.worldview').css({'display':'none'});
            //console.log('피시화면이지만 팝업 클릭하지 않았을 떄  ')
        }  else if ($(window).outerWidth() > 1024 && $('.shadow.worldview').css('display') == "block" ) {
            $('#sec6 .layer-wrap, #sec6 .pop-and-slide').css({'display':'block', 'opacity':'1'});
            //console.log('피시화면에서 팝업띄웠을 떄 ')
        }

    });
    /********************** WORLD VIEW END **********************/



    /*********************** POPUP ***********************/
    window.fnClosePop = function(){
        $('.layer-wrap, .shadow, .pop-and-slide').fadeOut().animate({'opacity':0}, 500);
    };
    /********************** ./ POPUP **********************/
});