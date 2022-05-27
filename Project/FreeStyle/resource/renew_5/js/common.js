
$(document).ready(function () {
    // 모바일 체크
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var innerHeight = window.innerHeight;


    // 게임스타트 버튼 눌렀을때 팝업 띄우기
    $('.game_start').on('click', function () {
        $('.add').show();
    });

    // x 버튼이나 게임설치버튼 눌렀을때 팝업 닫기
    $('.add_x, .add_y').on('click', function () {
        $('.add').hide();
    });

    // 플로팅 배너 맨위로 버튼
    $('.floating-banner--1').on('click', function () {
        $('html, body')
            .stop()
            .animate({ scrollTop: 0 }, 500);
    });

    // 플로팅 배너 유의사항 버튼
    $('.floating-banner--2').on('click', function () {
        $('.dim, .popup--notes').show();
    });

    // 유의사항 닫기 버튼
    $('.x, .popup__button--no').on('click', function () {
        $('.dim, .popup').hide();
    });

    var floatPosition = $('.floating-banner').css('top');
    floatPosition = parseInt(floatPosition);

    // 스크롤 이벤트
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition + 'px';

        $('.floating-banner')
            .stop()
            .animate({
                top: newPosition,
            });

        if (!isMobile) {
            if ($(window).scrollTop() < 750) {
                $('.floating-banner').hide();
            }

            if ($(window).scrollTop() > 750) {
                $('.new .paper').addClass('on');
                $('.new .char').addClass('on');
                $('.floating-banner').show();
            }

            if ($(window).scrollTop() > 1600) {
                $('.comeback .paper').addClass('on');
                $('.comeback .char').addClass('on');
            }

            if ($(window).scrollTop() > 2550) {
                $('.existing .paper').addClass('on');
                $('.existing .char').addClass('on');
            }

            if ($(window).scrollTop() > 3350) {
                $('.plus .paper').addClass('on');
                $('.plus .char').addClass('on');
            }
        }

    });
    if (isMobile) {
        $('.paper, .char').addClass('on')
    }
});
