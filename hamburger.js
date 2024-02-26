function hamburgerMenu() {
    var x = document.getElementById("navbar_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
