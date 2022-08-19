const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const nav_li = document.getElementsByClassName('nav-li')

nav_li.onclick = () => {
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
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// HEADING-SCROLL
var $header = $(".header-nav-plus")
var scroll = 75;
var active = "active"
$(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
        $header.addClass(active)
    } else {
        $header.removeClass(active)
    }
})