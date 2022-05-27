$(function () {
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    // Accordion
    $(document).on('click', '.accordion__button', function () {
        $(this).closest('.accordion__item').siblings().removeClass('-active');
        $(this).closest('.accordion__item').toggleClass('-active');
    });

    // SNS
    $(document).on('click', '.sns__button', function () {
        $('.-is-active').not('.sns').removeClass('-is-active');
        $('.sns').toggleClass('-is-active');
    });

    $(document).on('click', '.sns__link', function () {
        $('.sns').removeClass('-is-active');
    });

    // MENU
    $(document).on('click', '.nav__button', function () {
        $('.-is-active').removeClass('-is-active');
        $('.menu').addClass('-is-active');
    });

    $(document).on('click', '.menu__button', function () {
        $('.menu').removeClass('-is-active');
    });

    // LANG
    $(document).on('click', '.lang__button', function () {
        $('.-is-active').not('.lang').removeClass('-is-active');
        $('.lang').toggleClass('-is-active');
    });

    $(document).on('click', '.lang__link', function () {
        $('.lang').removeClass('-is-active');
    });

    // DOWNLOAD
    $(document).on('click', '.util__button', function () {
        $('.-is-active').removeClass('-is-active');
        $('.download').addClass('-is-active');
    });

    $(document).on('click', '.download__button', function () {
        $('.download').removeClass('-is-active');
    });

    // WEMIX
    $(document).on('click', '.price__button--btn, .price__button--tab', function () {
        $(this).addClass('-active');
        $(this).siblings('.-active').removeClass('-active');
    });

    // STAKING
    $(document).on('click', '.staking__more', function () {
        let target = $(this.hash);
        let headerHeight = $('.header').height();
        let offsetTop = target.offset().top - headerHeight;
        $('html, body').animate({ scrollTop: offsetTop }, 500);
        return false;
    });

    // POPUP
    $(document).on('click', '.staking__mystake-btn--stake', function () {
        popupOpen.stake();
    });
    $(document).on('click', '.staking__mystake-btn--unstake', function () {
        popupOpen.unstake();
    });
    $(document).on('click', '.staking__mystake-btn--reward', function () {
        popupOpen.reward();
    });
    $(document).on('click', '.staking__history-btn', function () {
        popupOpen.history();
    });
    $(document).on('click', '.popup__close', function () {
        popupClose();
    });
});

// 팝업창 열기
const popupOpen = {
    stake: function () {
        $('.popup, .popup__stake').addClass('-is-active');
    },
    unstake: function () {
        $('.popup, .popup__unstake').addClass('-is-active');
    },
    reward: function () {
        $('.popup, .popup__reward').addClass('-is-active');
    },
    history: function () {
        $('.popup, .popup__history').addClass('-is-active');
    }
};

function popupClose() {
    $('.popup, .popup__stake, .popup__unstake, .popup__reward, .popup__history').removeClass('-is-active');
}

// GSAP
gsap.registerPlugin(ScrollTrigger);
let articleArr = document.querySelectorAll('article');
for (let i = 0; i < articleArr.length; i++) {
    let eq = i + 1;

    gsap.to(articleArr[i], {
        scrollTrigger: {
            trigger: articleArr[i],
            start: 'top center',
            end: 'bottom center',
            toggleClass: {
                targets: `.floating__item:nth-child(${eq})`,
                className: 'floating__item--active'
            }
        }
    });
}

window.addEventListener('load', function () {
    const SWIPER_ELEMENT = document.querySelector('.how__swiper');
    const howSwiper = new Swiper(SWIPER_ELEMENT, {
        navigation: {
            nextEl: '.how__swiper-button-right',
            prevEl: '.how__swiper-button-left'
        },
        pagination: {
            el: '.how__swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        observeParents: true,
        observer: true
    });

    setTimeout(250, function () {
        if (document.documentElement.lang === 'ar') {
            SWIPER_ELEMENT.setAttribute('dir', 'rtl');
            howSwiper.update();
        }
    });
});
