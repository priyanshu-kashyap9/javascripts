// in the code we study about the topic is array in javascript 

// Array :- The array object as with array is other position 

const myArr = [1,8,7,5,4,6,8]
console.log(myArr);

// Array method use some example 
myArr.push(2)
console.log(myArr);

// any one use the code than coment out first than run the code

myArr.pop()
console.log(myArr);

// unshift method 

myArr.unshift(2)
console.log(myArr);

// shift method 

myArr.shift()
console.log(myArr);

// includes method 

console.log(myArr.includes(10));

// indexof method 
console.log(myArr.indexOf(10));

// some method 

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice method use below the code 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myArr);
console.log(myn1);

// splice method use below the code 

console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myArr);
console.log(myn2);

