
// //здесь собираем всю логику с листенерами и тд

import '../pages/index.css';

// import '../scripts/script.js';

const body = document.querySelector('body');
import {validateSettings, enableValidation } from '../components/validate.js';

import {picTitleInput,
    picUrlInput,
     photoOverlayFormCreator,
       popupSelfInfoForm,
       btnOpenAddPhoto,
        btnCloseAddPhotoOverlay, popupProfileOverlay,
         buttonOpenAddSelfInfo, nameInput, jobInput, photoPopupIncrease,
          popupAddSelfInfoCloseBTN,closeIncreasePopupBtn, 
          formSubmitHandler,  closeToClickOverlay, closeToPressEscape} from './modal.js';


import {openForm, closeForm } from './utils.js';
import {formAddCardSubmitHandler} from './card.js';



//функция добавления карт
//функция валидации
//листенеры


body.addEventListener('keydown', closeToPressEscape);//0
//1
buttonOpenAddSelfInfo.addEventListener('click', function() {//чтоб менять информацию профиля //импортировать батонсэлфинфо+нэйм и жобинпут и опенформ
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    openForm(popupProfileOverlay);
  });
//2
popupAddSelfInfoCloseBTN.addEventListener('click', function() {// закрыть попап "о себе" при клике на кнопку "закрыть"
    closeForm(popupProfileOverlay);
  });


body.addEventListener('click', closeToClickOverlay);//3

popupSelfInfoForm.addEventListener('submit', formSubmitHandler);//4

//5
btnOpenAddPhoto.addEventListener('click', () => { //при нажатии кнопки открывает форму добавления фотки
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
  });

photoOverlayFormCreator.addEventListener('submit', formAddCardSubmitHandler); //8
  

enableValidation(validateSettings); //n

