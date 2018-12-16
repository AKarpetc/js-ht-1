let button = document.querySelector("#test");

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("hello" + this.name);
    }
}

User.prototype.exit = function () {

    console.log(this.name + "ушел");
}

let Ivan = new User("Ваня", 1);
let Alex = new User("Леша", 1);

Alex.hello();
Alex.exit();

class User1 {
    constructor(name, id) {
        this.name = name;
    }
    hello() {
        console.log("Приветик" + this.name);
    }
}
var us1 = new User1("11", 1);

function UseStrinct() {
    console.log(this);

    function show(test, test2) {
        console.log(test, test2);
        console.log(this);
    }
    show.apply(us1, ['dumn', '123321']);
}


UseStrinct.call(us1);

button.addEventListener("click", function () {
    this.style.background = 'red';

    function showThis() 
    {
        console.log(this);

    }
    showThis.call(this);

});

function count(number) {
    console.log(this)
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));