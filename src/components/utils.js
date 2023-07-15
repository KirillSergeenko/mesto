//утилитарные функции, которые используются в работе сразу нескольких других функций

import {createCardSelectors, createCard} from './card';
import {body} from './modal';



function openForm(popupElement){ //стандартная открывашка попапов
    popupElement.classList.add('popup_opened'); 
  };
  

function closeForm(popupElement) { //стандартная закрывашка попапов
    popupElement.classList.remove('popup_opened'); 
  };
  
  // function closeFormToClickCloseButton (evt){
  // console.log('evt target', evt.target);
  //     if(evt.target.classList.contains('popup-container__button-close') ){
  //     document.querySelector('.popup_opened').classList.remove('popup_opened');
  //     };
  //     
  //   };

  function removeInputsError(PopupElement){ //кидаю на вход попап, а эту функцию кидаю в обработчики кликов по оверлею, эскейп, чтоб при закрытии формы все сбрасывалось
    const inputsListError = Array.from(PopupElement.querySelectorAll('.form__input')); //в данной форме ищу поля инпутов
    inputsListError.forEach((item) =>{
        item.classList.remove('form__input_type_error') // снимаю с инпутов подчеркивания, принудительно.
    });
    const spanListError =  Array.from(PopupElement.querySelectorAll('.form__input-error')); //ищу спаны по форме, 
    spanListError.forEach((item) => {
      item.textContent = ''; //убираю сообщение об ошибке
      item.classList.remove('form__input-error_active')//убираю показ самого спана
    });
  };


  

function addCard(name, link){ //вставляет карточку перед всеми
    const contentBox = document.querySelector(createCardSelectors.contentBox);
    contentBox.prepend(createCard(name, link));
    
  };

  export {openForm, closeForm,  addCard, removeInputsError};
   