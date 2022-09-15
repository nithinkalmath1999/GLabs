let speed = +prompt("enter the speed");

function checkSpeedLimit(speed){
    let penalty=0;
    if (speed <=70)
    {
        alert("Good safe driving");
    }
    else if(speed>70)
    {
        penalty=(speed-70)/5;
        if(penalty>10)
        {
            alert("Licence Suspended");
        }
        else{
            alert("Speed Limit Crossed by Penalty Point " + penalty);
        }
    }
}

checkSpeedLimit(speed);
