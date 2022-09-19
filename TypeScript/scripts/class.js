var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var per = new Person;
console.log(per.greet === Person.prototype.greet);
//classes are similar to function but they are not hoisted.
//  Variable and function names can be used before declaring it. The JavaScript compiler moves all the declarations of variables and functions at the top so that there will not be any error. This is called hoisting.
//# sourceMappingURL=class.js.map