for(let i=1;i<=5;i++)
{
   setTimeout(function(){console.log(i);},1000) 
}

for(var i=1;i<=5;i++)
{
   setTimeout(function(){console.log(i);},1000) 
} 
//we are passing referrence of the variable i not the actual value of i inside each loop.