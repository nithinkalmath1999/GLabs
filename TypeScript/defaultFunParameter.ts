let getValue = function(v=10,b=5)
{
    console.log(v + b);
};
getValue();                  //15
getValue(20);                  //25
getValue(20,30);                //50
getValue(undefined,30);            //40

