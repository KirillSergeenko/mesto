// //функции для работы с карточками проекта Mesto

import {picTitleInput, picUrlInput, photoOverlayFormCreator, imageSelectors, myFormSelectors, openPhotoInputs } from './modal';
import { closeForm,  addCard, checkResponse
} from './utils';

import { deleteServerCard,
    createServerCardPOST,
    deleteServerLike,
    likePutInServer} from './api';

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
  // evt.preventDefault(); 
  createServerCardPOST(picTitleInput.value, picUrlInput.value)
  .then((result) => {
        addCard(result.name, result.link, );
          //result.likes.length,result._id, user._id, result.owner._id);
        })
        .catch(err => {
          console.error(`Ошибка ${err}`)
        })
        .then(result => {
          console.log(`Отправка карточек на сервер ${result}`);
        })
        // addCard(picTitleInput.value, picUrlInput.value); //itemName, itemlink
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
    likePutInServer(itemID)
    .then((result) =>{
      likeBtn.classList.add('content-box__like_active');
      likeCounter.textContent = result.likes.length;
    }).catch((err)=>{console.error(`ошибка ${err}`)});
  }else{
    deleteServerLike(itemID)
    .then((result) =>{
      likeBtn.classList.remove('content-box__like_active');
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
          
          
          
          
          
          
export {formAddCardSubmitHandler, createCard, createCardSelectors, //initialCards, 
        };
        
        
        
        //отжившие свое, резервные
        
        // const initialCards = [
          //     {
            //       name: 'Архыз',
            //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
            //     },
    //     {
      //       name: 'Челябинская область',
      //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
      //     },
      //     {
        //       name: 'Иваново',
        //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        //     },
        //     {
          //       name: 'Камчатка',
          //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
          //     },
          //     {
            //       name: 'Холмогорский район',
            //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
            //     },
            //     {
              //       name: 'Байкал',
              //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
              //     }
              //   ]; 
              
              
              //       content.querySelector(createCardSelectors.title).textContent = name;
              
              
              
              // function createCard(name, link) { //создает карточку как было
              //       const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
              
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
                
                
                
                // function likeMyBrowserCard(evt){ //лайкосы
                //   evt.target.classList.toggle('content-box__like_active'); 
                // };
                
                
                // function createServerCardPOST(itemName, itemlink){
                  //       return fetch('https://nomoreparties.co/v1/plus-cohort-26/cards',{
                    //           method: "POST",
                    //           headers: {
                      //               "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
                      //               "Content-Type": "application/json; charset=UTF-8"
                      //           },
                      //           body:JSON.stringify({
                        //               name: itemName,//.name,  
                        //               link: itemlink,//.link  
                        //           }), 
                        //       }).then(checkResponse);
                        //   };
                        
                        
                        //  if(myID === ownerID){
                  //    deleteBtn.classList.add('content-box__delete_active');
                  //  }else{
                    //    deleteBtn.classList.remove('content-box__delete_active');
                    //  };
                    
                    // function deleteServerCard(itemID){
                      //   return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/${itemID}`, {
                        //     method: "DELETE",
                        //         headers: {
                          //             "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
                          //             "Content-Type": "application/json; charset=UTF-8"
                          //           },
                          //         })
                          //         .then(checkResponse);
                          //       };
                          