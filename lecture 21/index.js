'use strict'
let box = document.querySelector('.box');

let width = box.offsetWidth,
    height = box.offsetHeight;


box.style.height = box.scrollHeight + "px";

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);