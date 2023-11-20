const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links")
const closeIcon = document.getElementById("nav-close")
closeIcon.addEventListener("click", () => {
    navLinks.classList.add("hidden")
})
hamburger.addEventListener("click", () => {
    navLinks.classList.remove("hidden")
})