let user ={
    firstName : "Nithin",
    surName : "Kalmath"
};


// console.log(Object.getOwnPropertyDescriptor(user,"firstName"))

Object.defineProperty(user, "age",{
    value : 22,
    writable : true,                //if false,it does allow the properties to modify
    configurable : true,        //once the configurable is set to false, we can't upadte/change the properties of the object, we cannot update any other flags
    enumerable : true               //if false,it does allow the properties to be listed in a loop

});


// Object.defineProperties(user,{
//     loc : {value : "Udupi", writable : true, enumerable : true},
//     profession : {value : "TSE", writable : true, enumerable : true}
    
// });


// // delete user.age;
// // delete user.firstName;
// // user.age = 42;

// console.log(Object.getOwnPropertyDescriptor(user,"age"))

// for (let key in user){
//     console.log(key);
// }


// Object.seal(user);     //w = true, enum = true , config = false

// user.firstName = "Rahul";
// console.log(user.firstName);//rahul


// Object.freeze(user);           //w = false, enum = true , config = false
// user.firstName = "rahul";
// console.log(user.firstName);//nithin


// Object.preventExtensions(user);      //we cannot the add the new properties but we can modify the existibg properties
// user.loc = "udupi";

// console.log(user.loc);//undefined

// console.log(Object.isExtensible(user));//false
// console.log(Object.isSealed(user));//true
// console.log(Object.isFrozen(user));//true
