// Topic is Date in js

/* Date :- Date is object represent a single movement in time platform independent 
        formate . the date is calculated jan 1 1970 ,UTC(the epoch) */

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());

let mycreateddate = new Date(2024,10,3)
console.log(mycreateddate);
console.log(mycreateddate.toDateString());
let Mycreateddate = new Date("2024-11-3")
console.log(Mycreateddate.toLocaleDateString());

// Time stamp read the another part in the code is called the time . 

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(mycreateddate.getDate());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date(2000,8,25,)
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('defult',{weekday : "long"})


