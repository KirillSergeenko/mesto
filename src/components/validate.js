//функциональность валидации форм


const validateSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};



function showInputError(formElement, inputElement, errorMessage) { //input === inputElement из тренажера
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // console.log('errorElement', errorElement);
  
    inputElement.classList.add('form__input_type_error'); //красное подчеркивание у ИНПУТА
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active'); // показ спана с настроенным form__input-error
  };
  
  function hideInputError(formElement, inputElement) { //прячет сообщение об ошибке
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove('form__input_type_error'); //отменим поле ошибочного элемента на красный у ИНПУТА
    errorElement.classList.remove('form__input-error_active');// отменим показ спана с настроенным form__input-error
    errorElement.textContent = ''; //очистим поле ошибки
  };
  
  
  function checkInputValidity(formElement, inputElement){
    if (inputElement.validity.valid ){
      hideInputError(formElement, inputElement);
    }else{
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
  }
  
  
  
  
  function setEventListeners(formElement){  //навесить обработчики на нужные поля формы
    const inputsList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__button-save-selfinfo');
    toggleButtonState(inputsList, buttonElement);
    inputsList.forEach( (inputElement)=>{
      inputElement.addEventListener('input', function(){
        toggleButtonState(inputsList, buttonElement);
        checkInputValidity(formElement, inputElement);
        
      });
  
    });
  };
  
  
  function enableValidation(args){ //ищут все формы в DOM и вешает на них setEventListeners
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) =>{
      formElement.addEventListener('submit', function (evt){
        evt.preventDefault();
      } );
      const fieldsetList = Array.from(document.querySelectorAll('.form__set')); 
       fieldsetList.forEach((fieldset)=>{
        setEventListeners(fieldset);
      }); 
  
      //setEventListeners(formElement);
    });
  };




  
  function hasInvalidInput(inputsList){//проверим, есть ли хоть 1 невалидное поле вернет тру. если хоть одно с ошибкой
    return inputsList.some((inputsList)=>{
     return !inputsList.validity.valid;
    } );
  };
  
  function toggleButtonState (inputsList, buttonElement){ //вешаем переключатель на кнопку, делаем ее активной, если все ок, неактивной, если есть невалидные поля
    if(hasInvalidInput(inputsList)){
      buttonElement.disabled = true;
      buttonElement.classList.add('form__button_inactive');
      
    }else{
      buttonElement.disabled = false;
      buttonElement.classList.remove('form__button_inactive');
    }
  
  };
  

  export {validateSettings, enableValidation,  };