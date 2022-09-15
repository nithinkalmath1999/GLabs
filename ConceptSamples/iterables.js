
// function myNumbers(){
//     let n=0;
//     return {
//         next : function(){
//             n +=10;
//             return{value:n,done:false};
//         }
//     };
// }
// const n= myNumbers();
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());


myNumbers={};

myNumbers[Symbol.iterator]=function(){
    let n=0;
    done = false;
    return {
        next (){
            n +=10;
            if(n==100){done = true}
            return{value:n,done:done};
        }
    };
}

let text ="";
for(const num of myNumbers){
    alert(text += num + "\n");
}