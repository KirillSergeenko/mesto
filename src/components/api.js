
import {checkResponse} from './utils';

import{nameInput,jobInput,inputUrlAva} from './modal';


export function getCards() { //делает запрос на сервер
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/cards', { //адрес
        method: "GET",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse) //возвращает данные в формате ответа сервера и обрабатывает их методом респонс.json, чтоб получить данные нужного формата.        
};


export function getUserInformation(){
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me', {
        method: "GET",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
    })
        .then(checkResponse);
};


export function profileServerUpdatePATCH(name, job){ //патч - заменяет чатсь данных, в нашем случае инфу о себе и аватарку
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me', {
        method: 'PATCH',
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name:     name.value,
            about:    job.value,
         
        }),
    }).then(checkResponse)
};

export function profileAvatarUpdatePATCH(avatar){ //патч - заменяет чатсь данных, в нашем случае инфу о себе и аватарку
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me/avatar', {
        method: 'PATCH',
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            avatar: avatar.value,
        }),
    }).then(checkResponse)
};



export function createServerCardPOST(itemName, itemlink){
          return fetch('https://nomoreparties.co/v1/plus-cohort-26/cards',{
              method: "POST",
              headers: {
                  "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
                  "Content-Type": "application/json; charset=UTF-8"
              },
              body:JSON.stringify({
                  name: itemName,//.name,  
                  link: itemlink,//.link  
              }),
          }).then(checkResponse);
      };
  

export  function deleteServerCard(itemID){
    return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/${itemID}`, {
        method: "DELETE",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
    })
        .then(checkResponse);
};


export  function deleteServerLike(itemID){
    console.log('itemID', itemID);
    return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/likes/${itemID}`, {
        method: "DELETE",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
    }).then(checkResponse);
    }

export function likePutInServer(itemID){
    console.log('itemID2', itemID);
    return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/likes/${itemID}`,{
        method: "PUT",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
    })
    .then(checkResponse);
}



// export function renderLoading(isLoading){
  
//     if (isLoading) {
//       document.querySelector('.form__button-save-selfinfo').textContent = 'Сохранение...';
//       console.log(document.querySelector('.form__button-save-selfinfo'));
//      }else{
//       document.querySelector('.form__button-save-selfinfo').textContent = 'Сохранить';
//      };
//      };
     
    