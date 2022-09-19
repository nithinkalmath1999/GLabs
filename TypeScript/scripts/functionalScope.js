function greetPerson(name) {
    if (name === "Nithin") {
        var greet = "Hello " + name; //functionalScope
    }
    else { //hoisting
        var greet = " Hi there";
    }
    console.log(greet);
}
greetPerson("Nithin");
//var declaration gives us functional scope and let declaration gives us block scope
//# sourceMappingURL=functionalScope.js.map