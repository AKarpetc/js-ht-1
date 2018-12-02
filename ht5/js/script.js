let menuItems = document.querySelectorAll(".menu .menu-item");
let menu = document.querySelector(".menu");
let title=document.querySelector(".title");
let adv=document.querySelector(".adv");
let propmptDiv=document.querySelector("#prompt");
var numbers = [{
        name:"Первый пункт",
        number: 1
    },
    {
        name:"Второй пункт",
        number: 2
    },
    {
        name:"Третий пункт",
        number:3
    },
    {
        name:"Четвертый пункт",
        number: 4
    },
    {
        name:"Пятый пункт",
        number: 5
    }
];

menuItems.forEach(element => 
    {
        console.log(element.outerHTML);
        let number=numbers.find(function(item)
        {
            return item.name==element.innerHTML;

        }); 

        number.element=element;
        
});

var newElement= menuItems[0].cloneNode(true);
newElement.innerHTML="Пятый элемент";
numbers[4].element=newElement;
console.log(newElement);
numbers.forEach(element => {
    menu.append(element.element);
});
title.innerHTML="Мы продаем только <b>подлинную</b> технику Apple";
adv.remove();
propmptDiv.innerHTML= prompt("Как вы относитесь к технике apple?");

