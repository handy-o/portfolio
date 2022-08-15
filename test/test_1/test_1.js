$(document).ready(function() {

  // 단계진행
  var nowStep = 0;
  window.goNextStep = function() {
    $('html, body').animate({scrollTop:0}, 400);
    $('.sv').css({display:'none'});
    $('.btn-wrap.btn-next').removeClass('on');
    nowStep += 1;
    //console.log(nowStep);
    switch(nowStep) {
      case 0 : 
        break;
      
      case 1 :
        $('.notice').removeClass('on');
        $('#survey-wrap .sv').css({'height':'calc(100vh - 100px)'});
        $('.survey2.sv').css({display:'block'});
        $('.btn-wrap.btn-next a').text('다음');
        break;

      case 2 :
        $('.survey3.sv').css({display:'block'});
      break;

      case 3 :
        $('.survey4.sv').css({display:'block'});
        $('.btn-wrap.btn-next').addClass('on');
      break;

      case 4 :
        $('.notice').addClass('on');
        $('#survey-wrap .sv').css({'height':'auto'});
        $('.survey5.sv').css({display:'block'}).addClass('on');
        setNoticePos(5);
        $('.btn-wrap.btn-next').addClass('on');
        $('.btn-wrap.btn-next a').text('닫기');
      break;

      case 5 :
        location.reload();
        $('.survey1.sv').css({display:'block'});
        $('.btn-wrap.btn-next').addClass('on');
        $('.btn-wrap.btn-next a').text('시작하기');
        nowStep = 0;
      break;
    }
  }

  // seclect 태그 custom
  $('.survey2 select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option:selected').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);


    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        value: $this.children('option').eq(i).val(),
        class : 'bdr'
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $listItems.click(function(e) {
      e.stopPropagation();
      //$styledSelect.text($(this).text()).removeClass('active');
      $this.val($listItems.attr('props',''));
      $this.val($listItems.attr('class','bdr'));
      $this.val($(this).attr('props','selected'));
      $this.val($(this).attr('class','bdr selected'));
      //$list.hide();
    });
  });


  // select 선택시 버튼 활성화
  $('.survey2 .select-wrap .select-options li').on('click',function(){
    if( $(this).hasClass('selected') ) {
      $('.btn-wrap.btn-next').addClass('on');
    } else {
      $('.btn-wrap.btn-next').removeClass('on');
    }
  })

  // 체크박스 선택 시 버튼 활성화
  $('.checkbox-wrap li').on('click', function() {
    var checkList = document.querySelectorAll('.checkbox-wrap li input:checked');
    var textAreaChk = document.querySelector('.survey3 textarea');
    if(checkList.length === 0) {
      $('.btn-wrap.btn-next').removeClass('on');
    }
    if(checkList.length > 0 && checkList.length < 4) {    
      if(checkList.length == 1 && checkList[0].id === 'etc') {  // 하나 선택했는데 '기타'만 선택했을 때
          if(textAreaChk.value.length == 0) {                   // textarea에 아무 글도 없으면 
            $('.btn-wrap.btn-next').removeClass('on');           // 버튼 비활성화
          } else {
            textAreaChk.addEventListener('input', () => {
              var textLnChk =  textAreaChk.value.length;
              if(textLnChk > 0) {
                $('.btn-wrap.btn-next').addClass('on');
              } else {
                $('.btn-wrap.btn-next').removeClass('on');
              }
            })
          }
          
      } else {
        $('.btn-wrap.btn-next').addClass('on');
      }
    } else if(checkList.length === 4) { // 3개 이상 클릭하면 
      $(this).find('input').prop('checked', false); // 마지막에 클릭한 요소의 input의 checked를 해제
      fnOpenPop();
    } else {
      $('.btn-wrap.btn-next').removeClass('on');
    }
  })

  // 텍스트박스 (의견남기기) 입력 시 버튼 활성화 => (선택사항이라서 기능 제거)
  // var textArea = document.querySelector('.survey4 textarea');
  // textArea.addEventListener('input', () => {
  //     var textLn =  textArea.value.length;
  //     if(textLn > 0) {
  //       $('.btn-wrap.btn-next').addClass('on');
  //     } else {
  //       $('.btn-wrap.btn-next').removeClass('on');
  //     }
  // })

  // '대출금리가 낮아서' 체크 시
  $(".checkbox-wrap ul li input[id='low']").on('click', function() {
    if($(this).prop('checked') === false) return;
    fnOpenPop();
  })


  // '기타' 클릭 시 스크롤이동
  $(".checkbox-wrap ul li input[id='etc']").on('click', function() {
    var boxElement = document.querySelector('.survey3');
    var textElement = document.querySelector('.text-area');
    var intElemScrollHeight = boxElement.scrollHeight;
    var textAreaScrollHeight = textElement.getBoundingClientRect().height; 
    //console.log(intElemScrollHeight);
    //console.log(textAreaScrollHeight);

    if($(this).prop('checked') === false) return;
    boxElement.scrollTo({ left: 0, top: intElemScrollHeight + textAreaScrollHeight, behavior: "smooth" });
  });


  // 팝업 띄우기
   window.fnOpenPop = function(){
    $('.popup-wrap, .popup').fadeIn();
  }  
  // 팝업 닫기
  window.fnClosePop = function(){
    $('.popup-wrap, .popup').fadeOut();
  }


  // .notice 위치 선정
  function setNoticePos(n) {
    var wH = $(window).height();
    var sv = $('#survey-wrap .survey'+n+'').outerHeight(true);
    var nH = $('.notice').outerHeight();
    // console.log('wH ' + wH);
    // console.log('sv ' + sv);
    // console.log('nH ' + nH);
    if( wH > sv + nH ) {
      $('.notice').css({'margin-top': wH - sv - nH - 105 +'px'})
    } else {
      $('.notice').css({'margin-top': '40px'})
    }
  }
  setNoticePos(1);
   


})