$(document).ready(function() {

    /* combine_menu_long logo_img */
    $('#combine_menu_long .game-logo img').attr('src','/static/images/template/black/icarus_ko/logo_ica.png');

    /* /////////////////////////////////////// */
    /* /////////// header gnb btn //////////// */
    window.fnOpenGnb = function(){
        $('header.pc-header').stop().animate({left:'0'});
        $('.gnb-open').fadeOut();
    };
    window.fnCloseGnb = function(){
        $('header.pc-header').stop().animate({left:'-280px'});
        $('.gnb-open').fadeIn();
    };
        /* menu li on */
        $('.theme-header ul li').on('click', function() {
            $('.theme-header ul li').removeClass('on');
            $(this).addClass('on');
        });
        /* ./menu li on */
    /* ./header gnb btn */

    /* ////////////////////////////////////////*/
    /* ///////// combine menu mobile ///////// */
    window.fnOpenGameMenu = function() {
        $('.bg-black').css({'opacity':'1', 'display':'block'});
        $('.mb-header').stop().animate({'right':0});
    };
    window.fnCloseGameMenu = function() {
        var mobileHeaderWidth = $('.mb-header').width();
        console.log(mobileHeaderWidth);
        $('.bg-black').css({'opacity':'0', 'display':'none'});
        $('.mb-header').stop().animate({'right': -mobileHeaderWidth + 'px'});
    };
    /* /////// ./ combine menu mobile /////// */


    /* ////////////////////////////////////////*/
    /* step li 높이 - 가장 긴 글자에 맞추기 */
    var equalHeight = function(element){
        var maxHeight = 0;

        element.each(function(){
            if($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        });
        return maxHeight;
    };
    var list = $(".step ul:nth-child(1) li > dl");
    $(".step ul:nth-child(1) li").height(equalHeight(list));

    $(window).resize(function() {
        var list = $(".step ul:nth-child(1) li > dl");
        $(".step ul:nth-child(1) li").height(equalHeight(list));
    });
    /* ./ step li 높이 - 가장 긴 글자에 맞추기 */

    /* ////////////////////////////////////////*/
    /* 맨 위로 */
    window.fnGoTop = function() {
        $(' html, body ').stop().animate( {'scrollTop' : 0}, 400);
    };

    /* 특정 섹션으로 이동 */
    window.goSection = function(sn) {
        fnClosePop();
        $('html, body').stop().animate({
            scrollTop: $('#' + sn ).offset().top
        }, 400);
    }


    /* ////////////////////////////////////////*/
    /* 팝업 모달 */
    window.fnOpenLoginPop = function(){
        $('#modal-wrapper, .modal-login').css({'display':'block'});
        $('.bg-black').css({'display':'block'});
    };
    window.fnCloseLoginPop = function(){
        $('#modal-wrapper, .modal-login').css({'display':'none'});
        $('.bg-black').css({'display':'none'});
    };
    /* 이관 안내 */
    window.fnOpenNotice = function() {
        $('#modal-wrapper, #modal-mig-guide').css({'display':'block'});
        $('.bg-black').css({'display':'block'});
    };
    fnOpenNotice();

    /* 게임정보 없음 */
    window.fnOpenNoHistory = function() {
        $('#modal-wrapper, #modal-no-history').css({'display':'block'});
        $('.bg-black').css({'display':'block'});
    };
    //fnOpenNoHistory();

    /* 플레이 이력 있음 */
    window.fnOpenIsHistory = function() {
        $('#modal-wrapper, #modal-is-history').css({'display':'block'});
        $('.bg-black').css({'display':'block'});
    };
    //fnOpenIsHistory();

    /*fnOpenNoHistoryPop();*/
    window.fnClosePop = function(){
        $('#modal-wrapper, #modal-mig-guide').css({'display':'none'});
        $('#modal-wrapper, #modal-no-history').css({'display':'none'});
        $('#modal-wrapper, #modal-is-history').css({'display':'none'});
        $('.bg-black').css({'display':'none'});

        $('.bg-black').off('scroll touchmove mousewheel');
    };


    //overflow 스크롤 다 내리면 밑에 화면 움직이는 거 막기
    /*$('.overflow-y').on('scroll touchmove mousewheel', function(event) {
        var scrollT = $(this).scrollTop(); //스크롤바의 상단위치
        var scrollH = $(this).height(); //스크롤바를 갖는 div의 높이
        var contentH = $('.overflow-txt').height(); //문서 전체 내용을 갖는 div의 높이
        if (scrollT + scrollH + 1 >= contentH) { // 스크롤바가 아래 쪽에 위치할 때
            event.preventDefault();
            event.stopPropagation();
            return false;
        } else {

        }
    });*/

    /* ////////////////////////////////////////*/
    /* 리사이즈 - 헤더 */
    $(window).resize(function() {
        if( $(window).width() > 1024 && $(window).width() <= 1280 ) {
            $('header.pc-header').css({left:'-280px'});
            $('.gnb-open').css({display:'block'});
            //console.log('1');
        } else if( $(window).width() <= 1024) {
            $('.gnb-open').css({display:'none'});
            //console.log('2');
        } else if ($(window).width() > 1280 ) {
            $('header.pc-header').css({left:'0'});
            $('.gnb-open').css({display:'none'});
        }
    });
});

/*

function checkDisable() {
    $("#disable_data").submit();
}
*/
