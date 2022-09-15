let a = prompt('Enter the string');
let b = prompt('Enter the string');
let ch = a.charAt(0);
console.log(ch);
while(a.length)
{
    a[0]=a[1];
    a[1]=a[2];
    a[2]=ch;
    a.length--;
}
a[a.length-1]=ch;

alert (a);
