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
    .then(mark => 
        {
            
        })
    .then(win)
    .catch(loose);


    var promise=new Promise(function(resolve,reject)
    {
        for(var i=0;i<=1000;i++)
        {
           setTimeout(function()
         {
                var div=document.createElement("div");
                div.innerHTML="Тест промис 1";
                document.body.appendChild(div);

            },9000);
            
            
        }
        resolve();
    });
    var div=document.createElement("div");
        div.innerHTML="Тест промис 2";
        document.body.appendChild(div);
    promise.then(()=>
    {var div=document.createElement("div");
    div.innerHTML="Тест промис 3";
    document.body.appendChild(div);
        
    });

    