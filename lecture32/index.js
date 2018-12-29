'use strict';


let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел');
    setTimeout(function () {
        Math.random() > 0.5 ? headshot({}) : fail('Вы промахнулись');
    });
}

function win() {
    console.log("Вы выиграли");
    (drink == 1 ? buyBeer() : giveMoney());
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

shoot({}, function (mark) {
    console.log('Вы попали в цель!');
    win(mark, buyBeer, giveMoney);
}, function (miss) {
    console.error(miss);
    loose();
});