// // // Hex, binary and octal numbers

// // let a = 0b11111111;         // binary form of 255
// // let b = 0o377;              // octal form of 255
// // alert( a == b );            //true


// // let num = 255;
// // alert(num.toString(16));
// // alert(num.toString(2));

// // let num = 25.6;
// // alert(Math.round(num));  //26
// // alert(Math.floor(num));  //25
// // alert(Math.ceil(num));   //26


// let num  = 3.35;
// alert(num.toFixed(1));    //3.4
// alert(num.toFixed(0));    //3
// alert(num.toFixed(5));    //3.35000


// alert( isNaN(NaN) ); // true   //converts its argument to a number and then tests it for being NaN
// alert( isNaN("str") ); // true
// alert( NaN === NaN ); // false


// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, because a special value: NaN
// alert( isFinite(Infinity) ) //false, because a special value: Infinity

// alert( parseInt('12.3') ); // 12, only the integer part is returned
// alert( parseFloat('12.34') ); // 12.34


// alert( Math.random() );
// alert( Math.max(3, 5, -10, 0, 1) ); 
// alert( Math.min(1, 2) );
// alert( Math.pow(2, 10) );