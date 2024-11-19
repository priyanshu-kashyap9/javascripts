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





// ______________________________________******_______________________________________________________***************___________________ 
// nested scope in js 

function one(){
    const username = "priyanshu kashyap"
    function two(){
        const website =" youtube "
        console.log(username);
    }
    // console.log(website);   this line is error because its not valide for nested scope     
    two()
}
one()


// second example 
if (true){
    const username = "priyanshu"
    if(username==="priyanshu "){
        const website = " student"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);  

