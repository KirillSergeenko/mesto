const myFormSelectors = {
  buttonAddSelfInfo: '.profile__button-addselfinfo',
  popupButtonClose: '.popup-container__button-close',
  overlay: '.popup[id="position"]', //'.popup-position[id="position"]'
  popupSelfInfoForm: '.form[id="myform"]',
  userName: '.profile__name',
  userJob: '.profile__text',
  nameInput: '#name',
  jobInput: '#about',
  photoCardGalery: '.grig-content',
  likeBtn: ".content-box__like",
  }

  

  const openAddSelfInfoButton = document.querySelector(myFormSelectors.buttonAddSelfInfo);     
  const popupAddSelfInfoCloseBTN = document.querySelector(myFormSelectors.popupButtonClose);                                                                                   
  const popupOverlay = document.querySelector(myFormSelectors.overlay);                                                                                
  const popupSelfInfoForm = document.querySelector(myFormSelectors['popupSelfInfoForm']);                                                                        
  const userName = document.querySelector(myFormSelectors.userName);                    
  const userJob = document.querySelector(myFormSelectors.userJob);                      
  const nameInput = document.querySelector(myFormSelectors.nameInput);                  
  const jobInput = document.querySelector(myFormSelectors.jobInput);                    
  const likeBtn = document.querySelector(myFormSelectors.likeBtn);
 
  
  const imageSelectors = {
    addPhotoBtn: ".profile__button-addphoto", 
    addPhotoOverlay: "#popupPhotoFormPosition",
    pictureTitle: ".content-box__title",
    picTitleInput: "#pic-name",
    picUrlInput: "#pic-url",
    pictureUrl: ".content-box__photo",
    closeAddPhotoOverlayBTN: '#add-photo-popup-close',

    openPhotoBtn: '.content-box__photo',//new
    increacePhotoUrl: '.increase__image',//new
    increacePhotoTitle:'.increase__image-title',//new
    increasePhotoPopup: '#increasePhotoOverlay',//new
    closeIncreasePopupBtn: '#increase-popup-close'//new
  };

  const photoOverlayFormCreator = document.querySelector(imageSelectors.addPhotoOverlay);
  const openAddPhotoBtn = document.querySelector(imageSelectors.addPhotoBtn);
  const pictureTitle= document.querySelector(imageSelectors.pictureTitle);
  const pictureUrl = document.querySelector(imageSelectors.pictureUrl);
  // const picTitleInput = document.querySelector(imageSelectors.picTitleInput);
  // const picUrlInput = document.querySelector(imageSelectors.picUrlInput);
  const closeAddPhotoOverlayBTN = document.querySelector(imageSelectors.closeAddPhotoOverlayBTN);

  const openPhotoBtn = document.querySelector(imageSelectors.openPhotoBtn);//new
  const increacePhotoUrl = document.querySelector(imageSelectors.increacePhotoUrl);
  const increacePhotoTitle = document.querySelector(imageSelectors.increacePhotoTitle);
  const increasePhotoPopup = document.querySelector(imageSelectors.increasePhotoPopup);
  const closeIncreasePopupBtn = document.querySelector(imageSelectors.closeIncreasePopupBtn);

 


  const createCardSelectors = {
    template: '#card-template',
    content: '.content-box' ,
    title: '.content-box__title',
    deleteBtn: ".content-box__delete",
    link: ".content-box__photo",
    contentBox: '.grig-content'
  }

  
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
  





function stockPopupInputs(element) { //тест
    if(element.classList.contains('popup_opened')){
           nameInput.value = userName.textContent;
           jobInput.value = userJob.textContent;
    };
  };


function openForm(popupElement){ 
  popupElement.classList.add('popup_opened'); 
}



function closeForm(popupElement) { 
  popupElement.classList.remove('popup_opened'); 
}


openAddSelfInfoButton.addEventListener('click', function() {
  openForm(popupOverlay);
  stockPopupInputs(popupOverlay);
});

 popupAddSelfInfoCloseBTN.addEventListener('click', function() {
  closeForm(popupOverlay);
  
});

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
  closeForm(popupOverlay);
};

popupSelfInfoForm.addEventListener('submit', formSubmitHandler);



function openPhotoInputs(evt){ //new
  const increacePhotoUrl = document.querySelector(imageSelectors.increacePhotoUrl);
  const pictureTitle= document.querySelector(imageSelectors.pictureTitle);
  increacePhotoUrl.src = evt.target.src;
increacePhotoUrl.alt = evt.target.alt;
increacePhotoTitle.textContent = evt.target.alt;
  };


//popupNewImage open задача 3




openAddPhotoBtn.addEventListener('click', () => {
openForm(photoOverlayFormCreator);
});

closeAddPhotoOverlayBTN.addEventListener('click', () =>{
  closeForm(photoOverlayFormCreator);
});

closeIncreasePopupBtn.addEventListener('click', () =>{
  closeForm(increasePhotoPopup);
});

function formAddCardSubmitHandler (evt) {
  evt.preventDefault(); 

 const picTitleInput = document.querySelector(imageSelectors.picTitleInput);
 const picUrlInput = document.querySelector(imageSelectors.picUrlInput);

console.log(imageSelectors.picTitleInput,imageSelectors.picUrlInput);
  createCard(picTitleInput.value, picUrlInput.value);

  closeForm(photoOverlayFormCreator);

};

photoOverlayFormCreator.addEventListener('submit', formAddCardSubmitHandler);


function likeCard(evt){
  evt.target.classList.toggle('content-box__like_active');
  
};



  function createCard(name, link) { //создание карточки
    const template = document.querySelector(createCardSelectors.template)//вирт объект
    const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
    

    content.querySelector(createCardSelectors.title).textContent = name;
    
    content.querySelector(createCardSelectors.link).src = link;

    content.querySelector(createCardSelectors.link).alt = name;

    content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки

    content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard); //like

    content.querySelector(imageSelectors.openPhotoBtn).addEventListener('click', (evt) => { //increase photo
      openForm(increasePhotoPopup);
      openPhotoInputs(evt);
    });
   
    const contentBox = document.querySelector(createCardSelectors.contentBox);

    contentBox.prepend(content);

    return createCard;
  };


  initialCards.forEach(function(item){ //создание карточек
    const card = createCard(item.name, item.link);
  });
  

