// first class citizens

// Normal function declaration (Hoisted)
// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// Anonymous function declaration
// function (firstName) {
//     return `Dr. ${firstName}`; 
// }

// Function expression (Doesn't Hoisted)
// const sayHello = function(name) {
//     return `Hello, ${name}`;
// }

// Arrow functions
// const sayHello = (name, age) => `Hello ${name} you are ${age} years old!`;

// const greet = sayHello("Robin", 100);
// console.log(greet);

// const add = (a, b = 3) => a + b;
// console.log(add(1));


// Returning an Object
// function makeABaby(first, lastname) {
//     const baby = {
//         name: `${first} ${lastname}`,
//         age: 100
//     }
//     return baby;
// }

// const makeABaby = (first, lastname) => {
//     return {
//         name: `${first} ${lastname}`,
//         age: 101
//     }
// }

// If you are trying to return an object but doesn't want to use 'return' key word than use () to wrap your object

// const makeABaby = (first, lastname) =>  ({name: `${first} ${lastname}`, age: 101});
// console.log(makeABaby("Rohit", "Khatri"));



// Immediately Invoked Function Expressions (IIFE)
// (function sayHello() {
//     console.log("Hello everyone");
// })();



// Methods (Do not arrow functions inside Methods because it doesn't apply 'this' functionality)
// const person = {
//     name: "Rahul",
//     age: 47,
//     job: "Senior Manager",
//     summary: function() {
//         return `Hello ${this.name} your job title is ${this.job}, and you are ${this.age} years old.`
//     },
//     summary2() {
//         return `Hello ${this.name} your job title is ${this.job}, and you are ${this.age} years old.`
//     }
// }

// console.log(person.summary());
// console.log(person.summary2());



// Callback Functions
    // click callback
const button = document.querySelector(".clickMe").addEventListener("click", () => {
    console.log("You clicked the button");
});

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setInterval(() => {
//     console.log("Am execute after every 3 seconds");
// });