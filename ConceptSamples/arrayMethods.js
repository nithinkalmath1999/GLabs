

//         //Splice

// let arr = ["I", "love","My", "India"];
// alert(arr);
// arr.splice(2,2,"Robosoft");
// arr.splice(2, 0, "complex", "language");
// alert(arr);



//Slice
// let arr = ["t", "e", "s", "t"];
// alert( arr.slice(1, 3) ); 
// alert( arr.slice(-2));


// concatinate
// let arr =[1,2];
// alert(arr.concat([3,4]));
// alert(arr.concat([3,4],[5,6]));
// alert(arr.concat([3,4],[5,6],7,8));


// let arr =[1,2];
// let arrayLike ={
//     0: "nithin",
//     1: "kalmath",
//     [Symbol.isConcatSpreadable]: true,
//     length : 2
// };
// alert(arr.concat(arrayLike));


//forEach
// ["Rahul", "Tanuja", "Nithin"].forEach((item, index, array) => {
//     alert(item + " is at " + index + " in " + array);

// }); 



//find and findindex , findlastindex

// let users=[
//     {id:1,name:"nkm"},
//     {id:2,name:"yrs"},
//     {id:3,name:"tnjs"}
// ];
// let user =users.find(item => item.id==2);
// alert(user.name);


// let users=[
//     {id:1,name:"nkm"},
//     {id:2,name:"yrs"},                       //findIndex
//     {id:3,name:"tnjs"}
// ];
// alert(users.findIndex(user => user.name == "yrs"));


// let users=[
//     {id:1,name:"nkm"},
//     {id:2,name:"yrs"},                         //findLastIndex
//     {id:3,name:"tnjs"}
// ];
// alert(users.findLastIndex(user => user.name == 'tnjs'));



// let users=[
//     {id:1,name:"nkm"},
//     {id:2,name:"yrs"},
//     {id:3,name:"tnjs"}                          //filter
// ];
// let user =users.filter(item => item.id<3);
// alert(user.length);


// let lengths = ["Tanuja","Nithin","Shetty"].map(item =>item.length);
// alert(lengths);                                                            //map

// let arr =[1,3,15,24]
// alert(arr.sort());                               //sort


// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
// let arr =[1,3,15,24]
// alert(arr.sort(compareNumeric));   



// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
//                                     //reverse
// alert( arr );


// let names = 'Tanuja,Nithin,Shetty';
// let arr = names.split(',');
//split
// for(let name of arr)
// {
//     alert("A message to " + name +".");
// }


// let names = 'Tanuja,Nithin,Shetty,Subash,VK'.split(',',2);
// alert(names);                                             //split with second numeric argument


// let str = "nithin";
// alert(str.split(''));


// let arr = [' Tanuja',' Nithin',' Shetty',' Subash',' VK'];
// alert(arr.join(';'));




//Tasks

// let str = "background-color-asdfg";

// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }
// alert(camelize(str));



// function filterRange(arr,a,b)
// {
//     return arr.filter(item=> (a<=item && b>=item));
// }

// let arr = [1,2,3,5,6];

// let filter = filterRange(arr,1,6);
// alert(filter);


// let arr = [5, 2, 6, 3, 8, 1];
// alert(arr.sort((a, b) => a - b)); //increasing order
// alert(arr.sort((a, b) => b - a)); //decreasing order



// let a = { name: "nkm", age: 22 };
// let b = { name: "yrs", age: 23 };
// let c = { name: "ckm", age: 27 };

// let users = [ a, b, c ];

// let names = users.map(item => item.age);
// alert( names );


// let a = { name: "nithin", surname: "kalmath", age: 23 };
// let b = { name: "rahul", surname: "shetty", age: 23 };
// let c = { name: "tanuja", surname: "s", age: 22 };


// let users = [a, b, c];

// let usersMapped = users.map(user => ({
//     fullName: user.name + user.surname,
//     age: user.age
// }));
// // console.log(users);   
// // console.log(usersMapped);
// alert(usersMapped[0].age);
// alert(usersMapped[0].fullName); 


// function sortByAge(arr)
// {
//     arr.sort((a,b)=>a.age-b.age);
// }
// let a = { name: "rahul", age: 25 };
// let b = { name: "nkm", age: 30 };
// let c = { name: "tanu", age: 28 };

// let arr = [ a, b, c ];

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);


