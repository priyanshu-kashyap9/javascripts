// object use in javascript in  the part 1 

// the object is the two types 1.singleton 2.object literals 

// object liteals 

const mySym = Symbol["key1"]


const jsuser = {name : "priyanshu kashyap",
                "full name" : "mr priyanshu kashyap ",
                [mySym] : "mykey1",
                age : 18,
                location : "bihar",
                email : "priyanshu.@gmail.com"
                
}

console.log(jsuser.email);
console.log(jsuser["age"]);

// console.log(jsuser,full name);    (this method is worng to acees the object using )

console.log(jsuser["full name"]);     /* this is right method to acess the object */

// symbol function is use in below 

console.log(jsuser[mySym]);

// function is use in the object 

jsuser.gretting = function() {
    console.log("hello js user");  
}

console.log(jsuser.gretting());

// second example in the function 

jsuser.grettingTwo = function() {
    console.log(`hello ${this.name}  js user`);  
}

console.log(jsuser.grettingTwo());

// NOTE :- this file at acualy use in acess by dot but some case we acess by [] this function use it 