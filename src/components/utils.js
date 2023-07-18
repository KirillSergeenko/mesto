//утилитарные функции, которые используются в работе сразу нескольких других функций

import {createCardSelectors, createCard} from './card';
import {getCards, getUserInformation} from './api';
import {userName, userJob, profileAvatar} from './modal';


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


 

function addCard(itemName, itemlink, cardsLikesLength, itemID, myID, ownerID){ //вставляет карточку перед всеми
    const contentBox = document.querySelector(createCardSelectors.contentBox);
    contentBox.prepend(createCard(itemName, itemlink, cardsLikesLength, itemID, myID, ownerID)); 
  };



export function checkResponse(response){ //res - response - он же resolve из отработки промиса.т.е. результат успешного выполнения
  if(response.ok){
      return response.json();
       // получили зашифрованные данные. расшифровали их с пом res.json
  };
  return Promise.reject(`Ошибка ${response.status}`); //получили сообщение об ошибке
};




function getProfileInformation(name,about, avatar){
  userName.textContent = name;
  userJob.textContent = about;
  profileAvatar.src = avatar;
};


Promise.all([getUserInformation(), getCards() ]).then(([user, cards]) => {
  console.log('USER',user);
  console.log('CARDS', cards);
  cards.forEach(function(item){  return addCard(item.name, item.link, item.likes.length, item._id, user._id, item.owner._id );
      });
      getProfileInformation(user.name, user.about, user.avatar);
  //отрисовка профиля;
})
// .then(data =>{console.log("явки пароли", data)})
.catch((error) =>{
    console.error(error);
});





export {getCards};
export {openForm, closeForm,  addCard, removeInputsError};
   

