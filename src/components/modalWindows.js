//работу модальных окон



// function openForm(popupElement){ //стандартная открывашка попапов
//     popupElement.classList.add('popup_opened'); 
//   }
  
//   function closeForm(popupElement) { //стандартная закрывашка попапов
//     popupElement.classList.remove('popup_opened'); 
//   };
  
  
  
  buttonOpenAddSelfInfo.addEventListener('click', function() {//чтоб менять информацию профиля
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    openForm(popupProfileOverlay);
  });
  
  
   popupAddSelfInfoCloseBTN.addEventListener('click', function() {// закрыть попап "о себе" при клике на кнопку "закрыть"
    closeForm(popupProfileOverlay);
  });
  
  
  
  body.addEventListener('keydown', closeToPressEscape);
  
  
  function closeToPressEscape (evt) { //закрывашка любой открытый попап по нажатию эскейп
      if(evt.key == 'Escape'){
        document.querySelector('.popup_opened').classList.remove('popup_opened');
        };
      body.remove.addEventListener;
  };
  
    function closeToClickOverlay (evt) { //закрывашка любой открытый попап кликом в оверлей
      console.log('evt target', evt.target);
      if(evt.target.classList.contains('popup')){
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      };
      body.remove.addEventListener;
    };
    body.addEventListener('click', closeToClickOverlay);
  
  
  function formSubmitHandler (evt) { //при сабмите обновить селфинфуу
      evt.preventDefault(); 
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
    closeForm(popupProfileOverlay);
  };
  
  popupSelfInfoForm.addEventListener('submit', formSubmitHandler);
  
  
  
  function openPhotoInputs(evt){ //открывает фотки при клике на фотку
  
    openForm(photoPopupIncrease);
    photoUrlIncreace.src = evt.target.src;
    photoUrlIncreace.alt = evt.target.alt;
    photoTitleIncreace.textContent = evt.target.alt;
    };
  
  
  
  btnOpenAddPhoto.addEventListener('click', () => { //при нажатии кнопки открывает форму добавления фотки
    openForm(photoOverlayFormCreator);
    picTitleInput.value = ''; //попытка очистки форм
    picUrlInput.value = '';
  });
  
  btnCloseAddPhotoOverlay.addEventListener('click', () =>{//закрывает форму добавления фоток при нажатии кнопки "закрть"
    closeForm(photoOverlayFormCreator);
  });
  
  
  
  closeIncreasePopupBtn.addEventListener('click', () =>{ //закрывает попап с увеличенной фоткой при нажатии кнопки "закрыть"
    closeForm(photoPopupIncrease);
  });
  