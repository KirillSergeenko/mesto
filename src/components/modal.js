//работу модальных окон



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
  };

//  const body = document.querySelector('body');
 
  

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
 
  picTitleInput: "#pic-name",
  picUrlInput: "#pic-url",
  
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

const btnCloseAddPhotoOverlay = document.querySelector(imageSelectors.closeAddPhotoOverlayBTN);

const photoUrlIncreace = document.querySelector(imageSelectors.increacePhotoUrl);
const photoTitleIncreace = document.querySelector(imageSelectors.increacePhotoTitle);
const photoPopupIncrease = document.querySelector(imageSelectors.increasePhotoPopup);
const closeIncreasePopupBtn = document.querySelector(imageSelectors.closeIncreasePopupBtn);
const addPicturesForm = document.querySelector(imageSelectors.addPicturesForm);
const picTitleInput = document.querySelector(imageSelectors.picTitleInput); //
const picUrlInput = document.querySelector(imageSelectors.picUrlInput); //


// function openForm(popupElement){ //стандартная открывашка попапов
//     popupElement.classList.add('popup_opened'); 
//   }
  
//   function closeForm(popupElement) { //стандартная закрывашка попапов
//     popupElement.classList.remove('popup_opened'); 
//   };
  
  
  
  // buttonOpenAddSelfInfo.addEventListener('click', function() {//чтоб менять информацию профиля
  //   nameInput.value = userName.textContent;
  //   jobInput.value = userJob.textContent;
  //   openForm(popupProfileOverlay);
  // });
  
  
  //  popupAddSelfInfoCloseBTN.addEventListener('click', function() {// закрыть попап "о себе" при клике на кнопку "закрыть"
  //   closeForm(popupProfileOverlay);
  // });
  
  
  
  // body.addEventListener('keydown', closeToPressEscape);
  
  
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
    // body.addEventListener('click', closeToClickOverlay);
  
  
  function formSubmitHandler (evt) { //при сабмите обновить селфинфуу
      evt.preventDefault(); 
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
    closeForm(popupProfileOverlay);
  };
  
  // popupSelfInfoForm.addEventListener('submit', formSubmitHandler);
  
  
  
  function openPhotoInputs(evt){ //открывает фотки при клике на фотку
  
    openForm(photoPopupIncrease);
    photoUrlIncreace.src = evt.target.src;
    photoUrlIncreace.alt = evt.target.alt;
    photoTitleIncreace.textContent = evt.target.alt;
    };
  
  
  
  // btnOpenAddPhoto.addEventListener('click', () => { //при нажатии кнопки открывает форму добавления фотки
  //   openForm(photoOverlayFormCreator);
  //   picTitleInput.value = ''; //попытка очистки форм
  //   picUrlInput.value = '';
  // });
  
  // btnCloseAddPhotoOverlay.addEventListener('click', () =>{//закрывает форму добавления фоток при нажатии кнопки "закрть"
  //   closeForm(photoOverlayFormCreator);
  // });
  
  
  
  // closeIncreasePopupBtn.addEventListener('click', () =>{ //закрывает попап с увеличенной фоткой при нажатии кнопки "закрыть"
  //   closeForm(photoPopupIncrease);
  // });
  

  export {picTitleInput,
     picUrlInput,
      photoOverlayFormCreator,
       imageSelectors,
        btnOpenAddPhoto,
         btnCloseAddPhotoOverlay,
          buttonOpenAddSelfInfo,
           popupAddSelfInfoCloseBTN,closeIncreasePopupBtn, 
           formSubmitHandler, openPhotoInputs, closeToClickOverlay, closeToPressEscape
          } ;

