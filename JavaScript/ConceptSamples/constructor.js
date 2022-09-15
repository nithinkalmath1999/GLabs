//constructor

function User(name){
    this.name=name;
    this.isAdmin=false;
}

let user = new User("nithin");

alert(user.name);
alert(user.isAdmin);

