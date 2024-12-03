//  Immediately Invoked Function Expression

//First paraenthesis is for function definition
//Second paraenthesis is for function invocation or calling
//()()

(function chai(){
    // named IIFE
    console.log(`DB is connected`);
})();

( (name) => {
    // uanmed IIFE
    console.log(`DB2 is connected ${name}`);
})('Meraj');