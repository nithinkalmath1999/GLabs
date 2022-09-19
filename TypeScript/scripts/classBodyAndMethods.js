var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Animal.staticMethod = function () {
        console.log("Static method");
    };
    Animal.prototype.greetAnimal = function () {
        console.log("Hello " + this.name);
    };
    return Animal;
}());
var abc = new Animal("lION");
Animal.staticMethod();
abc.greetAnimal();
//# sourceMappingURL=classBodyAndMethods.js.map