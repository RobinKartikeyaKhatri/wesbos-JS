console.log(Math.max(1, 3, 51, 70, 32, 567));
console.log(Math.min(1, 3, 51, 70, 32, 567));
console.log(Math.min(1, 3, 51, 70, 32, 567, -20));

console.log(parseFloat("20.34123"));
console.log(parseInt("20.34123"));

const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());

const name = "Robin";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length); // property

const p = document.querySelector("p");
p.addEventListener("click", () => {
    console.log("You clicked me!!");
});