'use strict';
/*
let User = function (name, age) {
    let userName = name;
    let userAge = age;

    this.getAge = function () {
        return userAge;
    };

    this.setAge = function (age) {
        userAge = age;
    };

    this.getName = function () {
        return userName;
    };
    this.setName = function (name) {
        userName = name;
    };

    this.say = function () {
        console.log(user.getName());
        console.log(user.getAge());
    };

};

var user = new User("Вася", 15);
user.say();
user.setName("Говно");
user.say();
*/



/*
let number = 1;

(function () {
    let number = 1;
    number = 2;
    console.log(number++);

}());*/


let user = (function () {
    
    return {
        sayHello: function () {
            console.log('Hello');
        }
    };

}());

console.log(user.sayHello());