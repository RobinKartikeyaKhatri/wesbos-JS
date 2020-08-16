// Hoisting - Run a function before it exists(run a function before it defined)


sayHi();

function sayHi() {
    console.log("Hi!!!");
    console.log(add(10,2));
}

function add(a,  b) {
    return a + b;
}




sayHello();

/* Arrow functions and function expressions are not hoisted, but regular (normal function declarations) functions are hoisted. */

const sayHello = () => {
    console.log("Hello everyone");
}