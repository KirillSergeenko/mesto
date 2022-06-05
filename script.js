const openFormButton = document.querySelector('.profile__button-addselfinfo');
const closeFormButton = document.querySelector('.form__button-close');
const popupForm = document.getElementById('myform');
//part 2


const userName = document.querySelector('.profile__name').innerHTML;
console.log(userName);

const userJob = document.querySelector('.profile__text').innerHTML;
console.log(userJob);


const nameInput = document.querySelector('#name');
//nameInput.value= userName;

const jobInput = document.querySelector('#about');
//jobInput.value= userJob;




/* часть1 функция обработик клика*/
function openForm() {
 popupForm.classList.add('form_opened')  
};

function closeForm(){
    popupForm.classList.remove('form_opened')
};

openFormButton.addEventListener('click', openForm );
closeFormButton.addEventListener('click', closeForm );
// часть 2

function stockPopupInputs() {

    if(popupForm.classList.contains('form_opened')){
        nameInput.value= userName;
        jobInput.value= userJob;
    };
};
stockPopupInputs();








//часть 3
// // Находим форму в DOM 
// let formElement = // Воспользуйтесь методом querySelector() 
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector() 
// let jobInput = // Воспользуйтесь инструментом .querySelector() 
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
let formSaveButton = document.querySelector('.form__button-saveSelfinfo');

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value 
    let nameInput = document.querySelector('#name').value;
    let jobInput =  document.querySelector('#about').value;
    
    // Выберите элементы, куда должны быть вставлены значения полей
    let userName = document.querySelector('.profile__name').innerHTML;
    let userJob = document.querySelector('.profile__text').innerHTML;

    // Вставьте новые значения с помощью textContent
    userName.textcontent = nameInput.value;
    userJob.textcontent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

//formElement.addEventListener('submit', formSubmitHandler); 
formSaveButton.addEventListener('submit', formSubmitHandler);