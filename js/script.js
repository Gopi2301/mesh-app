const menu = document.querySelector(".menu");

// Menu Toggle Logic
menu.addEventListener('click', myFunction)
var menuClose = true;
function myFunction() {
    var menu = document.getElementById("menus");
    menuClose = !menuClose;
    if (menuClose) {
        menu.classList.add('menu-open');
    }
    else {
        menu.classList.remove('menu-open')
    }
    console.log(menuClose);

}

// Header fix on top 
window.onscroll = function () { headerFix() }

const header = document.querySelector('.header');
const headerText = document.querySelectorAll('.hover');
function headerFix() {
    console.log(scrollY);
    if (scrollY > innerHeight) {
        header.style.opacity = 0.9;
        header.classList.add('navbar-onchange');
        headerText.style.color = "#fede60";
    }
    else {
        header.classList.remove('navbar-onchange')

    }
}