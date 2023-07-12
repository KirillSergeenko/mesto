// //функции для работы с карточками проекта Mesto

import {picTitleInput, picUrlInput, photoOverlayFormCreator, imageSelectors, myFormSelectors } from './modal';
import { closeForm,  addCard} from './utils';

const createCardSelectors = {
    template: '#card-template',
    content: '.content-box' ,
    title: '.content-box__title',
    deleteBtn: ".content-box__delete",
    link: ".content-box__photo",
    contentBox: '.grig-content'
  };

const template = document.querySelector(createCardSelectors.template);


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

// initialCards.forEach(function(item){ //создание карточек
//   const card = addCard(item.name, item.link); //тест return addCart?
  
// });



function formAddCardSubmitHandler (evt) {
    evt.preventDefault(); 
    addCard(picTitleInput.value, picUrlInput.value);
    closeForm(photoOverlayFormCreator);
  };
  
  
// photoOverlayFormCreator.addEventListener('submit', formAddCardSubmitHandler);
  
  
function likeCard(evt){ //лайкосы
    evt.target.classList.toggle('content-box__like_active'); 
  };
  
  
  
function createCard(name, link) { //создает карточку
      const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
      content.querySelector(createCardSelectors.title).textContent = name;
  
      const contentLink = content.querySelector(createCardSelectors.link);
      contentLink.src = link;
      contentLink.alt = name;
      content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки
  
      content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard); //like
      
  
      content.querySelector(imageSelectors.openPhotoBtn).addEventListener('click', (evt) => { //opener
        openPhotoInputs(evt);
      });
      
     // console.log('content', content );
      return content;
      
    };
  
  


export {formAddCardSubmitHandler, createCard, createCardSelectors, initialCards, };