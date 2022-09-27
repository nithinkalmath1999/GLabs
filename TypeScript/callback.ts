setTimeout(function(){
    console.log("timer");
},5000);

function z(y){
    console.log("z");
    y();
}

z(function y(){
    console.log("y");
});