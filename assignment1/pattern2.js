let rows = +prompt("enter the num of rows");

let pattern = "";
for(let i=1;i<=rows;i++)
{
    for(var j=0;j<=rows -i;j++)
    {
        pattern +=" ";
    }
    for(let k=0;k<2*i-1;k++)
    {
        if((k==0) || (k==2*i-2) || i==rows)
        {
            pattern +="*";
        }
        else{
            pattern+=" ";
        }
        
    }
    pattern +="\n";
}

console.log(pattern);




        //        *
        //       * *
        //      *   *
        //     *******