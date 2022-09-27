let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

let i,j,c,res=[];
let set = new Set();
for(i=0;i<arr.length;i++){
    set.add(arr[i]);
}

let newarr = Array.from(set);

let map = new Map();
for(i=0;i<newarr.length;i++){
    c=0;
    for(j=0;j<arr.length;j++){
        if(newarr[i]==arr[j]){
            c++;
        }
    }
    map.set(newarr[i],c);
}
map = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));

for(const item of map){
    console.log(item);
    for(i=0;i<item[1];i++){
        res.push(item[0]);
    }
}
console.log(res);


