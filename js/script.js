const menu = document.querySelector(".menu");
// Menu Toggle Logic
menu.addEventListener('click', myFunction)
function myFunction() {
    var menu = document.getElementById("menus");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Header fix on top 
window.onscroll = function () { headerFix() }
const header = document.querySelector('.header')
const sticky = header.offsetTop;
// const headerText = document.getElementsByClassName('.hover')
function headerFix() {
    if (window.pageYOffset > innerHeight) {
        header.style.opacity = 0.5;
        // header.style.position = "fixed";
        // headerText.style.color = "red";
        console.log('trigger')
        console.log(window.pageYOffset);
        console.log(window.innerHeight);

    }
    else {
        // header.style.position = "static";
        header.style.opacity = '1';
        // headerText.style.color = "black"
    }
}