"use strict";

(() => {
  const BODY = document.querySelector("body");
  const LANG_BUTTON = document.querySelector(".lang-button");
  const LANG_MENU = document.querySelector(".lang-menu");
  const LANG_MENU_CLASS = "lang-menu";
  const LANG_MENU_CLASS_HIDDEN = "lang-menu_hidden";
  const LANG_MENU_CLASS_ACTIVE = "lang-button_active";
  const RADIO_BUTTONS = LANG_MENU.querySelectorAll(".lang-menu__label");
  const BODY_COVER = document.querySelector(".body-cover-bg");

  const findAncestor = (target, parentClassName) => {
    while (
      (target = target.parentElement) &&
      !target.classList.contains(parentClassName)
    );
    return target;
  };

  const onClosePopup = () => {
    LANG_MENU.classList.add(LANG_MENU_CLASS_HIDDEN);
    LANG_BUTTON.classList.remove(LANG_MENU_CLASS_ACTIVE);
    BODY.removeEventListener("click", onOutsideClick);
  };

  const onOutsideClick = event => {
    const isOutsideClick = !findAncestor(event.target, LANG_MENU_CLASS);

    if (isOutsideClick) {
      if (typeof onClosePopup === "function") {
        onClosePopup();
      }
    }
  };

  const onLangButtonClick = event => {
    event.stopPropagation();
    LANG_MENU.classList.toggle(LANG_MENU_CLASS_HIDDEN);
    LANG_BUTTON.classList.toggle(LANG_MENU_CLASS_ACTIVE);

    if (!LANG_MENU.classList.contains(LANG_MENU_CLASS_HIDDEN)) {
      BODY.addEventListener("click", onOutsideClick);
    }
  };

  const hideBodyCover = () => {
    onClosePopup();
    BODY_COVER.classList.add("body-cover-bg_hidden");
  };

  RADIO_BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
      BODY_COVER.classList.remove("body-cover-bg_hidden");
      window.changeLang(event.currentTarget.dataset.lang, () =>
        setTimeout(hideBodyCover, 500)
      );
    });
  });

  LANG_BUTTON.addEventListener("click", onLangButtonClick);

  window.findAncestor = findAncestor;
  window.onOutsideClick = onOutsideClick;
})();
