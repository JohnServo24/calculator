// Functions for math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function to operate on the math problems
const operate = (a, b, op) => {
    const result = add(a, b) ? op === "+" :
                subtract(a, b) ? op === "-" :
                multiply(a, b) ? op === "*" :
                divide(a, b) ? op === "/" :
                "OPERATOR ERROR";

    return result;
}

const clearResults = result => {
    result.removeChild(result.firstChild);
};

const buttons = document.getElementById("buttons");
const pad = buttons.querySelectorAll("button");

const topResult = document.getElementById("top");
const bottomResult = document.getElementById("bottom");

let op = "";
let displayValue = "";
pad.forEach(item => {
    item.addEventListener("click", () => {
        if(item.id >= "0" && item.id <= "9") {
            bottomResult.textContent += item.id;
        } else if(item.id == "add" || item.id == "subtr" || item.id == "mult" || item.id == "divide") {
            op = item.id;
            displayValue = bottomResult.textContent;
            topResult.textContent = `${displayValue} ${item.textContent}`;
            clearResults(bottomResult);
        }
    });
});


// Get inputs from user
// If user inputs numbers, collect it and store it and output it
// If user inputs operators 
    // collect it
    // output the prev. input on top with the operator
    // Collect input again but store it in a different variable
        // Clear the previous output after inputting the new number
// When user inputs =, then show result