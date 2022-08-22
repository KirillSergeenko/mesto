const myFormSelectors = {
  buttonAddSelfInfo: '.profile__button-addselfinfo',
  popupButtonClose: '.popup-container__button-close',
  overlay: '.popup-position[id="position"]',
  popupForm: '.form[id="myform"]',
  userName: '.profile__name',
  userJob: '.profile__text',
  nameInput: '#name',
  jobInput: '#about',
  photoCardGalery: '.grig-content',
  likeBtn: ".content-box__like",
  }

  

  const openFormButton = document.querySelector(myFormSelectors.buttonAddSelfInfo);     //  const openFormButton = document.querySelector('.profile__button-addselfinfo');
  const closeFormButton = document.querySelector(myFormSelectors.popupButtonClose);     //  const closeFormButton = document.querySelector('.popup-container__button-close');                                                                               
  const popupOverlay = document.querySelector(myFormSelectors.overlay);                 //  const popupOverlay = document.getElementById('position');                                                                                        
  const popupForm = document.querySelector(myFormSelectors['popupForm']);               //  const popupForm = document.getElementById('myform');                                                                                       
  const userName = document.querySelector(myFormSelectors.userName);                    //  const userName = document.querySelector('.profile__name');
  const userJob = document.querySelector(myFormSelectors.userJob);                      //  const userJob = document.querySelector('.profile__text');
  const nameInput = document.querySelector(myFormSelectors.nameInput);                  //  const nameInput = document.querySelector('#name');
  const jobInput = document.querySelector(myFormSelectors.jobInput);                    //  const jobInput = document.querySelector('#about');
  const likeBtn = document.querySelector(myFormSelectors.likeBtn);
 
  
  const ImageSelectors = {
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

  const addPhotoOverlayForm = document.querySelector(ImageSelectors.addPhotoOverlay);
  const openAddPhotoBtn = document.querySelector(ImageSelectors.addPhotoBtn);
  const pictureTitle= document.querySelector(ImageSelectors.pictureTitle);
  const pictureUrl = document.querySelector(ImageSelectors.pictureUrl);
  // const picTitleInput = document.querySelector(ImageSelectors.picTitleInput);
  // const picUrlInput = document.querySelector(ImageSelectors.picUrlInput);
  const closeAddPhotoOverlayBTN = document.querySelector(ImageSelectors.closeAddPhotoOverlayBTN);

  const openPhotoBtn = document.querySelector(ImageSelectors.openPhotoBtn);//new
  const increacePhotoUrl = document.querySelector(ImageSelectors.increacePhotoUrl);
  const increacePhotoTitle = document.querySelector(ImageSelectors.increacePhotoTitle);
  const increasePhotoPopup = document.querySelector(ImageSelectors.increasePhotoPopup);
  const closeIncreasePopupBtn = document.querySelector(ImageSelectors.closeIncreasePopupBtn);

  const increacePhotoUrl = document.querySelector(ImageSelectors.increacePhotoUrl);


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
  




// function stockPopupInputs() { //раб код
//   if(popupOverlay.classList.contains('popup-position_opened')){
//          nameInput.value = userName.textContent;
//          jobInput.value = userJob.textContent;
//   };
// };
function stockPopupInputs(element) { //тест
    if(element.classList.contains('popup-position_opened')){
           nameInput.value = userName.textContent;
           jobInput.value = userJob.textContent;
    };
  };


// function openForm() {      //рабочий код
//  popupOverlay.classList.add('popup-position_opened');
//  stockPopupInputs();
// };

function openForm(popupElement){ //test
  popupElement.classList.add('popup-position_opened');
}


// function closeForm(){  //рабочий код
//     popupOverlay.classList.remove('popup-position_opened');
// };

function closeForm(popupElement) {
  popupElement.classList.remove('popup-position_opened');
}



// openFormButton.addEventListener('click', openForm);
openFormButton.addEventListener('click', function() {
  openForm(popupOverlay);
  stockPopupInputs(popupOverlay);
});

closeFormButton.addEventListener('click', function() {
  
  closeForm(popupOverlay);
  console.log('rkbr', closeForm(popupOverlay));
});

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
  //  alert(nameInput);
  closeForm(popupOverlay);
};

popupForm.addEventListener('submit', formSubmitHandler);

function openPhotoInputs(element){ //new
  
  if(element.classList.contains('popup-position_opened')){
increacePhotoUrl.
console.log(increacePhotoUrl.src);
console.log(photoUrl.src);
increacePhotoTitle.textContent = photoUrl.alt;
  };
}

//popupNewImage open задача 3


openAddPhotoBtn.addEventListener('click', () => {
openForm(addPhotoOverlayForm);
});

closeAddPhotoOverlayBTN.addEventListener('click', () =>{
  closeForm(addPhotoOverlayForm);
});

closeIncreasePopupBtn.addEventListener('click', () =>{
  closeForm(increasePhotoPopup);
});

function formAddCardSubmitHandler (evt) {
  evt.preventDefault(); 

 const picTitleInput = document.querySelector(ImageSelectors.picTitleInput);
 const picUrlInput = document.querySelector(ImageSelectors.picUrlInput);

console.log(ImageSelectors.picTitleInput,ImageSelectors.picUrlInput);
  createCard(picTitleInput.value, picUrlInput.value);

  closeForm(addPhotoOverlayForm);

};

addPhotoOverlayForm.addEventListener('submit', formAddCardSubmitHandler);


function likeCard(evt){
  console.log('evt', evt);
  
  evt.target.classList.toggle('content-box__like_active');
  console.log('evt', evt.target);
};



  function createCard(name, link) { //создание карточки
    const template = document.querySelector(createCardSelectors.template)//вирт объект
    const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
    // console.log('template', template); 

    content.querySelector(createCardSelectors.title).textContent = name;
    
    content.querySelector(createCardSelectors.link).src = link;

    content.querySelector(createCardSelectors.link).alt = name;

    content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки

    content.querySelector(myFormSelectors.likeBtn).addEventListener('click', likeCard); //like

    content.querySelector(ImageSelectors.openPhotoBtn).addEventListener('click', () => { //increase photo
      openForm(increasePhotoPopup);
      

      openPhotoInputs ;
      
      console.log('ccilki', increacePhotoUrl );


    });
   
    // console.log('rjyntyn', document.querySelector(createCardSelectors.contentBox)) //вставили в реальный DOM(пока в конец template)
    const contentBox = document.querySelector(createCardSelectors.contentBox);

    // contentBox.insertBefore(content, null); //вставили в реальный DOM(пока в конец template)
    contentBox.prepend(content);

    return createCard;
  };


  initialCards.forEach(function(item){ //создание карточек
    const card = createCard(item.name, item.link);
  });
  



  // const likeButtons = document.querySelector(myFormSelectors.likeBtn);
  // console.log('likeButtons', likeButtons);
  // likeButtons.addEventListener('click', likeCard(evt));
  // console.log('evt', evt)

// const likeButtons = document.querySelectorAll(myFormSelectors.likeBtn); //ПРОБНАЯ ЧТОБЫ ЛАЙКАЛИСЬ НОВЫЕ КАРТЧКМИ
// likeButtons.forEach(function(likeButton){
//   likeButton.addEventListener('click', function(evt) {
//     evt.target.classList.toggle('content-box__like_active');
//     console.log(evt.target);
//   })
// });


