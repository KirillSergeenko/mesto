const openFormButton = document.querySelector('.profile__button-addselfinfo');
const closeFormButton = document.querySelector('.form__button-close');
let popupForm = document.getElementById('myform');


/*функция обработик клика*/
function openForm() {
    popupForm.classList.add('form_opened')
};

function closeForm(){
    popupForm.classList.remove('form_opened')
};

openFormButton.addEventListener('click', openForm );
closeFormButton.addEventListener('click', closeForm );