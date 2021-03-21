import {setOpacity, setAnimationDelays, disableScroll, enableScroll} from "./utils.js";

const burgerBtn = document.querySelector(".btn-burger");
const nav = document.querySelector(".nav");
const navItems = nav.querySelectorAll(".nav__item");

const toggleMobileMenu = () => {
  setOpacity(navItems, 0);
  setAnimationDelays(navItems);

  nav.classList.toggle("active");
  burgerBtn.classList.toggle("active");

  if (nav.classList.contains("active")) {
    disableScroll();
  } else {
    enableScroll();
    setOpacity(navItems, 1);
  }
};

nav.addEventListener("click", ({ target }) => {
  if (nav.classList.contains("active") && target.classList.contains("nav__link")) {
    toggleMobileMenu();
  }
});

burgerBtn.addEventListener("click", toggleMobileMenu);

window.addEventListener("resize", () => {
  if(window.innerWidth > 1024 && nav.classList.contains("active")) {
    enableScroll();
    setOpacity(navItems, 1);
  }
})
