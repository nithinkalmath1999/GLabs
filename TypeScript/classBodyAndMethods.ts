class Animal{
    name : "";
    constructor(name){
        this.name = name;
        console.log(this.name + " Constructor");
    }
    static staticMethod(){
        console.log("Static method");
        
    }
    greetAnimal(){
        console.log("Hello " + this.name);
        
    }
}
let abc = new Animal("lION");
Animal.staticMethod();
abc.greetAnimal();
