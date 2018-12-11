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

//let timerId = setTimeout(sayHello, 3000);
//clearTimeout(timerId);

/*function sayHello() {
    console.log("Hello");
}


let timerId = setInterval(sayHello, 3000);
clearTimeout(timerId);*/

/*let timerId = setTimeout(function log() {
    console.log("HEllo");
    setTimeout(log, 2000);
});*/
