let rows = +prompt("enter the num of rows");

let arr = "";
for(let i=1;i<=rows;i++)
{
    for(let j=0;j<i;j++)
    {
        arr += "* ";
    }
    arr +="\n"; 
}
alert(arr);



//      *
//      * *
//      * * *
//      * * * *