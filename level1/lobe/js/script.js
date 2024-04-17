const btnNavEl = document.querySelector(".btn-mobile-nav");
const mobileHeaderEl = document.querySelector(".mobile-header");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  mobileHeaderEl.classList.toggle("nav-open");
});
