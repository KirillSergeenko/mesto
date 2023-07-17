

import {checkResponse} from './utils';

export const getCards = () => { //делает запрос на сервер
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/cards', { //адрес
        method: "GET",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse); //возвращает данные в формате ответа сервера и обрабатывает их методом респонс.json, чтоб получить данные нужного формата.          
};
console.log('промис-карта', getCards);



export const getUserInformation = () => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me', {
        method: "GET",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse);
};

console.log('промис-юзер', getUserInformation);




export const profileServerUpdatePATCH = (name, about, avaUrl ) =>{ //патч - заменяет чатсь данных, в нашем случае инфу о себе и аватарку
    return fetch('https://nomoreparties.co/v1/plus-cohort-26/users/me', {
        method: 'PATCH',
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${name.textContent}`,
            about: `${about.textContent}`,
            url: `${avaUrl}`
            }),
    }).then(checkResponse);
};
console.log('промис-ПАТЧ', profileServerUpdatePATCH);


export const deleteServerCard = (cardId)=>{
    return fetch(`https://nomoreparties.co/v1/plus-cohort-26/cards/${cardId}`, {
        method: "DELETE",
        headers: {
            "authorization": "627579fc-f46e-4865-908e-16ddd6f83f18",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse);
};
console.log('промис-дел', deleteServerCard);