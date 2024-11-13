// singletone , / constructor 
const tinder = new Object()
// const tinder1 = {}

tinder.id ="123asdf"
tinder.name = "priyanshu"
tinder.Islogged = false
console.log(tinder);


const regularuser ={
    email : "adityakumar@gmail.com",
    fullname : {
        userfullname : {
            firstname : "priyanshu",
            lastname : "kashayp"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

// array merge in object merge 

const obj1 ={1: "a",2:"b"}
const obj2 ={3: "a",4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);


