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
let button = document.getElementById("first");
let buttons = document.getElementsByTagName("button"),
    curcits = document.getElementsByClassName("circle"),
    curcitsAll = document.querySelectorAll("#grid .circle");

curcitsAll.forEach(element => {
    console.log(element);
});
console.log(curcitsAll);