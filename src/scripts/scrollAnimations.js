import { addAnimationClass, setOpacity } from "./utils.js";

const elementsToAnimate = document.querySelectorAll('[data-reveal="true"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        addAnimationClass(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

setOpacity(elementsToAnimate, 0);

elementsToAnimate.forEach((el) => {
  observer.observe(el);
});
