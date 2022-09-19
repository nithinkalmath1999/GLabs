var getValue = function (v, b) {
    if (v === void 0) { v = 10; }
    if (b === void 0) { b = 5; }
    console.log(v + b);
};
getValue(); //15
getValue(20); //25
getValue(20, 30); //50
getValue(undefined, 30); //40
//# sourceMappingURL=defaultFunParameter.js.map