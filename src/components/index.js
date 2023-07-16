
// //здесь собираем всю логику с листенерами и тд

import '../pages/index.css';

import {validateSettings, enableValidation } from './validate';

import {picTitleInput,  confirmPopup, updatePopup, avaButton,confirmBTNClose, updateBTNClose, btnConfirm,
    picUrlInput,
     photoOverlayFormCreator, btnUpdateAva,
       popupSelfInfoForm,
       btnOpenAddPhoto,
        btnCloseAddPhotoOverlay, popupProfileOverlay, inputUrlAva, 
         buttonOpenAddSelfInfo, nameInput, jobInput, photoPopupIncrease,
          popupAddSelfInfoCloseBTN,closeIncreasePopupBtn, body, userName, userJob, reAvatar,
          formSubmitHandler,  closeToClickOverlay, closeToPressEscape} from './modal';


import {openForm, closeForm, addCard, removeInputsError} from './utils';
import {formAddCardSubmitHandler, initialCards} from './card';


import {getUserInformation } from './api';





initialCards.forEach(function(item){ //создание карточек
    const card = addCard(item.name, item.link); //тест return addCart? 
  });
  
avaButton.addEventListener('click', () => { 
  inputUrlAva.value = '';
  removeInputsError(updatePopup);
  openForm(updatePopup)} );



body.addEventListener('keydown', closeToPressEscape);

body.addEventListener('click', closeToClickOverlay);//3
// body.addEventListener('click', closeFormToClickCloseButton);


//1
buttonOpenAddSelfInfo.addEventListener('click', function() {//чтоб менять информацию профиля //импортировать батонсэлфинфо+нэйм и жобинпут и опенформ
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    removeInputsError(popupProfileOverlay);
    openForm(popupProfileOverlay);
  });
//2

btnUpdateAva.addEventListener('click', reAvatar);

popupAddSelfInfoCloseBTN.addEventListener('click', function() {// закрыть попап "о себе" при клике на кнопку "закрыть"
    closeForm(popupProfileOverlay);
  
  });

  updateBTNClose.addEventListener('click', () => {
    closeForm(updatePopup);
    
  });
 

popupSelfInfoForm.addEventListener('submit', formSubmitHandler);//4

//5
btnOpenAddPhoto.addEventListener('click', () => { //при нажатии кнопки открывает форму добавления фотки
  removeInputsError(photoOverlayFormCreator);
  openForm(photoOverlayFormCreator);
    picTitleInput.value = ''; //попытка очистки форм
    picUrlInput.value = '';
  });
  
//6
btnCloseAddPhotoOverlay.addEventListener('click', () =>{//закрывает форму добавления фоток при нажатии кнопки "закрть"
    closeForm(photoOverlayFormCreator);
  });
  
//7
closeIncreasePopupBtn.addEventListener('click', () =>{ //закрывает попап с увеличенной фоткой при нажатии кнопки "закрыть"
    closeForm(photoPopupIncrease);
    closeToPressEscape(photoPopupIncrease);
  });

photoOverlayFormCreator.addEventListener('submit', formAddCardSubmitHandler); //8
  

enableValidation(validateSettings); //n

import {getCards} from './utils';

getCards();

