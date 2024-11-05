const toggleNav = (event) => {
    if (event.key === "Escape") {
        document.querySelector(".hamburger").classList.toggle("active");
        const menu = document.querySelector(" .mobile-nav__wrapper");
        menu.classList.toggle("mobile-nav__wrapper--active");
    } else if (!event.key) {
        document.querySelector(".hamburger").classList.toggle("active");
        const menu = document.querySelector(" .mobile-nav__wrapper");
        menu.classList.toggle("mobile-nav__wrapper--active");
    }
};

document.querySelector(".hamburger").addEventListener("click", toggleNav);
document.querySelector(".overlay").addEventListener("click", toggleNav);
window.addEventListener("keyup", toggleNav);