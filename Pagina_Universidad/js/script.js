document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown-submenu");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseover", function () {
            var submenu = this.querySelector(".dropdown-menu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            var submenu = this.querySelector(".dropdown-menu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});

