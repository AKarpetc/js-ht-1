let biginCalc = document.getElementById("start");
let blocks = document.querySelectorAll(".result-table div[class$='-value']");

let obligatory = document.querySelectorAll(".expenses-item");

let buttons = document.getElementsByTagName("button");

let obligatoryApp = buttons[0];
let optionalApp = buttons[1];
let calcDayly = buttons[2];


let optional = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let choosePercent = document.querySelector(".choose-percent");
let savings = document.querySelector("#savings");

let dateFields = document.querySelectorAll(".time-data input[class$='-value']");

let queryLabel = document.querySelectorAll("label");

console.log(queryLabel);

queryLabel.forEach(el => {

    el.style.fontSize = "24px";

});