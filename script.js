const openFormButton = document.querySelector('.profile__button-addselfinfo');
const closeFormButton = document.querySelector('.form__button-close');
let popupForm = document.getElementById('myform');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__name');


/*функция обработик клика*/
function openForm() {
    popupForm.classList.add('form_opened')
};

function closeForm(){
    popupForm.classList.remove('form_opened')
};

openFormButton.addEventListener('click', openForm );
closeFormButton.addEventListener('click', closeForm );









// // Находим форму в DOM
// let formElement = document.querySelector(".form")// Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = form.querySelector('.form__userName') // Воспользуйтесь инструментом .querySelector()
// let jobInput = form.querySelector('.form__user-about')// Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 