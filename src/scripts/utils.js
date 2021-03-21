export const disableScroll = () => {
  document.body.classList.add("locked");
};

export const enableScroll = () => {
  document.body.classList.remove("locked");
};

export const setOpacity = (elements, opacity) => {
  elements.forEach((el) => {
    el.style.opacity = opacity;
  });
};

export const setAnimationDelays = (elements, delayInMs = 30) => {
  elements.forEach((el, i) => {
    el.style.animationDelay = i * delayInMs + "ms";
  });
};

export const addAnimationClass = (el) => {
  const animationClass = "anim"
  el.classList.add(animationClass);
};
