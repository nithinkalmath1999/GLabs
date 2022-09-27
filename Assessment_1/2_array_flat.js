function arrayFlat(arr) {
    // let arr3 = arr.toString();
    // let arr2 = arr.toString().split(',');
    let arr1 = arr.toString().split(',').map(Number);
    return arr1;
}

let arr = [1, 2, [3, 4, [5]]];
console.log(arrayFlat(arr));

