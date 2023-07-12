
// //здесь собираем всю логику с листенерами и тд

import '../pages/index.css';





import {validateSettings, enableValidation } from './validate';

import {picTitleInput,
    picUrlInput,
     photoOverlayFormCreator,
       popupSelfInfoForm,
       btnOpenAddPhoto,
        btnCloseAddPhotoOverlay, popupProfileOverlay,
         buttonOpenAddSelfInfo, nameInput, jobInput, photoPopupIncrease,
          popupAddSelfInfoCloseBTN,closeIncreasePopupBtn, body, userName,userJob,
          formSubmitHandler,  closeToClickOverlay, closeToPressEscape} from './modal';


import {openForm, closeForm, addCard} from './utils';
import {formAddCardSubmitHandler, initialCards} from './card';



//функция добавления карт
//функция валидации
//листенеры

initialCards.forEach(function(item){ //создание карточек
    const card = addCard(item.name, item.link); //тест return addCart?
    
  });
  



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

