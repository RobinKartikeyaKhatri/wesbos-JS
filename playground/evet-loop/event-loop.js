// console.log("Starting");

// setTimeout(function() {
//     console.log("Running");
// }, 2000);

// console.log("Ending");


const go = document.querySelector(".go");
go.addEventListener("click", function(e) {
    const element = e.target;

    // 1. Change the text to Go when clicked
    element.textContent = "Go";
   
    // 2. Make it a circle after 2 seconds 
    setTimeout(function() {
        element.classList.add("circle");
        
        // 3. Make it red after 0.5s
        setTimeout(function() {
            element.classList.add("red");

            // 4. make it square after 0.25s
            setTimeout(function() {
                element.classList.remove("circle");

                // 5. make it purple after 0.3s
                setTimeout(function() {
                    element.classList.remove("red");
                    element.classList.add("purple");
                    // 6. fade out after 0.5s
                    setTimeout(function() {
                        element.classList.add("fadeOut");
                    }, 500);
                }, 300);
            }, 250);
        }, 500);
    }, 2000);
}); 
// 7. finish