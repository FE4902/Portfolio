$(function () {
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('.banner__close').on('click', function (e) {
        $('.banner').hide();
    });

    $('.gnb__link:not([href="#"]), .gnb__contents-link').on('click', function () {
        $('.js-gnb, .gnb').removeClass('-is-active');
    });

    $('.js-gnb, .js-gnb-contents, .js-community, .js-lang, .js-warp').on('click', function () {
        let thisActive = $(this).hasClass('-is-active');
        let gnb = $(this).hasClass('js-gnb');
        let lang = $(this).hasClass('js-lang');
        let warp = $(this).hasClass('js-warp');

        if (!thisActive) {
            $(this).addClass('-is-active');
            if (gnb) {
                $('.gnb').addClass('-is-active');
            } else if (lang) {
                $('.js-gnb').removeClass('-is-active');
                $('.gnb').removeClass('-is-active');
            } else if (warp) {
                $('.js-gnb').removeClass('-is-active');
                $('.gnb').removeClass('-is-active');
            }
        } else {
            $(this).removeClass('-is-active');
            if (gnb) {
                $('.gnb').removeClass('-is-active');
            }
        }
    });

    /* 비슷한 이벤트 나중에 한번에 묶기 */
    $('.js-ship').on('click', function () {
        let thisData = $(this).data('ship');

        $('.game__swiper-slide--ship .unit__tab-item--active').removeClass('unit__tab-item--active');
        $(this).parent().addClass('unit__tab-item--active');

        $('.game__swiper-slide--ship .unit__item--active').removeClass('unit__item--active');
        $('.game__swiper-slide--ship .unit__item[data-ship=' + thisData + ']').addClass('unit__item--active');
    });

    $('.js-air').on('click', function () {
        let thisData = $(this).data('air');

        $('.game__swiper-slide--air .unit__tab-item--active').removeClass('unit__tab-item--active');
        $(this).parent().addClass('unit__tab-item--active');

        $('.game__swiper-slide--air .unit__item--active').removeClass('unit__item--active');
        $('.game__swiper-slide--air .unit__item[data-air=' + thisData + ']').addClass('unit__item--active');
    });

    // POPUP
    $('.js-detail').on('click', function () {
        popup.detail();
    });

    $('.js-popup-close').on('click', function () {
        popup.close();
    });

    $(window).resize(function () {
        $('.-is-active').removeClass('-is-active');
    });

    // 영역 외 클릭
    $('body').on('click', function (e) {
        let target = e.target;

        // GNB__CONTENTS
        if ($(target).parents('.js-gnb-contents').length < 1) {
            $('.js-gnb-contents').removeClass('-is-active');
        }

        // COMMUNITY
        if ($(target).parents('.js-community').length < 1) {
            $('.js-community').removeClass('-is-active');
        }

        // LANG
        if ($(target).parents('.js-lang').length < 1) {
            $('.js-lang').removeClass('-is-active');
        }

        // LANG
        if ($(target).parents('.js-warp').length < 1) {
            $('.js-warp').removeClass('-is-active');
        }
    });

    $('.popup').on('click', function (e) {
        let target = e.target;

        if ($(target).parents('.popup__container').length < 1) {
            popup.close();
        }
    });
});

const popup = {
    subscribe: function () {
        $('.popup, .popup__container--subscribe').addClass('-active');
    },
    detail: function () {
        $('.popup, .popup__container--detail').addClass('-active');
    },
    close: function () {
        $('.popup, .popup__container--subscribe, .popup__container--detail').removeClass('-active');
    }
};

// CONTENTS FLOATING
gsap.registerPlugin(ScrollTrigger);
gsap.to('.contents', {
    scrollTrigger: {
        trigger: '.contents',
        start: 'top top',
        end: 'bottom 500px',
        toggleClass: {
            targets: '.contents__floating',
            className: '-active'
        }
    }
});

gsap.to('.game', {
    scrollTrigger: {
        trigger: '.game',
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
            targets: '.contents__floating-item:nth-child(1)',
            className: 'contents__floating-item--active'
        }
    }
});

gsap.to('.milico', {
    scrollTrigger: {
        trigger: '.milico',
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
            targets: '.contents__floating-item:nth-child(2)',
            className: 'contents__floating-item--active'
        }
    }
});

gsap.to('.play', {
    scrollTrigger: {
        trigger: '.play',
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
            targets: '.contents__floating-item:nth-child(3)',
            className: 'contents__floating-item--active'
        }
    }
});

// SWIPER
const gameSwiper = new Swiper('.game__swiper', {
    navigation: {
        nextEl: '.game__swiper-button-right',
        prevEl: '.game__swiper-button-left'
    },
    pagination: {
        el: '.game__swiper-pagination',
        clickable: true
    }
});

const mediaSwiper = new Swiper('.media__swiper', {
    navigation: {
        nextEl: '.media__swiper-button-right',
        prevEl: '.media__swiper-button-left'
    },
    pagination: {
        el: '.media__swiper-pagination',
        clickable: true
    },
    on: {
        slideChange: function (el) {
            $('.media__swiper-slide').each(function () {
                var youtubePlayer = $(this).find('iframe').get(0);
                if (youtubePlayer) {
                    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        }
    }
});

gsap.registerPlugin(ScrollTrigger);
var aniArr = new Array('.game', '.milico', '.play', '.media', '.promotion', '.roadmap');
aniArr.forEach(function (ele) {
    gsap.to(ele, {
        scrollTrigger: {
            trigger: ele,
            start: 'top center',
            onEnter: function () {
                $(ele).addClass('-ani');
            }
        }
    });
});
