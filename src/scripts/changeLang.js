'use strict';

(() => {
  const BODY = document.querySelector('body');
  const LANG_BUTTON = document.querySelector('.lang-button');
  const LANG_MENU = document.querySelector('.lang-menu');
  const LANG_MENU_CLASS = 'lang-menu';
  const LANG_MENU_CLASS_HIDDEN = 'lang-menu_hidden';
  const LANG_MENU_CLASS_ACTIVE = 'lang-button_active';
  const LANG_MENU_ITEMS = LANG_MENU.querySelectorAll('.lang-menu__item');

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
    BODY.removeEventListener('click', onOutsideClick);
  };

  const onOutsideClick = event => {
    const isOutsideClick = !findAncestor(event.target, LANG_MENU_CLASS);

    if (isOutsideClick) {
      if (typeof onClosePopup === 'function') {
        onClosePopup();
      }
    }
  };

  const onLangButtonClick = event => {
    event.stopPropagation();
    LANG_MENU.classList.toggle(LANG_MENU_CLASS_HIDDEN);
    LANG_BUTTON.classList.toggle(LANG_MENU_CLASS_ACTIVE);

    if (!LANG_MENU.classList.contains(LANG_MENU_CLASS_HIDDEN)) {
      LANG_BUTTON.classList.add('button_active');
      BODY.addEventListener('click', onOutsideClick);
    } else {
      LANG_BUTTON.classList.remove('button_active');
      BODY.removeEventListener('click', onOutsideClick);
    }
  };

  LANG_MENU_ITEMS.forEach(item => {
    item.addEventListener('click', event => {
      const currentTarget = event.currentTarget;
      const radioButton = currentTarget.querySelector('.lang-menu__input');
      const lang = currentTarget.querySelector('.lang-menu__label').dataset
        .lang;

      radioButton.checked = true;
      location.replace(lang);
    });
  });

  LANG_BUTTON.addEventListener('click', onLangButtonClick);

  document.addEventListener('DOMContentLoaded', () => {
    const radioEn = document.querySelector('.radio__en');
    const radioRu = document.querySelector('.radio__ru');
    location.pathname === '/ru/'
      ? (radioRu.checked = true)
      : (radioEn.checked = true);
  });

  window.findAncestor = findAncestor;
  window.onOutsideClick = onOutsideClick;
})();
