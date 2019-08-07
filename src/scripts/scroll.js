"use strict";

(() => {
  const BODY = document.querySelector("body");
  const ABOUT_LINK = document.querySelector(".about-link");
  const PORTFOLIO_LINK = document.querySelector(".portfolio-link");
  const RESUME_LINK = document.querySelector(".resume-link");
  const CONTACTS_LINK = document.querySelector(".contacts-link");
  const NAV_LIST = document.querySelector(".nav-list-wrapper");

  const ABOUT_SECTION = document.querySelector(".about-section");
  const PORTFOLIO_SECTION = document.querySelector(".portfolio-section");
  const RESUME_SECTION = document.querySelector(".resume-section");
  const CONTACTS_SECTION = document.querySelector(".contacts-section");

  const SMOOTH = {
    block: "nearest",
    behavior: "smooth"
  };

  const ANIMATION_TIME = 400;
  const TABLET_SCREEN_WIDTH = 800;
  const WINDOW_WIDTH = window.innerWidth;

  window.onCloseMenu = onCloseMenu;

  const onClick = section => {
    if (
      WINDOW_WIDTH <= TABLET_SCREEN_WIDTH &&
      !NAV_LIST.classList.contains("nav-list_hidden")
    ) {
      onCloseMenu();
      section.scrollIntoView();
    } else {
      section.scrollIntoView(SMOOTH);
    }
  };

  ABOUT_LINK.addEventListener("click", () => {
    onClick(ABOUT_SECTION);
  });
  PORTFOLIO_LINK.addEventListener("click", () => {
    onClick(PORTFOLIO_SECTION);
  });
  RESUME_LINK.addEventListener("click", () => {
    onClick(RESUME_SECTION);
  });
  CONTACTS_LINK.addEventListener("click", () => {
    onClick(CONTACTS_SECTION);
  });
})();
