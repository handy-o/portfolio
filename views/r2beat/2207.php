<!doctype html>
<html lang="ko">
<head>
    <title>알투비트 Brand New MUSIC 업데이트! - VFUN</title>
    <link rel="shortcut icon" href="//file.valofe.com/Valofe_file/web/favicon/r2beat-favicon.ico">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="content-language" content="ko">
    <meta http-equiv="content-style-type" content="text/css">

    <meta name="application-name" content="알투비트 Brand New MUSIC 업데이트!- VFUN">
    <meta name="robots" content="ALL, index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=no">

    <meta name="title" content="알투비트 Brand New MUSIC 업데이트!- VFUN">
    <meta name="description" content="지금 알투비트에서 신규 음악을 만나보세요!">
    <meta name="keywords" content="VFUN, VALOFE, 알투비트, 밸로프, 리듬액션, R2Beat, 리듬레이싱, r2beat, 리듬, 레이싱, 리듬게임, 레이싱게임, Brand New MUSIC, 신규음악, 신곡, 알투비트 신곡, 신곡 추가, 업데이트">
    <meta name="author" content="VFUN">

    <!-- Facebook OpenGraph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="알투비트 Brand New MUSIC 업데이트!- VFUN">
    <meta property="og:description" content="지금 알투비트에서 신규 음악을 만나보세요!">
    <meta property="og:url" content="//r2beat-ko.valofe.com/landing/new2205">
    <meta property="og:image" content="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/meta-fb-1200x630-min.jpg">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="//r2beat-ko.valofe.com/landing/new2205">
    <meta name="twitter:title" content="알투비트 Brand New MUSIC 업데이트!- VFUN">
    <meta name="twitter:description" content="지금 알투비트에서 신규 음악을 만나보세요!">
    <meta name="twitter:image" content="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/meta-tw-505x253-min.jpg">
    <meta itemprop="image" content="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/meta-tw-505x253-min.jpg">

    <script src="//file.valofe.com/Valofe_file/web/common/js/jquery-1.12.4.min.js"></script>

    <!-- font -->
    <link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/vfun/css/font-awesome.4.6.2-custom.css" crossorigin  media="all" onload="if(media!='all')media='all'">

    <!-- slick -->
    <link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/common/css/slick.css">
    <link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/common/css/slick-theme.css">

    <link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/r2beat-ko/css/common.css?<?=date('YmdHis')?>">
    <?php
    if($channelName == 'NAVER') {
        echo '<link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/r2beat-ko/css/common_naver.css?'.date('YmdHis').'">';
    }  ?>
    <!-- aos -->
    <link href="//file.valofe.com/Valofe_file/web/common/css/aos.css" rel="stylesheet">

    <!--<link rel="stylesheet" href="//file.valofe.com/Valofe_file/web/r2beat-ko/css/landing/new/temp.css?<?/*=date('YmdHis')*/?>">-->
    <link rel="stylesheet" href="/static/css/landing/new/temp.css?<?=date('YmdHis')?>">

    <style>
        [data-aos][data-aos][data-aos-easing=ease], body[data-aos-easing=ease] [data-aos] {
            transition-timing-function: cubic-bezier(.175,.885,.32,1.275);
        }
    </style>
    
    <!--[if lt IE 9]>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/html5shiv.min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/selectivizr-min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/respond-1.4.2.min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/remPolyfill.js"></script>
    <![endif]-->

    <script src="//file.valofe.com/Valofe_file/web/vfun/js/matchMedia.min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/easing-1.3.min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/vfun/js/jquery.cookie.js"></script>



    <!-- 통합 메뉴 head -->
    <? include(PLATFORM_URL.'/combine_menu/head?lang='.$lang['lang'].'&ret='.urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']).'&service_code='.$service_code.'&service_type=landing'); ?>
    <!-- ./ 통합 메뉴 head -->



    <script src="//file.valofe.com/Valofe_file/web/common/js/slick.min.js"></script>
    <script src="//file.valofe.com/Valofe_file/web/common/js/aos.min.js"></script>
    <script src="/static/js/common.js"></script>
    <!--<script src="//file.valofe.com/Valofe_file/web/r2beat-ko/js/landing/new/temp.js"></script>-->
    <script src="/static/js/landing/new/temp.js"></script>
    <script src="/static/js/landing/new/2207.js"></script>
    <script src="/static/js/launcher.js?202202232021"></script>


    <?php
    if($channelName == 'NAVER') {
        echo '<script type="text/javascript" src="//api.game.naver.com/js/jslib.nhn?gameId=P_PN028457"></script>';
    }
    ?>
</head>
<body>
<a href="#musicList" class="skip-navi">본문 바로가기</a>

<!-- 통합 메뉴 header -->
    <?php
    if($channelName == 'NAVER'){
        echo $include_header_str;
    } else {
        include($include_header_str);
    }
    ?>
<!-- ./통합 메뉴 header -->

    <div id="wrapper">
    <header>
        <ul class="util clearfix">
            <li id="landingOpenNotShow"><a href="javascript:void(0);"  class="not-today" title="오늘 하루 보지 않기"></a></li>
            <li><a href="/main" class="go-home" title="홈으로 이동"></a></li>
        </ul>
        <nav>
            <a href="javascript:void(0);" onclick="goSec('wrapper')" class="go-top"><img src="https://file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/btn-top-min.png" alt="go top"></a>
        </nav>
    </header>

    <div id="content">
        <section id="sec1">
            <div class="deco-wrap">
                <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/deco-l-min.png" alt="bg음반모양" class="bg-deco-disc">
                <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/deco-r-min.png" alt="bg음표모양" class="bg-deco-note">
            </div>
            <div class="wrap-chr">
                <div class="chr chr-l">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/back-star-min.png" alt="별" class="back-star">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrL-min.png" alt="왼쪽 캐릭터" class="character">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrL-bg-min.png" alt="캐릭터 앞 배경" class="chr-cloud">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrL-deco-min.png" alt="음표 데코" class="chr-deco">
                </div>
                <div class="chr chr-r">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrR-min.png" alt="오른쪽 캐릭터" class="character">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrR-bg-min.png" alt="캐릭터 앞 배경" class="chr-cloud">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chrR-deco-min.png" alt="음표 데코" class="chr-deco">
                </div>
                <div class="chr chr-b">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/chr-btm-min.png" alt="아래 캐릭터" class="character">
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/new-now-min.png" alt="지금 알투비트에서 신규 음악을 만나보세요!" class="deco-talk2">
                </div>
            </div>

            <div class="row-w">
                <div id="title">
                    <div class="wrap-bar">
                        <ul class="clearfix">
                            <li class="b1"></li>
                            <li class="b2"></li>
                            <li class="b3"></li>
                            <li class="b4"></li>
                            <li class="b5"></li>
                            <li class="b6"></li>
                            <li class="b7"></li>
                            <li class="b8"></li>
                            <li class="b9"></li>
                            <li class="b10"></li>
                            <li class="b11"></li>
                            <li class="b12"></li>
                            <li class="b13"></li>
                            <li class="b14"></li>
                            <li class="b15"></li>
                            <li class="b16"></li>
                            <li class="b17"></li>
                            <li class="b18"></li>
                            <li class="b19"></li>
                            <li class="b20"></li>
                            <li class="b21"></li>
                            <li class="b22"></li>
                            <li class="b23"></li>
                            <li class="b24"></li>
                            <li class="b25"></li>
                            <li class="b26"></li>
                            <li class="b27"></li>
                            <!--<li class="b28"></li>
                            <li class="b29"></li>
                            <li class="b30"></li>-->
                        </ul>
                    </div>
                    <h1 class="wrap-logo clearfix" data-aos="fade-down" data-aos-duration="600">
                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/title-box-min.png" alt="리듬액션과 레이싱의 절묘한 조화!" class="logo-box">
                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/title-logo-min.png" alt="R2Beat" class="logo" data-aos="flip-up" data-aos-delay="600" data-aos-duration="600">
                    </h1>
                    <br class="logo-br">
                    <div class="tit">
                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/title-deco-min.png" alt="title deco">
                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/title-min.png" alt="BRAND NEW SONG" class="title">
                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/title-update-min.png" alt="Update" class="update-brush">
                    </div>
                    <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/s-bubble-min.png" alt="이미지를 클릭하시면 음악이 PLAY 됩니다!" class="deco-talk">
                </div>
                <article>
                    <div id="musicList">
                        <!-- 신곡 : 7월 -->
                        <h2 class="month-division"><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/update07-min.png" alt="2022년 7월 UPDATE"></h2>
                        <ul class="clearfix new">
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover1-rhythm_stage-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - rhythm_stage'})">
                                    </dd>
                                    <dt><p class="song">Rhythm Stage</p><p class="er">AltBeat</p></dt>
                                </dl>
                            </li>
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover2-tap_shoes-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - tap_shoes'})">
                                    </dd>
                                    <dt><p class="song">Tap Shoes</p><p class="er">Heins</p></dt>
                                </dl>
                            </li>
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover3-protected_area-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - protected_area'})">
                                    </dd>
                                    <dt><p class="song">Protected Area</p><p class="er">Jin</p></dt>
                                </dl>
                            </li>
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover4-sparkling_bottle-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - sparkling_bottle'})">
                                    </dd>
                                    <dt><p class="song">Sparkling Bottle</p><p class="er">LuFitueB</p></dt>
                                </dl>
                            </li>
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover5-multiverse-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - multiverse'})">
                                    </dd>
                                    <dt><p class="song">Multiverse</p><p class="er">Machine</p></dt>
                                </dl>
                            </li>
                            <li class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover6-black_coffee-min.jpg" alt="커버 이미지"
                                             onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2207 - black_coffee'})">
                                    </dd>
                                    <dt><p class="song">Black Coffee</p><p class="er">Zid</p></dt>
                                </dl>
                            </li>
                        </ul>

                        <div class="previous-music">
                            <!-- 6월-->
                            <h2 class="month-division"><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/update06_1-min.png" alt="2022년 6월 UPDATE"></h2>
                            <h2 class="month-division go7th"><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/update05-pink-min.png" alt="2022년 5월 UPDATE"></h2>
                            <ul class="clearfix prev">
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover1-puzzle-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - puzzle'})"
                                            ></dd>
                                        <dt><p class="song">Puzzle</p><p class="er">AltBeat	</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover2-morning_bread-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - morning_bread'})"
                                            ></dd>
                                        <dt><p class="song">Morning Bread</p><p class="er">Heins</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover3-world_pilot-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - world_pilot'})"
                                            ></dd>
                                        <dt><p class="song">이세계 메카 파일럿이 되었다</p><p class="er">Jin</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover4-rainbow_day-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - rainbow_day'})"
                                            ></dd>
                                        <dt><p class="song">Rainbow Day</p><p class="er">LuFitueB</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover5-freeway-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - freeway'})"
                                            ></dd>
                                        <dt><p class="song">Freeway</p><p class="er">Machine</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover6-illusion-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2206 - illusion'})"
                                            ></dd>
                                        <dt><p class="song">허상</p><p class="er">Zid</p></dt>
                                    </dl>
                                </li>
                                <!-- ./ 6월-->
                                <!-- 5월-->
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover1-communicationaltbeat-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - COMMUNICATION'})"
                                            ></dd>
                                        <dt><p class="song">Communication</p><p class="er">AltBeat</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover2-cozmicwaltzheins-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - COZMIC WALTZ'})"
                                            ></dd>
                                        <dt><p class="song">Cozmic Waltz</p><p class="er">Heins</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover3-retrogame-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - RETRO GAME'})"></dd>
                                        <dt><p class="song">Retro Game</p><p class="er">Jin</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover4-thelegend-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - THE LEGEND'})"></dd>
                                        <dt><p class="song">The Legend</p><p class="er">LuFitueB</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover5-whereisthefox-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - WHERE IS THE FOX'})"></dd>
                                        <dt><p class="song">Where Is The Fox</p><p class="er">Machine</p></dt>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dd><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover6-lower-min.jpg" alt="커버 이미지"
                                                 onclick="gtag('event', 'click', {'event_category': '신곡 출시', 'event_label': '2205 - LOWER'})"></dd>
                                        <dt><p class="song">Lower</p><p class="er">Zid</p></dt>
                                    </dl>
                                </li>
                                <!-- ./ 5월-->
                            </ul>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    </div> <!-- content -->
</div> <!-- ./ wrapper -->

    <!-- ########################################## -->
    <!-- 팝업 -->
    <div class="layer-wrap" id="audioPop">
        <div class="shadow-audio" onclick="fnCloseAudioPop();"></div>
        <div class="pop-layer">
            <div class="pop-container">
                <h2 class="clearfix">음악 미리듣기
                    <a href="javascript:void(0);" class="btn-close" onclick="fnCloseAudioPop();"><img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/btn-close-min.png" alt="팝업 닫기 버튼"></a>
                </h2>
                <div class="frame">
                    <div class="view-cont">
                        <div id="slickAudio" class="music-slider">
                            <!-- 2022-07 -->
                            <div class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover1-rhythm_stage-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Rhythm Stage</p><p class="er">AltBeat</p></dt>
                                </dl>
                            </div>
                            <div class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover2-tap_shoes-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Tap Shoes</p><p class="er">Heins</p></dt>
                                </dl>
                            </div>
                            <div class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover3-protected_area-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Protected Area</p><p class="er">Jin</p></dt>
                                </dl>
                            </div>
                            <div class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover4-sparkling_bottle-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Sparkling Bottle</p><p class="er">LuFitueB</p></dt>
                                </dl>
                            </div>
                            <div class="new">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover5-multiverse-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Multiverse</p><p class="er">Machine</p></dt>
                                </dl>
                            </div>
                            <div class="music1">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2207/cover6-black_coffee-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Black Coffee</p><p class="er">Zid</p></dt>
                                </dl>
                            </div>
                            <!-- 2022-06 -->
                            <div class="music1">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover1-puzzle-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Puzzle</p><p class="er">AltBeat</p></dt>
                                </dl>
                            </div>
                            <div class="music2">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover2-morning_bread-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Morning Bread</p><p class="er">Heins</p></dt>
                                </dl>
                            </div>
                            <div class="music3">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover3-world_pilot-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song long">이세계 메카 파일럿이 되었다</p><p class="er">Jin</p></dt>
                                </dl>
                            </div>
                            <div class="music4">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover4-rainbow_day-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Rainbow Day</p><p class="er">LuFitueB</p></dt>
                                </dl>
                            </div>
                            <div class="music5">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover5-freeway-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Freeway</p><p class="er">Machine</p></dt>
                                </dl>
                            </div>
                            <div class="music6">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2206/cover6-illusion-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">허상</p><p class="er">Zid</p></dt>
                                </dl>
                            </div>
                            <!-- 2022-05 -->
                            <div class="music7">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover1-communicationaltbeat-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Communication</p><p class="er">AltBeat</p></dt>
                                </dl>
                            </div>
                            <div class="music8">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover2-cozmicwaltzheins-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Cozmic Waltz</p><p class="er">Heins</p></dt>
                                </dl>
                            </div>
                            <div class="music9">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover3-retrogame-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Retro Game</p><p class="er">Jin</p></dt>
                                </dl>
                            </div>
                            <div class="music10">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover4-thelegend-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">The Legend</p><p class="er">LuFitueB</p></dt>
                                </dl>
                            </div>
                            <div class="music11">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover5-whereisthefox-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Where Is The Fox</p><p class="er">Machine</p></dt>
                                </dl>
                            </div>
                            <div class="music12">
                                <dl>
                                    <dd>
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/o2jcollabo/popup/cd-big-min.png" alt="CD">
                                        <img src="//file.valofe.com/Valofe_file/web/r2beat-ko/images/landing/new/2205/cover6-lower-pop-min.jpg" alt="커버 이미지">
                                    </dd>
                                    <dt><p class="song">Lower</p><p class="er">Zid</p></dt>
                                </dl>
                            </div>
                        </div> <!-- ./ view-cont -->
                        <div class="wrap-audio-pannel">
                            <audio controls controlsList="nodownload" id="audio">
                                <source src="//file.valofe.com/Valofe_file/web/r2beat-ko/audio/o2jcollabo/O2Jam_ReMastering_ThePowerOfLight_(mp3cut.net).mp3" type="audio/mp3" id="audioSource">
                                이 문장은 사용자의 웹 브라우저가 audio 요소를 지원하지 않을 때 나타납니다!
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ 팝업 -->

    <script>
        AOS.init();
        $(document).ready(function() {
            AOS.refresh();
        })
        $(function(){
            let currentTime = Date.parse(new Date())/1000

            let endTime = Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1))/1000

            expire = endTime - currentTime;//今日剩余时间(单位:s)
            //console.log(expire)
            var name = 'landingOpenNotShow';
            // $.cookie(name, null, {path: "/"});
            if(1 == $.cookie(name)) {
                $('#landingOpenNotShow').hide();
            }
            $('#landingOpenNotShow').on("click", function() {
                $('#landingOpenNotShow').hide();
                var date = new Date();
                date.setTime(date.getTime()+expire*1000);//只能这么写，10表示10秒钟
                $.cookie(name, 1, {expires: date, path: '/'});
                window.location.href="/"
            });
        })
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-45196362-96"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-45196362-96');
    </script>

<!-- 통합 메뉴 footer -->
<?php
$CI =& get_instance();
$CI->load->view("/common/footer");
?>
<!-- ./ 통합 메뉴 footer -->