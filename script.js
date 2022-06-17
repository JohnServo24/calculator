// Functions for math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function to operate on the math problems
const operate = (a, b, op) => {
    a = parseInt(a);
    b = parseInt(b);
    const result = op === "add" ?  add(a, b):
                op === "subtr" ?  subtract(a, b):
                op === "mult" ?  multiply(a, b):
                op === "divide" ? divide(a, b):
                "OPERATOR ERROR";
    return result;
}

const buttons = document.getElementById("buttons");
const pad = buttons.querySelectorAll("button");

const topResult = document.getElementById("top");
const bottomResult = document.getElementById("bottom");

let op = "";
let displayValue = "";
let flag = 0;

pad.forEach(item => {
    item.addEventListener("click", () => {
        if(item.id >= "0" && item.id <= "9") {
            if (flag == 1) bottomResult.textContent = "";
            flag = 0;
            bottomResult.textContent += item.id;
        } else if(item.id == "add" || item.id == "subtr" || item.id == "mult" || item.id == "divide") {
            if(!bottomResult.textContent) return;
            else if(displayValue) bottomResult.textContent = operate(displayValue, bottomResult.textContent, op);

            displayValue = bottomResult.textContent;
            op = item.id;
            topResult.textContent = `${bottomResult.textContent} ${item.textContent}`;
            flag = 1;
        } else if(item.id == "equals") {
            bottomResult.textContent = operate(displayValue, bottomResult.textContent, op);
            topResult.textContent = "";
            displayValue = "";
        } else if(item.id == "clear") {
            bottomResult.textContent = "";
            topResult.textContent = "";
            displayValue = "";
        }
    });
});


// Get inputs from user
// If user taps numbers use textContent to output it
// If user taps operators 
    // Store the textContent into a variable
    // Display the current value + operator
    // Ask user for numbers again
// When user taps = then calculate textContent and the var of prev. text content
    // Then output it
// If user taps on a number, clear everything and start anew
    // Else if user taps on an operator continue