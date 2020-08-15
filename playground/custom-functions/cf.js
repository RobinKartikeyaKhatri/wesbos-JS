function calculateBill(billAmount, taxRate) {
    console.log("Running Calculate Bill");
    const total = billAmount * (1 + taxRate);
    return total;
}

// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);

// console.log(`Your total is $${Math.round(myTotal)}`);
// console.log(`Your total is $${Math.round(myTotal2)}`);



// function sayHiTo(firstName) {
//     return `Hello ${firstName}`;
// }

// const greeting = sayHiTo("Robin");
// console.log(greeting);


// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);
// console.log(myTotal3);


function doctorize(name = "Wes") {
    return `Dr. ${name}`;
}

function yell(name = "Wes") {
    return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize()));