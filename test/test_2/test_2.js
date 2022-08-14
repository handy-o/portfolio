$(document).ready(function() {
/* 로드시 연탄 기부 응원개수 */
var gageNum = $('input.current-cheerer').val();
console.log(gageNum)

function loadCheerCnt(n) {
  var cheerNum =  String(n);
  var cheerNumArr = Array.from(cheerNum);
  console.log(cheerNumArr);
  for(i=0 ; i<5 ; i++) {
    $('.current-count img').eq(i).attr('src','./images/section2/num-'+cheerNumArr[i]+'-g.png');
  }
}
loadCheerCnt(gageNum)
// $('h2.current-cheerer').text(gageNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));


/* 누적 예약자수에 따른 bar 이동 */
function gage(n) {
  if (0 <= n && n < 60000  ) {
      var gage = (n - 0) / 600; // [0] ~ 60000 => 60000 / 100 => [600]
      $('.accum-bar').css('width', gage + '%');
  }  else { // 모두 달성
      $('.accum-bar').css('width','100%'); //모두 채워짐
  }
  var widthAccum01 = $('.accum-bar').width();

  $('#accum_hole').css({'width': widthAccum01+'px'});
  $('.current-count-mark-wrap').css({'left': widthAccum01+'px'});
}
gage(gageNum);
/* ./ 사전예약자 수 */






/* 연탄기부 응원하기 */
var isCheered = false;
function addCheerCnt(n) {
  var cheerNum =  String(n);
  var cheerNumArr = Array.from(cheerNum);
  //console.log(cheerNumArr);
  for(i=0 ; i<5 ; i++) {
    $('.current-count img').eq(i).attr('src','./images/section2/num-'+cheerNumArr[i]+'-y.png');
  }
}
window.fnCheer = function() {
  var newGageNum = parseInt(gageNum) + 1;
  gage(newGageNum);
  addCheerCnt(newGageNum);
  if (!isCheered) {
    //$('.current-cheerer-mark').text(gageNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    $('.current-cheerer-mark').text(newGageNum);

    $('.section2 .btn-wrap button').attr('title','연탄기부 응원완료!').addClass('complete');
    $('.section3 .btn-wrap button').attr('title','동의완료!').addClass('complete');
    $('.section2 .btn-wrap button').append(`
    <img src="./images/section2/bt-01-completed-1.png" alt="번째" class="">
    <br>
    <img src="./images/section2/bt-01-completed-2.png" alt="연탄기부 응원완료!" class="">
    `);
    $('.section2 .btn-wrap button .current-cheerer-mark').removeClass('hidden');
  } else {
    return
  }
  isCheered = true;
 
  
}
console.log(gageNum)

/* ./ 연탄기부 응원하기 */


/* 아코디언 메뉴 */
$('.accordion-wrap .btn-arrow ').on('click', function() {
  // 모션변경
  $(this).toggleClass('on');

  var height = 0;
  $(this).parent().next().find('.conts').each(function() {
    height += $(this).outerHeight(true);
    console.log(height)
  });
  if( $(this).hasClass('on') === true) {
    $(this).parent().next().addClass('on').css({'height':height+'px'});
  } else {
    $(this).parent().next().removeClass('on').css({'height':0});
  }
});

/* ./ 아코디언 메뉴 */


$(window).resize(function() {
  gage(gageNum);
})
});


