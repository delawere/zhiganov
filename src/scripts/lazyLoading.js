"use strict";

(() => {
  const SCROLL_TOP = window.pageYOffset;
  const DELAY = 20;
  const THRESHOLD = 400;

  document.addEventListener("DOMContentLoaded", () => {
    const lazyLoad = () => {
      let lazyloadThrottleTimeout;
      let LAZY_LOAD_PICTURES = document.querySelectorAll("picture.lazy");

      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(() => {
        LAZY_LOAD_PICTURES.forEach(pic => {
          let CHILDS = pic.querySelectorAll("source, img");

          if (pic.offsetTop < window.innerHeight + SCROLL_TOP + THRESHOLD) {
            CHILDS.forEach(it => {
              if (it.dataset.srcset) {
                it.srcset = it.dataset.srcset;
              }

              if (it.dataset.src) {
                it.src = it.dataset.src;
              }
            });
            pic.classList.remove("lazy");
          }
        });
        if (LAZY_LOAD_PICTURES.length == 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationChange", lazyLoad);
        }
      }, DELAY);
    };

    //Load images after open page, if they get in view
    lazyLoad();

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);
  });
})();
