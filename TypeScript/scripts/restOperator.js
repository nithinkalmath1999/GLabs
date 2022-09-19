var displayColors = function (message) {
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
var message = "List of colors";
displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');
//# sourceMappingURL=restOperator.js.map