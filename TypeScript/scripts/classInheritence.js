var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Flower = /** @class */ (function () {
    function Flower(name) {
        console.log(name + " Flower Constructor");
    }
    Flower.prototype.getId = function () {
        return 10;
    };
    return Flower;
}());
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Plant constructor");
        return _this;
    }
    Fruit.prototype.getId = function () {
        // return 50;
        return _super.prototype.getId.call(this);
    };
    return Fruit;
}(Flower));
var c = new Fruit("Mango");
console.log(c.getId());
//# sourceMappingURL=classInheritence.js.map