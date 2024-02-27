const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-btn");
const menuIcon = menuToggle.querySelector("img");

const links = document.querySelectorAll(".nav-item-mob");


menuToggle.addEventListener("click", () => {
    if (menuIcon.src.endsWith("hamburger.svg")) {
        body.style.overflowY = "hidden";
        menu.classList.add("active");
        menuIcon.src = "images/icon-close.svg";
    } else {
        body.style.overflowY = "visible";
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