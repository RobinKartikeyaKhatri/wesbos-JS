const people = [
    { name: "Wes", cool: true, country: "Canada" },
    { name: "Scott", cool: true, country: "Merica" },
    { name: "Snickers", cool: false, country: "Dog Country" }
];

people.forEach((person) => {
    console.log(person.name);
});


// Console Method


// Callstack, Stack Trace


// Grabbing Elements


// Breakpoints


// Scope



// Network Requests



// Break On Attributes



// SOme Setup Code


function doALotOfStuff() {
    console.group("Doing some stuff");
    console.log("Hey I am one");
    console.warn("Watch out");
    console.error("hey");
    console.groupEnd("Doing some stuff");
}

function doctorize(name) {
    // console.count("running Doctorize");
    return `Dr. ${name}`;
}

// doctorize("Robin");


function greet(name) {
    doesntExist(); // Cause an error
    return `Hello ${name}`;
};



function go() {
    const name = doctorize(greet("wes"));
    console.log(name);
}



const button = document.querySelector(".bigger");
button.addEventListener("click", function(e) {
    const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});



// A dad joke fetch
async function fetchDadJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain"
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}