function toggleMenu() {
    // This function allows the hamburger icon to be interactive and display ".menu-links list"
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}