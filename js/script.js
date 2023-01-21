const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navCloseFirst = document.querySelector('.close_window')
const navClose = document.querySelector('.close_window_1');
const navCloseTwo = document.querySelector('.close_window_2');
const navCloseThree = document.querySelector('.close_window_3');
const navBtnPlus = document.querySelector('.nav-button-plus');
const headerNavPlus = document.querySelector('.header-nav-plus');
navCloseFirst.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
        headerNavPlus.classList.add('nav-list')
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}
navBtnPlus.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
        headerNavPlus.classList.add('nav-list')
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}
navCloseTwo.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}
navCloseThree.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}
navClose.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './assets/nav-close.svg';
    }else {
        navBtnImg.src = './assets/nav.svg';
    }
}

// ANIMATION
AOS.init({
    once: true
});
// SCROLL
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500); //1500
    });
});
// HEADING-bubble
var $header = $(".header-nav-plus")
var scroll = 50;
var active = "active"
$(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
        $header.addClass(active)
    } else {
        $header.removeClass(active)
    }
});

// PRELOADER
const images = document.querySelectorAll("img");
let isLoaded = false;
let isLoadingAnimationEnd = false;
const imgLoad = imagesLoaded(images);

const entranceAnimation = () => {
    const tl = gsap.timeline();
    tl.to(".loading-image", {
        y: -100,
        duration: 1,
        ease: "power2.inOut"
    })
        .to(
            ".loading",
            {
                yPercent: -100,
                duration: 1.25,
                ease: "power4.inOut"
            },
            0
        )
        .to(
            ".all",
            {
                duration: 1,
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: "power2.out"
            },
            0.6
        );
};

const loadingAnimation = () => {
    const tl = gsap.timeline({
        onComplete: () => {
            isLoadingAnimationEnd = true;
            if (isLoaded) entranceAnimation();
        }
    }).from(".loading", {
        yPercent: 100,
        ease: "power3.inOut",
        duration: 1
    })
        .from(
            ".loading-image",
            {
                y: 80,
                duration: 1,
                ease: "power2.out"
            },
            0.5
        );
};

loadingAnimation();

imgLoad.on("always", function () {
    isLoaded = true;
    if (isLoadingAnimationEnd) entranceAnimation();
});





