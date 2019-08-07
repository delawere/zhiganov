"use strict";

(() => {
  const NAV = document.querySelector(".nav");
  const STICKY = NAV.offsetTop;

  const onScroll = () => {
    if (window.pageYOffset - 80 > STICKY) {
      NAV.classList.add("sticky");
    } else {
      NAV.classList.remove("sticky");
    }
  };

  window.onscroll = () => {
    onScroll();
  };
})();
