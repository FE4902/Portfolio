$(document).ready(function () {
  // 팝업 애니메이션
  var popupAnime = anime({
    targets: '.popup',
    top: [
      { value: '+=100%', duration: 0 },
      { value: '50%', duration: 1000 }
    ]
  });

  // 버튼 애니메이션
  var buttonAnime = anime.timeline({
    delay: 100
  });
  buttonAnime.add({
    targets: '.main__area__button',
    scale: [
      { value: 0, duration: 0 },
      { value: 1, duration: 800 }
    ]
  });

  // 게임시작 버튼 눌렀을때 나오는 팝업
  $('.menu__button--1').on('click', function () {
    $('.install').show();
  });

  $('.install__close-button').on('click', function () {
    $('.install').hide();
  });

  // 팝업 열기
  $('.main__area__button').on('click', function () {
    var buttonIndex = $(this).index() + 1;
    $('.dim').show();
    $('.popup--' + buttonIndex + '').css({ display: 'flex' });

    popupAnime.play();
  });

  // 유의사항 팝업 열기
  $('.notice-button').on('click', function () {
    $('.popup--notice, .dim').show();

    popupAnime.play();
  });

  // 팝업 닫기
  $('.popup__close-button').on('click', function () {
    $('.popup, .dim').hide();
  });
});
