const openFormButton = document.querySelector('.profile__button-addselfinfo');
const closeFormButton = document.querySelector('.form__button-close');

const popupOverlay = document.getElementById('position');

const popupForm = document.getElementById('myform');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__text');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');


function openForm() {
 popupOverlay.classList.add('popup-position_opened');
 stockPopupInputs();
};

function closeForm(){
    popupOverlay.classList.remove('popup-position_opened');
};

openFormButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);





function stockPopupInputs() {
  if(popupOverlay.classList.contains('popup-position_opened')){
         nameInput.value = userName.textContent;
         jobInput.value = userJob.textContent;

  };
};





function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    
    let nameInput = popupForm.querySelector('#name').value;
    let jobInput =  popupForm.querySelector('#about').value;
    let userName = document.querySelector('.profile__name');
    let userJob = document.querySelector('.profile__text');
    userName.textContent = nameInput;
    userJob.textContent = jobInput;
   // alert(nameInput);
  // closeForm();
}


popupForm.addEventListener('submit', formSubmitHandler);