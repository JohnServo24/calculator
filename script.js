// Functions for math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function to operate on the math problems
const operate = (a, b, op) => {
    a = parseFloat(a);
    b = parseFloat(b);
    const result = op === "add" ?  add(a, b):
                op === "subtr" ?  subtract(a, b):
                op === "mult" ?  multiply(a, b):
                op === "divide" ? divide(a, b):
                "OPERATOR ERROR";
    return result;
}

// Selects the pad
const buttons = document.getElementById("buttons");
const pad = buttons.querySelectorAll("button");

// Selects the results pane
const topResult = document.getElementById("top");
const bottomResult = document.getElementById("bottom");

let op = ""; // Stores the operators
let displayValue = ""; // Stores the display values
let flag = 0; // Stores the flag for clearing the screen after operations

pad.forEach(item => {
    item.addEventListener("click", () => {
        // Checks if the button tapped is a number
        if(item.id >= "0" && item.id <= "9" || item.id == "dot") {
            if (flag == 1) bottomResult.textContent = "";
            flag = 0;
            bottomResult.textContent += item.textContent;
        // Checks if the button tapped is an operator
        } else if(item.id == "add" || item.id == "subtr" || item.id == "mult" || item.id == "divide") {
            if(!bottomResult.textContent) return;
            else if(displayValue) bottomResult.textContent = operate(displayValue, bottomResult.textContent, op);
            displayValue = bottomResult.textContent;
            op = item.id;
            topResult.textContent = `${bottomResult.textContent} ${item.textContent}`;
            flag = 1;
        // Checks if the button tapped is equals
        } else if(item.id == "equals") {
            if(displayValue == "" || bottomResult.textContent == "") {
                bottomResult.textContent = "Syntax Error";
                flag = 1;
                return;
            }
            const value = operate(displayValue, bottomResult.textContent, op);

            if(value == "Infinity") {
                bottomResult.textContent = "lmao";
                flag = 1;
            }
            else bottomResult.textContent = value;
            
            topResult.textContent = "";
            displayValue = "";
        // Checks if the button tapped is clear
        } else if(item.id == "clear") {
            bottomResult.textContent = "";
            topResult.textContent = "";
            displayValue = "";
        // Checks if the button tapped is delete
        } else if(item.id == "delete") {
            bottomResult.textContent = bottomResult.textContent.slice(0, bottomResult.textContent.length - 1);
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