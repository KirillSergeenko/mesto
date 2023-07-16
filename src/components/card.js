// //функции для работы с карточками проекта Mesto

import {picTitleInput, picUrlInput, photoOverlayFormCreator, imageSelectors, myFormSelectors, openPhotoInputs } from './modal';
import { closeForm,  addCard} from './utils';

const createCardSelectors = {
    template: '#card-template',
    content: '.content-box' ,
    title: '.content-box__title',
    deleteBtn: ".content-box__delete",
    link: ".content-box__photo",
    contentBox: '.grig-content',
    likeBox: '.content-box__likebox',
    likeCounter: '.content-box__like-counter'

  };



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




function formAddCardSubmitHandler (evt) {
    evt.preventDefault(); 
    addCard(picTitleInput.value, picUrlInput.value);
    closeForm(photoOverlayFormCreator);
  };
  

  
  
function likeCard(evt){ //лайкосы
    evt.target.classList.toggle('content-box__like_active'); 
  };


  
const template = document.querySelector(createCardSelectors.template);
  
function createCard(name, link) { //создает карточку
      const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
      content.querySelector(createCardSelectors.title).textContent = name;
      const contentLink = content.querySelector(createCardSelectors.link);
      contentLink.src = link;
      contentLink.alt = name;
      content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки
      const likeBox = content.querySelector(createCardSelectors.likeBox);
      content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard);
      const likeCounter =  likeBox.querySelector(createCardSelectors.likeCounter);
      content.querySelector(imageSelectors.openPhotoBtn).addEventListener('click', (evt) => { 
        openPhotoInputs(evt);
      }); 
      return content;
      
    };
  
// function createCard(name, link) { //создает карточку как было
//       const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
//       content.querySelector(createCardSelectors.title).textContent = name;
  
//       const contentLink = content.querySelector(createCardSelectors.link);
//       contentLink.src = link;
//       contentLink.alt = name;
//       content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки

//       const likeBox = content.querySelector(createCardSelectors.likeBox);
//       // console.log('likeBox', likeBox);
//       content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard);
//       // console.log('like', content.querySelector(myFormSelectors.likeBtn));


//       const likeCounter =  likeBox.querySelector(createCardSelectors.likeCounter);
//       // console.log('likeCounter', likeCounter);

//       // content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard); //like было
      
//       content.querySelector(imageSelectors.openPhotoBtn).addEventListener('click', (evt) => { 
//         openPhotoInputs(evt);
//       });
      
//      // console.log('content', content );
//       return content;
      
//     };
  


  
  


export {formAddCardSubmitHandler, createCard, createCardSelectors, initialCards, 
};