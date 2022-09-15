const n = prompt("enter the num");
let c=0;
const arr = [1,2,3,4,5,6,"rahul"];

function includes(){
    for( let i=0;i<arr.length;i++)
    {
        if(arr[i]==n)
        c++;
    }
    if (c==0)
    return "Doesn't exists";
    else 
    return "Exists";
}

alert(includes());