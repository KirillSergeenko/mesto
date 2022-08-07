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
  
  
//hw run 5
  




function stockPopupInputs() {
  if(popupOverlay.classList.contains('popup-position_opened')){
         nameInput.value = userName.textContent;
         jobInput.value = userJob.textContent;
  };
};

function openForm() {
 popupOverlay.classList.add('popup-position_opened');
 stockPopupInputs();
};

function closeForm(){
    popupOverlay.classList.remove('popup-position_opened');
};

openFormButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
  //  alert(nameInput);
  closeForm();
};

popupForm.addEventListener('submit', formSubmitHandler);



//popupNewImage open задача 3

const ImageSelectors = {
  addPhotoBtn: ".profile__button-addphoto", 
  addPhotoOverlay: "#popupPhotoFormPosition",
  pictureTitle: ".content-box__title",
  picTitleInput: "#pic-name",
  picUrlInput: "#pic-url",
  pictureUrl: "content-box__photo",
  closeAddPhotoOverlayBTN: '#add-photo-popup-close'
};

const addPhotoOverlayForm = document.querySelector(ImageSelectors.addPhotoOverlay);
const openAddPhotoBtn = document.querySelector(ImageSelectors.addPhotoBtn);
const pictureTitle= document.querySelector(ImageSelectors.pictureTitle);
const pictureUrl = document.querySelector(ImageSelectors.pictureUrl);
const picTitleInput = document.querySelector(ImageSelectors.picTitleInput);
const picUrlInput = document.querySelector(ImageSelectors.picUrlInput);
const closeAddPhotoOverlayBTN = document.querySelector(ImageSelectors.closeAddPhotoOverlayBTN);



function openAddImageForm(){
  addPhotoOverlayForm.classList.add('popup-position_opened');
};

function closeAddImageForm(){
  addPhotoOverlayForm.classList.remove('popup-position_opened');
};


openAddPhotoBtn.addEventListener('click', openAddImageForm);
closeAddPhotoOverlayBTN.addEventListener('click', closeAddImageForm);







// //задача 1

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





//   //функция создания кароточек

  const createCardSelectors = {
    template: '#card-template',
    content: '.content-box' ,
    title: '.content-box__title',
    deleteBtn: ".content-box__delete",
    link: ".content-box__photo",
    contentBox: '.grig-content'
  }


 // createCard(name, link) {
    // 1. Взять шаблон и склонировать его.
    // 2. Наполнить элемент-клон шаблона, используя name и link из аргументов
    // 3. Вернуть наполненный элемент-клон.}
  
    initialCards.forEach(function(item){ //создание карточек
      createCard(item.name, item.link);
    
    });
  

  function createCard(name, link) { //создание карточки
    const template = document.querySelector(createCardSelectors.template)//вирт объект
    const content = template.content.querySelector(createCardSelectors.content).cloneNode(true); 
    console.log('template', template); 

    content.querySelector(createCardSelectors.title).textContent = name;
    
    content.querySelector(createCardSelectors.link).src = link;

    content.querySelector(createCardSelectors.deleteBtn).addEventListener('click', () => {content.remove(); }); //для удаления карточки
   
    console.log('rjyntyn', document.querySelector(createCardSelectors.contentBox)) //вставили в реальный DOM(пока в конец template)
    const contentBox = document.querySelector(createCardSelectors.contentBox);

    contentBox.insertBefore(content, null); //вставили в реальный DOM(пока в конец template)
    
  };

 

console.log('likeButtons', document.querySelectorAll(myFormSelectors.likeBtn) )
const likeButtons = document.querySelectorAll(myFormSelectors.likeBtn);

likeButtons.forEach(function(likeButton){
  likeButton.addEventListener('click', function(evt) {
  
  evt.target.classList.toggle('content-box__like_active');
  console.log(evt.target);
})
});



