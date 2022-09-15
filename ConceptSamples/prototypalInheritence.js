
// // The value of protoTypes can be either object or null. 

// let animal = {
//     eats : true,
//     walk(){
//         alert("Animal walks");
//     }
// };

// let rabbit = {
//     jumps : true,
//     __proto__ : animal
// };


// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };

// rabbit.walk();  //Animal walks
// longEar.walk();  // Animal walks
// alert(longEar.jumps);  // true





        //for...in loop



// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true,
//     __proto__ : animal
// };

// alert(Object.keys(rabbit));   // jumps

// for (let prop in rabbit) alert(prop); //jumps,eats

