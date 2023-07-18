//работу модальных окон

import {closeForm, openForm, } from './utils';
import {profileServerUpdatePATCH, profileAvatarUpdatePATCH} from './api';

const myFormSelectors = {
  buttonAddSelfInfo: '.profile__button-addselfinfo',
  popupButtonClose: '.popup-container__button-close',
  overlay: '.popup[id="position"]', 
  popupSelfInfoForm: '.form[id="myform"]',
  userName: '.profile__name',
  userJob: '.profile__text',
  nameInput: '#name',
  jobInput: '#about',
  photoCardGalery: '.grig-content',
  likeBtn: ".content-box__like",
  confirm: '#popupReAvatarConfirm',
  confirmBTNClose: '#confirm-button-close',
  update: '.popup[id="popupAvatarUpdate"]',
  updateBTNClose: '#update-button-close',
  ava: '.profile__avatar',
  // btnConfirm: '#confirm-BTN' нужна для формы удалени карточек, не обяательна
  btnUpdateAva: '#update-BTN'
  };

console.log('myFormSelectors', myFormSelectors );

const body = document.querySelector('body');
 
  

const buttonOpenAddSelfInfo = document.querySelector(myFormSelectors.buttonAddSelfInfo);     
const popupAddSelfInfoCloseBTN = document.querySelector(myFormSelectors.popupButtonClose);                                                                                   
const popupProfileOverlay = document.querySelector(myFormSelectors.overlay);                                                                                
const popupSelfInfoForm = document.querySelector(myFormSelectors['popupSelfInfoForm']);                                                 
 const userName = document.querySelector(myFormSelectors.userName);                    
 const userJob = document.querySelector(myFormSelectors.userJob);        
const nameInput = document.querySelector(myFormSelectors.nameInput);           
const jobInput = document.querySelector(myFormSelectors.jobInput);                    
const updatePopup = document.querySelector(myFormSelectors.update);
const avaButton = document.querySelector(myFormSelectors.ava);
const updateBTNClose = document.querySelector(myFormSelectors.updateBTNClose);
const btnUpdateAva = document.querySelector(myFormSelectors.btnUpdateAva);
// const confirmBTNClose = document.querySelector(myFormSelectors.confirmBTNClose); //нужна для удаления карточек
// const confirmPopup = document.querySelector(myFormSelectors.confirm); //для удаления карточек, необязательно
// const btnConfirm = document.querySelector(myFormSelectors.btnConfirm); //нужна для удаления карточек
// console.log('confirmBTN111', btnConfirm );

const imageSelectors = {
  addPhotoBtn: ".profile__button-addphoto", 
  addPhotoOverlay: "#popupPhotoFormPosition",
  picTitleInput: "#pic-name",
  picUrlInput: "#pic-url",
  closeAddPhotoOverlayBTN: '#add-photo-popup-close',
  addPicturesForm: '.form[id="pic-form"]',
  openPhotoBtn: '.content-box__photo',
  increacePhotoUrl: '.increase__image',
  increacePhotoTitle:'.increase__image-title',
  increasePhotoPopup: '#increasePhotoOverlay',
  closeIncreasePopupBtn: '#increase-popup-close',
  profileAva: ".profile__avatar_photo",
  inputUrlAva: "#pic-ava-url"
};

export const profileAvatar = document.querySelector(imageSelectors.profileAva);
const photoOverlayFormCreator = document.querySelector(imageSelectors.addPhotoOverlay);
const btnOpenAddPhoto = document.querySelector(imageSelectors.addPhotoBtn);
const btnCloseAddPhotoOverlay = document.querySelector(imageSelectors.closeAddPhotoOverlayBTN);
const photoUrlIncreace = document.querySelector(imageSelectors.increacePhotoUrl);
const photoTitleIncreace = document.querySelector(imageSelectors.increacePhotoTitle);
const photoPopupIncrease = document.querySelector(imageSelectors.increasePhotoPopup);
const closeIncreasePopupBtn = document.querySelector(imageSelectors.closeIncreasePopupBtn);
const addPicturesForm = document.querySelector(imageSelectors.addPicturesForm);
const picTitleInput = document.querySelector(imageSelectors.picTitleInput); //
const picUrlInput = document.querySelector(imageSelectors.picUrlInput); //
const inputUrlAva = document.querySelector(imageSelectors.inputUrlAva);

  
function closeToPressEscape (evt) { //закрывашка любой открытый попап по нажатию эскейп
      if(evt.key == 'Escape'){
        document.querySelector('.popup_opened').classList.remove('popup_opened');
        
        };
  };
  
function closeToClickOverlay (evt) { //закрывашка любой открытый попап кликом в оверлей
      // console.log('evt target', evt.target);
      if(evt.target.classList.contains('popup')){
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      
      };
    };
    
  
  
function formSubmitHandler (evt) { //при сабмите обновить селфинфуу
      evt.preventDefault(); 
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
      profileServerUpdatePATCH(nameInput, jobInput, inputUrlAva).then((data) => {console.log('Ответ по обновлению инфы о себе', data)});
    closeForm(popupProfileOverlay);
  };


function reAvatar(evt){
    evt.preventDefault(); 
    profileAvatar.src = inputUrlAva.value;
    profileAvatarUpdatePATCH(inputUrlAva).then((data) => {console.log('Ответ по загрузке авы', data)});
    closeForm(updatePopup);
  };



function openPhotoInputs(evt){ //открывает фотки при клике на фотку
    openForm(photoPopupIncrease);
    photoUrlIncreace.src = evt.target.src;
    photoUrlIncreace.alt = evt.target.alt;
    photoTitleIncreace.textContent = evt.target.alt;
    };







  export {picTitleInput, picUrlInput,  updatePopup, avaButton, updateBTNClose, reAvatar, inputUrlAva,
      photoOverlayFormCreator,
       imageSelectors, popupSelfInfoForm,
        btnOpenAddPhoto, myFormSelectors,
         btnCloseAddPhotoOverlay, popupProfileOverlay,
          buttonOpenAddSelfInfo, nameInput, jobInput, body, userName, userJob,
           popupAddSelfInfoCloseBTN, closeIncreasePopupBtn, photoPopupIncrease, btnUpdateAva,
           formSubmitHandler, openPhotoInputs, closeToClickOverlay, closeToPressEscape, 
          } ;

