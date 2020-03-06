let hamburger = document.getElementById("hamburger");
let mobileNav = document.querySelector(".mobile__nav");

hamburger.addEventListener("click", () => {
    console.log("hello ")
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
})