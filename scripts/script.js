const myFormSelectors = {
  buttonAddSelfInfo: '.profile__button-addselfinfo',
  popupButtonClose: '.popup-container__button-close',
  overlay: '.popup-position[id="position"]',
  popupForm: '.form[id="myform"]',
  userName: '.profile__name',
  userJob: '.profile__text',
  nameInput: '#name',
  jobInput: '#about'
  }



  const openFormButton = document.querySelector(myFormSelectors.buttonAddSelfInfo);               //  const openFormButton = document.querySelector('.profile__button-addselfinfo');
  const closeFormButton = document.querySelector(myFormSelectors.popupButtonClose);               //  const closeFormButton = document.querySelector('.popup-container__button-close');
                                                                                     
  const popupOverlay = document.querySelector(myFormSelectors.overlay);                           //  const popupOverlay = document.getElementById('position');
                                                                                             
  const popupForm = document.querySelector(myFormSelectors['popupForm']);                         //  const popupForm = document.getElementById('myform');
                                                                                             
  const userName = document.querySelector(myFormSelectors.userName);                              //  const userName = document.querySelector('.profile__name');
  const userJob = document.querySelector(myFormSelectors.userJob);                                //  const userJob = document.querySelector('.profile__text');
  const nameInput = document.querySelector(myFormSelectors.nameInput);                            //  const nameInput = document.querySelector('#name');
  const jobInput = document.querySelector(myFormSelectors.jobInput);                              //  const jobInput = document.querySelector('#about');





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

    
    // let nameInput = popupForm.querySelector('#name').value;
    // let jobInput =  popupForm.querySelector('#about').value;
    // userName;
    // userJob;
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
  //  alert(nameInput);
  closeForm();
}


popupForm.addEventListener('submit', formSubmitHandler);