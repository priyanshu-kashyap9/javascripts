function calculatecartprize(...num1){
    return num1
}
console.log(calculatecartprize(200,8.00,578,900,458));

// case two how the value use 

function calculatecartprize1(val1 , val2 , ...num2){
    return num2
}
console.log(calculatecartprize1(200,8.00,578,900,458));

// object 

const user ={
    username :"priyanshu kashyap",
    prize : 500
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and the meeting prize for user is ${anyobject.prize}`);
    
}
handelobject(user)

// Array 
const mynewarray =[200,500,800,700]
function returnsecondvaliue(getarrray){
    return getarrray[2]
}
console.log(returnsecondvaliue(mynewarray));


