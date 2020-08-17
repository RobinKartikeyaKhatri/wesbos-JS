// const p = document.querySelector("p");
// // console.log(p);

// const divs = document.querySelectorAll("div");
// // console.log(divs);

// const article = document.querySelector("article.item");
// // console.log(article);

// const item = document.querySelectorAll(".item img");
// // console.log(item);

// const heading = document.querySelector("h2");
// console.log(heading.textContent);
// console.log(heading.innerText);

// // Set the textContent property on that element
// // heading.textContent = "Wes is cool";
// // console.log(heading.textContent);
// // console.log(heading.innerText);


// console.log(heading.innerHTML);
// console.log(heading.outerHTML);


// const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList);

// // pizzaList.textContent += "🍕";
// pizzaList.insertAdjacentText("afterbegin", "🍕");




// Classes!
const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
pic.classList.toggle("round");
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);