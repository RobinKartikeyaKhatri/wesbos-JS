/* You can access variables defined in that scope or in any parent/ancestors scope */
/* let and const variables are based on block scoped, whereas var based variables are function scoped */

// const firstName = "Robin"; // doesn't attached to window scope but still in global scope
// let second = "Khatri"; // doesn't attached to window scope but still in global scope
// var age = 32; // attached to window scope and still in global scope

// Never use var based variables in JS. Use const based variables if you never re-assign a value to it, use let if you want to re-assign.

// Available in global scope and still available in window scope(window.sayHi())
// function sayHi() {
//     console.log("Hi!!!");
// }


// const age = 100;

// function go() {
//     const hair = "blonde";
//     console.log(age);
// }

// go();

// console.log(age);
// console.log(hair);


// if (1 === 1) {
    // var cool = true; // Allowed, because var is function scoped
    // let cool = true; // Not allowed, because let is block scoped
    // const cool = true; // Not allowed, because const is block scoped
// }

// console.log(cool);


const dog = "snickers";

function logDog() {
    console.log(dog);
}

function go() {
    const dog = "sunny";
    logDog();
}

go();