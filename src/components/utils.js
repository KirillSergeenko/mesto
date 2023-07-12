//утилитарные функции, которые используются в работе сразу нескольких других функций

import {createCardSelectors, createCard} from './card';

function openForm(popupElement){ //стандартная открывашка попапов
    popupElement.classList.add('popup_opened'); 
  };
  

function closeForm(popupElement) { //стандартная закрывашка попапов
    popupElement.classList.remove('popup_opened'); 
  };
  

  

function addCard(name, link){ //вставляет карточку перед всеми
    const contentBox = document.querySelector(createCardSelectors.contentBox);
    contentBox.prepend(createCard(name, link));
    
  };

  export {openForm, closeForm,  addCard};