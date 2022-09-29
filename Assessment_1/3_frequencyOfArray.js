let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];
arr = [8,7,8,6,3,8,1,1,1,3,3];
//op= [8,8,8,3,3,3,1,1,1,7,6]

// let i,j,c,res=[];
// let set = new Set();
// for(i=0;i<arr.length;i++){
//     set.add(arr[i]);
// }

// let newarr = Array.from(set);

// let map = new Map();
// for(i=0;i<newarr.length;i++){
//     c=0;
//     for(j=0;j<arr.length;j++){
//         if(newarr[i]==arr[j]){
//             c++;
//         }
//     }
//     map.set(newarr[i],c);
// }
// map = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));

// for(const item of map){
//     console.log(item);
//     for(i=0;i<item[1];i++){
//         res.push(item[0]);
//     }
// }
// console.log(res);
let res1=[];

let res = arr.reduce(function(acc,cur){
    if(acc.get(cur)){
        acc.set(cur,acc.get(cur)+1);
    }
    else{
        acc.set(cur,1);
    }
    return acc;
},new Map([]));

res = new Map([...res.entries()].sort((a,b) => b[1]-a[1]));

for(let item of res){
    for(i=0;i<item[1];i++)
    {
        res1.push(item[0]);
    }
}
console.log(res1);



