// //функции для работы с карточками проекта Mesto

import {picTitleInput, picUrlInput, photoOverlayFormCreator, imageSelectors, myFormSelectors, openPhotoInputs } from './modal';
import { closeForm,  addCard,
} from './utils';

import { deleteServerCard,
    createServerCardPOST,buttonSaveProc,
    deleteServerLike,
    likePutInServer, renderLoading} from './api';

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
  

  
function formAddCardSubmitHandler (evt) {
  // evt.preventDefault(evt); 
  renderLoading(buttonSaveProc, true);
  createServerCardPOST(picTitleInput.value, picUrlInput.value)
  .then((result) => {return addCard(result.name, result.link, result.likes)})
    .catch(err => {console.error(`Ошибка ${err}`)})
      .finally(() => {console.log("эгегей");
      renderLoading(buttonSaveProc, false);
      });
       
        closeForm(photoOverlayFormCreator);
      };
      
      //требует переделки
      const template = document.querySelector(createCardSelectors.template); 
  function createCard(itemName, itemlink, cardsLikes, itemID, myID, ownerID) { //создает карточку
    const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
    content.querySelector(createCardSelectors.title).textContent = itemName; //itemName
    const contentLink = content.querySelector(createCardSelectors.link);
    contentLink.src = itemlink; //itemlink
    contentLink.alt = itemName; //itemName
    const deleteBtn =content.querySelector(createCardSelectors.deleteBtn);
    checkMyDelButton(myID, ownerID, deleteBtn);
    // deleteBtn.addEventListener('click', () => {content.remove(); }); //для удаления карточки
    const likeBox = content.querySelector(createCardSelectors.likeBox);
    const likeBtn = content.querySelector(myFormSelectors.likeBtn); 
    const likeCounter =  likeBox.querySelector(createCardSelectors.likeCounter);
    likeCounter.textContent = cardsLikes.length;
    content.querySelector(imageSelectors.openPhotoBtn).addEventListener('click', (evt) => { 
      openPhotoInputs(evt);
    });  


    checkMyLikes( cardsLikes,likeCounter, myID, likeBtn)
   
    likeBtn.addEventListener('click', () => {checkMyLikes( cardsLikes,likeCounter, myID, likeBtn);
      toggleServLike(itemID, cardsLikes, myID, likeCounter, likeBtn)}); 

    deleteBtn.addEventListener('click', () => {deleteMyServerCard(itemID, content)});
    
    return content;
  }; 



function checkMyLikes( cardsLikes,likeCounter, myID, likeBtn) {
  likeCounter.textContent = cardsLikes.length;
  cardsLikes.forEach((item)=>{
    if(item._id === myID){
      likeBtn.classList.toggle('content-box__like_active'); 
      }
     });
  };


function toggleServLike(itemID, cardsLikes, myID, likeCounter, likeBtn){
    if(likeBtn.classList.contains('content-box__like_active')) {
      deleteServerLike(itemID)
      .then((result) =>{
        likeBtn.classList.remove('content-box__like_active');
        likeCounter.textContent = result.likes.length;
      }).catch((err)=>{console.error(`ошибка ${err}`)});
    }else{
      likePutInServer(itemID)
      .then((result) =>{
        likeBtn.classList.add('content-box__like_active');
        likeCounter.textContent = result.likes.length;
      }).catch((err)=>{console.error(`ошибка ${err}`)});
};
  
};

function deleteMyServerCard(itemID, element){
  
      deleteServerCard(itemID)
    .then( ( ) => {
      element.remove(); //нужен ли ретурн - тесты покажут
    })
    .then(data => {console.log("ответ от запроса ДЕЛЕТЕ", data)})
    .catch((error) => {
              return  console.error(`Ошибка ${error}`);
            });
          };
          
          
function checkMyDelButton(myID, ownerID, deleteBtn){
            if(myID === ownerID){
              deleteBtn.classList.add('content-box__delete_active');
            }else{
              deleteBtn.classList.remove('content-box__delete_active');
            };
          };
                




export {formAddCardSubmitHandler, createCard, createCardSelectors, };
        