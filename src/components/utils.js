//утилитарные функции, которые используются в работе сразу нескольких других функций

import {createCardSelectors, createCard} from './card';
import {getCards, getUserInformation} from './api';


function openForm(popupElement){ //стандартная открывашка попапов
    popupElement.classList.add('popup_opened'); 
  };

function closeForm(popupElement) { //стандартная закрывашка попапов
    popupElement.classList.remove('popup_opened'); 
  };
  

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



export function checkResponse(response){ //res - response - он же resolve из отработки промиса.т.е. результат успешного выполнения
  if(response.ok){
      return response.json();
       // получили зашифрованные данные. расшифровали их с пом res.json
  };
  return Promise.reject(`Ошибка ${response.status}`); //получили сообщение об ошибке
};


// getCards() //должна: 1) забрать карточки с АПИ 2) отрисовать карточки на странице.
//     .then((response) => { //здесь уже по расшифрованным данным вывел в консоль и пробежал форчем
//         console.log('response',response);
//        return response.forEach(function(item){ //создание карточек
//             const card = addCard(item.name, item.link); //тест return addCart? 
//           });
//     })
//     .catch((error) =>{
//         console.error(error);
//     });



getUserInformation().then((Response) => {
        console.log('Response-user',Response);
        const myData = Response;
        console.log('Response-user-data',myData);
        return myData;
    })
  
    .catch((error) =>{
      console.error(error);
    });



Promise.all([getUserInformation(), getCards() ]).then(([user, cards]) => {
  console.log('USER',user);
  console.log('CARDS', cards);
// }).then((cards) => { //здесь уже по расшифрованным данным вывел в консоль и пробежал форчем
//   console.log('response',cards);
 return cards.forEach(function(item){ //создание карточек
      const card = addCard(item.name, item.link); //тест return addCart? 
    });
})
.catch((error) =>{
  console.error(error);
});



export {getCards};
export {openForm, closeForm,  addCard, removeInputsError};
   