// 주사위 판 변경
function chgBgOn() {
    var bgFloating = $('.floating-banner');
    $(bgFloating).addClass('result');
}
function chgBgOff() {
    var bgFloating = $('.floating-banner');
    $(bgFloating).removeClass('result');
}
// 주사위 팝업 메시지
function fnGetItem() {
    $('.layer-wrap#message').fadeIn();
    $('.shadow').fadeIn();
    $('.message').html("축하합니다!<br><span class='db-text'>영웅영웅</span>을/를 획득하셨습니다!");
    setTimeout(function() {
        chgBgOff();
    }, 1000 );
};

// 주사위 실행 및 말 이동 펑션
/* ///////////// currentCnt 가 36n 일 때 마다 완주 횟수 늘려주세요 ///////////// */
/* ///////////// currentCnt 가 36n 일 때 마다 완주 횟수 늘려주세요 ///////////// */
/* ///////////// currentCnt 가 36n 일 때 마다 완주 횟수 늘려주세요 ///////////// */
/* ///////////// currentCnt 가 36n 일 때 마다 완주 횟수 늘려주세요 ///////////// */
/* 증가하는 currentCnt를 36으로 나눈 나머지값이 $('.block').eq()값에 들어갑니다. */
var currentCnt = 0; // 말 위치 정하는 변수
function go(){
    $(".btn-go").attr("disabled", true); // 진행중에 여러번 클릭되는 것 방지
    var num = Math.floor(Math.random()*6+1);//random num 1-6
    var positionH = $("#orginBoard .block").eq(0).height() / 2 - $('#target').height() / 2; // 말 중앙 정렬
    var positionW = $("#orginBoard .block").eq(0).width() / 2 - $('#target').width() / 2;   // 말 중앙 정렬
    var defaultT = $("#orginBoard .block").eq(0).offset().top + positionH;                  // 말 중앙 정렬
    var defaultL = $("#orginBoard .block").eq(0).offset().left + positionW;                 // 말 중앙 정렬
    var marbleTop= $('#marbleWrap').offset().top;
    var dice = $('#dice');
    var aniSpeed = 200;
    var aniSpeedVertical = 210;
    fnClosePop();
    $("html").stop().animate({"scrollTop":marbleTop - 120},'fast');
    $(".dice-wrap").append("<div id='dice_mask'></div>");//add mask
    dice.attr("class","dice");//After clearing the last points animation
    dice.css('cursor','default');

    dice.animate({left: '+2px'}, 100,function(){
        dice.addClass("dice_t");
    }).delay(100).animate({top:'-2px'},100,function(){
        dice.removeClass("dice_t").addClass("dice_s");
    }).delay(100).animate({opacity: 'show'},600,function(){
        dice.removeClass("dice_s").addClass("dice_e");
    }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
        dice.removeClass("dice_e").addClass("dice_"+num);
        $("#result").html("<span>"+num+"</span>");
        dice.css('cursor','pointer');
        $("#dice_mask").remove();//remove mask
    });

    setTimeout(function() {
        chgBgOn();
    }, 400 * (num - 2) );

    // 주사위 결과 만큼 말 이동
    for (var i=1; i <= num ; i++) {
        currentCnt++;
        if( i == 1){
            console.log('나 처음 달릴 애야');
            $("#target").delay(aniSpeed*3).animate( {'top':'$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT}', 'left':'$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL'}, aniSpeed);
        }
        switch (currentCnt % 36) {
            case 0 :
                // 한바퀴 다 돌고 말 표시 없애기
                $('#blockForShadow .block').css('box-shadow','none');
                $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, 180);
                $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeed);
                break;
            case 12 :
                //console.log('12->13');
                $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, aniSpeedVertical);
                $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeedVertical);
                break;
            case 17 :
                //console.log('17->18');
                $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, aniSpeedVertical);
                $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeedVertical);
                break;
            case 30 :
                //console.log('30->31');
                $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, aniSpeedVertical);
                $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeedVertical);
                break;
            case 35 :
                //console.log('35->0');
                $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, aniSpeedVertical);
                $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeedVertical);
                break;
            /* default:
                 $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, 180);
                 $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeed);
                 break;*/
        }
        $("#target").animate({top:$("#orginBoard .block").eq(currentCnt % 36).offset().top - defaultT }, 180);
        $("#target").animate({left:$("#orginBoard .block").eq(currentCnt % 36).offset().left - defaultL}, aniSpeed);
    }
    currentCnt = currentCnt;    // 값 누적
    setTimeout(function() { // 주사위 돌리는 모션 끝난 후 복제된 .block(li)에 해당 말칸 표시해주기.
        $('#blockForShadow .block').eq(currentCnt % 36).delay().css('box-shadow','0 0 10px #FFDD1B');  // 말 행적 표시
    },aniSpeed*3)

    // 획득 아이템 알림 창 실행
    setTimeout(function() {
        fnGetItem();
        $(".btn-go").attr("disabled", false);
    }, 800 + ( ( aniSpeed *  num) * 2 ));  // delay 속도가 매 num 만큼 붙기 때문에 *2 를 해주어야 함
}


