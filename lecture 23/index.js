let name = "Имя",
  surname = "Фамилия",
  age = "Возраст";

var text = `Введите ${name} возраст ${age}`;
document.write(text);

function makeArray() {
  var items = [];
  for (let i = 0; i < 10; i++) {
    var item = function() {
      console.log(i);
    };
    items.push(item);
  }
  return items;
}
var arr = makeArray();
arr[2]();

let fun = () => {
  console.log(this);
};

let fun2 = function() {
  console.log(this);
};
var user = {
  User: "Вася"
};

fun.call(user);
fun2.call(user);

let obj = {
  number: 5,
  sayNumner: function() {
    let say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumner();

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  let show = () => {
    console.log(this);
  };
  show();
});

function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}
calcOrDouble(5, 3);

class Myclass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  GetA() {
    console.log(this.a);
  }
  GetB() {
    console.log(this.b);
  }
}
var mc = new Myclass("Сучка", 2);
mc.GetA();
mc.GetB();

class MySecondClass {
  constructor(v) {
    this.v = v;
  }
  GetV() {
    console.log(this.b);
  }
}

var mc2 = new MySecondClass("V");
mc2.__proto__ = mc;
mc2.GetA();

let video = ["youtobe", "vimeo", "rutobe"];
let blogs = ["wordpress", "livejournal", "bloger"];
let internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c) {
  console.log(a, b, c);
}

let numbers = [2, 5, 7];
log(...numbers);
