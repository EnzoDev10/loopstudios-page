const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-btn");
const menuIcon = menuToggle.querySelector("img");

const links = document.querySelectorAll(".nav-item");


menuToggle.addEventListener("click", () => {
    if (menuIcon.src.endsWith("hamburger.svg")) {
        menu.classList.add("active");
        menuIcon.src = "images/icon-close.svg";
    } else {
        menu.classList.remove("active");
        menuIcon.src = "images/icon-hamburger.svg";
    }
})

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuIcon.src = "images/icon-hamburger.svg";
    })

});