$(document).ready(function(){
    window.fnYPopup = function(){
        $('.layer-wrap.yt').fadeIn();
        $('.shadow').fadeIn();
    };
    window.fnShowList = function() {
        $('.layer-wrap.tbl').fadeIn();
        $('.shadow').fadeIn();
        console.log('11111111');
    };

    window.fnClosePop = function() {
        $('.shadow, .layer-wrap').fadeOut();
        $('btn-go').on('click');
    };

    window.fnShowMessage= function(){
        $('.layer-wrap#message').fadeIn();
        $('.shadow').fadeIn();
        $('.message').html("수령하신 <span class='db-text'>메롱메롱</span> 아이템은<br>게임 내 보관함(F4)에서 확인하실 수 있습니다.");
        /* 로그인 후 확인하실 수 있습니다. */
    };

    // 메뉴 동작
    window.fnShowCont = function(e){
        var section = $('section');
        $(section).fadeOut('fast');
        $('#'+e).fadeIn('fast');
        $('#menu li').removeClass('on');
        $('#menu li'+'.menu-'+e).addClass('on');

        if( 'home' == e ){
            $('#tit').addClass('aniTop');
        } else{
            $('#tit').removeClass('aniTop');
        }
    };

//각각의 section에서 마우스를 움직이면
   $("#home").on("mousemove",function(e){
        var posX= e.pageX;
        var posY= e.pageY;

        //첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $("#p-left").css({"left": 0 -(posX/30) , "bottom": (posY/30) });
        $("#p-right").css({"right": -30 +(posX/25) , "bottom": -40-(posY/20) });
    });

   // 트윈맥스 애니메이션
    // home
    function slideLeft(items) {
        TweenMax.set(items,{opacity:0 });
        TweenMax.to(items, 1.4, {     //target, duration, {vars}
            x: -200,
            opacity:1,
            ease: Power4.easeInOut
        });
    }
    slideLeft( $('.h-left'));

    function slideRight(items) {
        TweenMax.set(items,{opacity:0 });
        TweenMax.to(items, 1.4, {
            x: 200,
            opacity:1,
            ease: Power4.easeInOut
        })
    }
    slideRight( $('.h-right'));

    function slideUp(items, yPos, delaySec) {
        TweenMax.set(items,{opacity:0 });
        TweenMax.to(items, 2, {
            y: yPos,
            opacity:1,
            ease: Power2.easeOut
        }).delay(delaySec)
    }
    slideUp( $('#tit'), -30, 1.2);

    function fadeIn(items, ds, ns, bfdisplay, afdisplay) {
        TweenMax.set(items,{display:'bfdisplay', opacity:0 });
        TweenMax.to(items, ds, {
            display:afdisplay,
            opacity:1,
            ease: Power2.easeOut
        }).delay(ns)
    };
    fadeIn( $('.period-text'), 1.6,1.6, 'none','inline-block');
    fadeIn( $('.body-cont'), 4,2.4,'none', 'block');


    // event~
    function scaleXIn(items) {
        TweenMax.set(items,{transform:'scaleX(0)'});
        TweenMax.to(items, 1 , {
            transform: 'scale(1)',
        })
    }
    function slideUpNum(items) {
        TweenMax.set(items,{bottom: '-100%'});
        TweenMax.to(items, 0.6, {
            bottom: '0%',
            ease: Power2.easeOut
        }).delay(0.8)
    }
    function slideDownNum(items, yPos, delaySec) {
        TweenMax.set(items,{opacity:0, y:-(yPos/3) });
        TweenMax.to(items, 1.6, {
            y: yPos,
            opacity:1,
            ease: Power2.easeOut
        }).delay(delaySec)
    }

    function showSec2() {
        $('#event2').removeClass('on-scroll');//opacity:1으로 한번 로드하면 계속 보여져 있게 하기
        scaleXIn($('#event2 .tit-num'));
        slideUpNum( $('#event2 .tit-num img'));
        slideDownNum($('#event2 .event-title'), 22, 1 );
        fadeIn( $('#event2 .cont-wrap .row-w'), 1.2,1.6, 'inline-block','inline-block');
        fadeIn( $('#event2 .cont-wrap .floating-banner-attend'), 1.2,1.6, 'inline-block','inline-block');
    }

    /* 메뉴를 클릭하면 처음 section 이외의 tweenmax 애니메이션이 실행되게 하기 */
    $('#menu li').eq(0).on('click', function() { //home
        $("html").scrollTop(0);
    });
    $('#menu li').eq(1).on('click', function() {
        $("html").scrollTop(0);
        //event1
        scaleXIn($('#event1 .tit-num'));
        slideUpNum( $('#event1 .tit-num img'));
        slideDownNum($('#event1 .event-title'), 22, 1 );
        fadeIn( $('#event1 .cont-wrap .row-w'), 1.2,1.6, 'inline-block','inline-block');

        //event2
        $('#event2').addClass('on-scroll'); //opacity:0으로 처음에 안보이게 하고 , 클릭을 또 했을 때 다시 안보였다가 보여질 수 있도록
        if( $(document).scrollTop() >= ($('#event1').height())/2  ) {    //범위 안에 들어와서 로드하였을 때 나타나게 하기
            showSec2()
        }
        $(window).scroll(function() { //스크롤 내리다가 위치에 도달 했을 때 나타나게 하기
            if ( $(document).scrollTop() >= ($('#event1').height())/3 &&  $(document).scrollTop() <= (($('#event1').height())/3) + 100 && $('#event2').hasClass('on-scroll') == true  ) {
                showSec2();
            }
        });
    });
    $('#menu li').eq(2).on('click',function() {//11주년 행운의 로사마블! 03event
        $("html").scrollTop(0);
        // 게임판이 나타날 때 까지 실행 안되게
        $(".btn-go").attr("disabled", true);
        setTimeout(function() {
            $(".btn-go").attr("disabled", false);
        }, 1000);

        scaleXIn($('#event02 .tit-num'));
        slideUpNum( $('#event02 .tit-num img'));
        slideDownNum($('#event02 .event-title'), 22, 1 );
        fadeIn( $('#event02 .cont-wrap .row-w'), 1.2,1.6, 'inline-block','inline-block');
    });
    $('#menu li').eq(3).on('click',function() {//11주년 행운의 로사마블! 03event
        $("html").scrollTop(0);
        scaleXIn($('#event03 .tit-num'));
        slideUpNum( $('#event03 .tit-num img'));
        slideDownNum($('#event03 .event-title'), 22, 1 );
        fadeIn( $('#event03 .cont-wrap .row-w'), 1.2,1.6, 'inline-block','inline-block');
    });

    $('.board ul').clone().attr('id','blockForShadow').css({'position':'absolute','top':0,'left':0}).appendTo('.board');
});



