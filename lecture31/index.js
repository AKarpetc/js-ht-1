'use strict'

let rub = document.querySelector('#rub');
let usd = document.querySelector('#usd');
rub.addEventListener("input", () => {

    let request = new XMLHttpRequest();

    //request.open(method,url,async,login,pass);
    request.open('GET', 'currency.json');
    request.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    request.send();

    //status
    //statusText
    //responceText/responce
    //readyState

    request.addEventListener('readystatechange', function () {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            console.log(data);
            usd.value = rub.value / data.usd;
        } else {
            usd.value = "Что то пошло не так";
        }
    });

});