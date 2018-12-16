function User(name,id)
{
    this.name=name;
    this.id=id;
    this.human=true;
    this.hello=function()
    {
        console.log("hello"+this.name);
    }
}

User.prototype.exit=function()
{

    console.log(this.name+"ушел");
}

let Ivan=new User("Ваня",1);
let Alex=new User("Леша",1);

Alex.hello();
Alex.exit();

class User1
{
    constructor(name,id)
    {
     this.name=   name;
    }
    hello()
    {
        console.log("Приветик"+this.name);
    }
}
var us1= new User1("11",1);
us1.hello();