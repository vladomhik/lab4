const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.scr = "./img/svg/NAVCLOSE.svg";

    } else{
        navBtnImg.scr = "./img/svg/NAV.svg";
    }
}

AOS.init();