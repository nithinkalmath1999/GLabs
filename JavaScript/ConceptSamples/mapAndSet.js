// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// // for (let vegetable of recipeMap.keys()) {
// //     alert(vegetable);
// // }

// // for (let amount of recipeMap.values()) {
// //     alert(amount);
// // }

// for (let entry of recipeMap) {
//     alert(entry);
// }




// function unique(arr) {
//     return Array.from(new Set(arr));
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   alert( unique(values) );


function arrayclean(arr) {
    let map = new Map();

    for (let word of arr) {

        let sorted = word.toLowerCase()
        .split('')
        .sort()
        .join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(arrayclean(arr));