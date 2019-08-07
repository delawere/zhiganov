"use strict";

(() => {
  const MENU_BUTTON = document.querySelector(".menu-button");
  const CLOSE_MENU_BUTTON = document.querySelector(".close-menu-button");
  const NAV_LIST = document.querySelector(".nav-list-wrapper");
  const BODY = document.querySelector("body");

  const ANIMATION_TIME = 400;

  const onOpenMenu = () => {
    NAV_LIST.classList.remove("nav-list_hidden");
    setTimeout(() => {
      BODY.style.overflow = "hidden";
    }, ANIMATION_TIME);
  };

  const onCloseMenu = () => {
    NAV_LIST.classList.add("nav-list_hidden");
    setTimeout(() => {
      BODY.style.overflow = "";
    }, ANIMATION_TIME);
  };

  MENU_BUTTON.addEventListener("click", onOpenMenu);
  CLOSE_MENU_BUTTON.addEventListener("click", onCloseMenu);
  window.onCloseMenu = onCloseMenu;
})();
