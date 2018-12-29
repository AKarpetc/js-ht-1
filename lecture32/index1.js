"use strict";

let drink = 0;

function shoot(arrow) {
    console.log("Вы сделали выстрел");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({}) : reject("Вы промахнулись");
        });
    });
    return promise;
}


function win() {
    console.log("Вы выиграли");
    drink == 1 ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("Вам купили пиво");
}

function giveMoney() {
    console.log("Вам дали денег");
}

function loose() {
    console.log("Вы проиграли");
}

shoot({})
    .then(mark => console.log("Вы попали в цель!"))
    .then(win)
    .catch(loose);