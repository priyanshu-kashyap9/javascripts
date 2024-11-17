// normal way represent 
let a =20
const b =30
var c = 50
console.log(a);
console.log(b);
console.log(c);

// scope way respresentaion 

if(true){
    let a =10
    const b = 50
    var c = 100
}
console.log("this function is excecute by global variable use it  ",a); 
console.log("this function is excecute by global variable use it  ",b);
console.log("this function is excecute by local  variable use it  ",c);
