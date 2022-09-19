class Flower {
    constructor (name) {
        console.log(name + " Flower Constructor");
    }
    getId(){
        return 10;
    }
}

class Fruit extends Flower{
    constructor (name){
        super(name);
        console.log(name + " Plant constructor");
        
    }

    getId(){
        // return 50;
        return super.getId(); 
    }
}

let c = new Fruit("Mango");
console.log(c.getId());
 