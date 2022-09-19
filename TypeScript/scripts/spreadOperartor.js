var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    // console.log(colors);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
    ;
};
var messages = "List of colors";
var colorArray = ['Blue', 'Orange', 'Yellow'];
displayColor.apply(void 0, __spreadArrays([messages], colorArray));
//# sourceMappingURL=spreadOperartor.js.map