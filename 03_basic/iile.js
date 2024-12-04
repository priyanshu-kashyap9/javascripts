// Immediately Invoked Function Expressions (IIFE) 
(function chai(){
    console.log(`DB CONNECTED`);
    
})();

(function aurcode(){
    console.log(`DB CONNECT TWO `);
    
})();

( (name) => {
    console.log(`DB CONNECT TO ${name}`);
    
})(`priyanshu kashyap`)