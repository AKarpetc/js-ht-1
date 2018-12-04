var obj = {
    test: "Тест",
    ps: "ps"
};
obj.test2 = "test2";
delete obj.test;

function hello() {
    console.log("Hello World");
}

var mass = [1, 5, 8, 9, 7, 2, 5, 4];

mass.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
var divsGrid = document.querySelectorAll("#grid div");
var grid = document.querySelectorAll("#grid");
let button = document.getElementById("first");
let buttons = document.getElementsByTagName("button"),
    curcits = document.getElementsByClassName("circle"),
    curcitsAll = document.querySelectorAll("#grid .circle");


curcitsAll.forEach((element, i, heart) => {
    console.log(element);
});

console.log(curcitsAll);

button.style.backgroundColor = 'blue';


let newdivs = [];
divsGrid.forEach(element => {
    let div = document.createElement('button');
    div.classList.add("circle");
    element.appendChild(div);
    newdivs.push(div);
});

divsGrid[0].removeChild(newdivs[0]);

let newButton = document.createElement('button');

