const myFormSelectors = {
  buttonAddSelfInfo: '.profile__button-addselfinfo',
  popupButtonClose: '.popup-container__button-close',
  overlay: '.popup[id="position"]', //'.popup-position[id="position"]'
  popupSelfInfoForm: '.form[id="myform"]', //дубль const myNameForm
  userName: '.profile__name',
  userJob: '.profile__text',
  nameInput: '#name',
  jobInput: '#about',
  photoCardGalery: '.grig-content',
  likeBtn: ".content-box__like",
  }

 const body = document.querySelector('body');
 
  

  const buttonOpenAddSelfInfo = document.querySelector(myFormSelectors.buttonAddSelfInfo);     
  const popupAddSelfInfoCloseBTN = document.querySelector(myFormSelectors.popupButtonClose);                                                                                   
  const popupProfileOverlay = document.querySelector(myFormSelectors.overlay);                                                                                
  const popupSelfInfoForm = document.querySelector(myFormSelectors['popupSelfInfoForm']);     //дубль      const      myNameForm                                                       
  const userName = document.querySelector(myFormSelectors.userName);                    
  const userJob = document.querySelector(myFormSelectors.userJob);                      
  const nameInput = document.querySelector(myFormSelectors.nameInput);                  //дубль
  const jobInput = document.querySelector(myFormSelectors.jobInput);                    //дубль aboutSelfInput
  const likeBtn = document.querySelector(myFormSelectors.likeBtn);

  

 // form class="form" id = "pic-form" name="pic-form" method="post" novalidate>     

  const imageSelectors = {
    addPhotoBtn: ".profile__button-addphoto", 
    addPhotoOverlay: "#popupPhotoFormPosition",
    pictureTitle: ".content-box__title",
    picTitleInput: "#pic-name",
    picUrlInput: "#pic-url",
    pictureUrl: ".content-box__photo",
    closeAddPhotoOverlayBTN: '#add-photo-popup-close',
    addPicturesForm: '.form[id="pic-form"]',

    openPhotoBtn: '.content-box__photo',//new
    increacePhotoUrl: '.increase__image',//new
    increacePhotoTitle:'.increase__image-title',//new
    increasePhotoPopup: '#increasePhotoOverlay',//new
    closeIncreasePopupBtn: '#increase-popup-close'//new
  };

  const photoOverlayFormCreator = document.querySelector(imageSelectors.addPhotoOverlay);
  const btnOpenAddPhoto = document.querySelector(imageSelectors.addPhotoBtn);
  const pictureTitle= document.querySelector(imageSelectors.pictureTitle);
  const pictureUrl = document.querySelector(imageSelectors.pictureUrl);
  const btnCloseAddPhotoOverlay = document.querySelector(imageSelectors.closeAddPhotoOverlayBTN);

  // const btnOpenPhoto = document.querySelector(imageSelectors.openPhotoBtn);//new
  const photoUrlIncreace = document.querySelector(imageSelectors.increacePhotoUrl);
  const photoTitleIncreace = document.querySelector(imageSelectors.increacePhotoTitle);
  const photoPopupIncrease = document.querySelector(imageSelectors.increasePhotoPopup);
  const closeIncreasePopupBtn = document.querySelector(imageSelectors.closeIncreasePopupBtn);

  const addPicturesForm = document.querySelector(imageSelectors.addPicturesForm);
  const picTitleInput = document.querySelector(imageSelectors.picTitleInput); //
  const picUrlInput = document.querySelector(imageSelectors.picUrlInput); //


  const createCardSelectors = {
    template: '#card-template',
    content: '.content-box' ,
    title: '.content-box__title',
    deleteBtn: ".content-box__delete",
    link: ".content-box__photo",
    contentBox: '.grig-content'
  }

  const template = document.querySelector(createCardSelectors.template);
  
  const photoUrl = document.querySelector(createCardSelectors.link);


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
//hw run 5
initialCards.forEach(function(item){ //создание карточек
  const card = addCard(item.name, item.link); //тест return addCart?
  //const card = createCard(item.name, item.link); // исходник
});







function openForm(popupElement){ //стандартная открывашка попапов
  popupElement.classList.add('popup_opened'); 
}

function closeForm(popupElement) { //стандартная закрывашка попапов
  popupElement.classList.remove('popup_opened'); 
};



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



function formAddCardSubmitHandler (evt) {
  evt.preventDefault(); 
  addCard(picTitleInput.value, picUrlInput.value);
  closeForm(photoOverlayFormCreator);
};


photoOverlayFormCreator.addEventListener('submit', formAddCardSubmitHandler);


function likeCard(evt){ //лайкосы
  evt.target.classList.toggle('content-box__like_active'); 
};



  //тест 

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
    
    console.log('content', content );
    return content;
    
  };



 
  function addCard(name, link){ //вставляет карточку перед всеми

    const contentBox = document.querySelector(createCardSelectors.contentBox);
    console.log('contentBox', contentBox);
    contentBox.prepend(createCard(name, link));
    
  };
  //6 события клавиатуры


 


  // 6 валидационный функционал



function showInputError(formElement, inputElement, errorMessage) { //input === inputElement из тренажера
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log('errorElement', errorElement);
  inputElement.classList.add('form__input_type_error'); //красное подчеркивание у ИНПУТА
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active'); // показ спана с настроенным form__input-error
};

function hideInputError(formElement, inputElement) { //прячет сообщение об ошибке
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error'); //изменим поле ошибочного элемента на красный у ИНПУТА
  errorElement.classList.remove('form__input-error_active');// показ спана с настроенным form__input-error
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement){ 
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else{
    hideInputError(formElement, inputElement,);//второй параметр покажет текст стандартной ошибки, если она есть
  };
};

function setEventListeners(formElement){
  const inputsList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button-save-selfinfo');
  toggleButtonState(inputsList, buttonElement);
  inputsList.forEach( (inputElement)=>{
    inputElement.addEventListener('input', function(){
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputsList, buttonElement);
    });

  });
};


function enableValidation(){
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) =>{
    formElement.addEventListener('submit', function (evt){
      evt.preventDefault();
    } );
    // const fieldsetList = Array.from(formElement.querySelectorAll('.popup-container')); //у меня 1 филдсет. будет много - допишем
    // fieldsetList.forEach((fieldset)=>{
    //   setEventListeners(fieldset);
    // }); 

    setEventListeners(formElement);
  });
};
enableValidation();


function hasInvalidInput(inputsList){//проверим, есть ли хоть 1 невалидное поле вернет тру. если хоть одно с ошибкой
  return inputsList.some((inputElement)=>{
   return !inputElement.validity.valid;
  } );
};

function toggleButtonState(inputList, buttonElement){ //разблокируем кнопку
  if (hasInvalidInput(inputList)){
    buttonElement.disabled = true;
    buttonElement.classList.add('.form__button-save-selfinfo_disable');
    
   
  }else{
   

    buttonElement.disabled = false;
    buttonElement.classList.remove('.form__button-save-selfinfo_disable');

  };
};

