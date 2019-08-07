"use strict";

(() => {
  const ABOUT_SECTION = document.querySelector(".about-section");
  const PORTFOLIO_SECTION = document.querySelector(".portfolio-section");
  const RESUME_SECTIONS = document.querySelector(".resume-section");
  const CONTACTS_SECTION = document.querySelector(".contacts-section");

  const MARGIN_TOP = 700;

  const onScroll = (sectionElem, event) => {
    if (window.pageYOffset > sectionElem.offsetTop - MARGIN_TOP) {
      sectionElem.classList.remove("hidden");
      window.removeEventListener("scroll", event);
    }
  };

  const onScrollAbout = () => {
    onScroll(ABOUT_SECTION, onScrollAbout);
  };

  const onScrollPortfolio = () => {
    onScroll(PORTFOLIO_SECTION, onScrollPortfolio);
  };

  const onScrollResume = () => {
    onScroll(RESUME_SECTIONS, onScrollResume);
  };

  const onScrollContacts = () => {
    onScroll(CONTACTS_SECTION, onScrollContacts);
  };

  const scrollEvents = [
    onScrollAbout,
    onScrollPortfolio,
    onScrollResume,
    onScrollContacts
  ];

  scrollEvents.forEach(event => {
    window.addEventListener("scroll", event);
  });
})();
