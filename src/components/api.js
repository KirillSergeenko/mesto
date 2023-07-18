
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





export function profileServerUpdatePATCH(name, job, avatar){ //патч - заменяет чатсь данных, в нашем случае инфу о себе и аватарку
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me', {
        method: 'PATCH',
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name:     name.value,
            about:    job.value,
            // avatar:   avatar.value
        }),
    }).then(checkResponse)
};

export function profileAvatarUpdatePATCH( avatar){ //патч - заменяет чатсь данных, в нашем случае инфу о себе и аватарку
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



export function createServerCardPOST(newCard){
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/cards',{
        method: "POST",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify({
            title: newCard.title,
            body: newCard.body,
            link: newCard.src
        })
    })
}

// export const deleteServerCard = (cardId)=>{
//     return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/${cardId}`, {
//         method: "DELETE",
//         headers: {
//             "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
//             "Content-Type": "application/json"
//         },
//     })
//         .then(checkResponse);
// };
// console.log('промис-дел', deleteServerCard);