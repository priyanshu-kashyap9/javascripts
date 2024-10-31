// stack is primitive data types 

let myname ="PRIYANSHU"
let fullname = "PRIYANSHU KASHYAP"
console.log(myname);
console.log(fullname);

// HEAP IS THE NON-PRIMITIVE DATA TYPES 

let userOne ={
    email :"priyanshu@gmail.com",
    upi : "ram@ybl"
}

let userTwo = userOne
userTwo.email = "kashyap@google.com"
console.log(userOne.email);

console.log(userTwo.email);
