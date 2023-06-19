
function myFunction() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
        // this.innerHTML = <i class="fa-sharp fa-solid fa-xmark-large"></i>
    } else {
        x.style.display = "block";
    }
}