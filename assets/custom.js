function openMenu(menuId) {
    var menu = document.getElementById(menuId);
    menu.classList.toggle("is-active");

    // Hide other menus when one is opened
    var allMenus = document.querySelectorAll(".mega-box.is-active");
    for (var i = 0; i < allMenus.length; i++) {
        if (allMenus[i].id !== menuId) {
            allMenus[i].classList.remove("is-active");
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var searchIcon = document.getElementById("searchIcon");
    var searchField = document.getElementById("searchField");
    var crossIcon = document.getElementById("crossIcon");
    var nav = document.getElementById("navlikn");

    var isSearchFieldVisible = false;

    searchIcon.addEventListener("click", function () {
        if (!isSearchFieldVisible) {
            searchField.style.display = "flex";
            nav.style.display = "none";
            crossIcon.style.display = "inline-block";
        }
        isSearchFieldVisible = true;
    });

    crossIcon.addEventListener("click", function () {
        searchField.style.display = "none";
        nav.style.display = "block";
        crossIcon.style.display = "none";
        isSearchFieldVisible = false;
    });
});