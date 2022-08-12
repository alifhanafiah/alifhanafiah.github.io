const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");
const social = document.getElementById("social");

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  social.classList.toggle("show");
});
