
const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const paintColorsElm = document.querySelectorAll('.paint-colors li');
let showMenu = false;

// Functions:
function toogleMenu() {

    if(!showMenu) {
        menuBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
    } else {
        menuBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
    }
    showMenu = !showMenu;

}


// Event Listners:
menuBtn.addEventListener('click', toogleMenu);