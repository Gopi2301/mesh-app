const menu = document.querySelector(".menu");
menu.addEventListener('click', myFunction)
function myFunction() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}