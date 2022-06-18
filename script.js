// NOT CLEAN YET WILL FIX LATER LMAO
/*
    > Code is not "functionized"
    > When tapping on operators multiple times, it operates on the current number
        > If there is an active operator, it must not operate on the current number
        > It must change from the old operator to the operator tapped
*/


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
            if (flag == 1) bottomResult.textContent = ""; // Clears the bottom when inputting new number
            flag = 0;
            bottomResult.textContent += item.textContent;
        // Checks if the button tapped is an operator
        } else if(item.id == "add" || item.id == "subtr" || item.id == "mult" || item.id == "divide") {
            if(!bottomResult.textContent) return; // If there are no inputs yet, ignore
            // If the user wants to continue operating without pressing =
            else if(displayValue) bottomResult.textContent = operate(displayValue, bottomResult.textContent, op);
            displayValue = bottomResult.textContent;
            op = item.id;
            topResult.textContent = `${bottomResult.textContent} ${item.textContent}`;
            flag = 1;
        // Checks if the button tapped is equals
        } else if(item.id == "equals") {
            // If the user didn't enter anything/entered an incomplete sequence
            if(displayValue == "" && bottomResult.textContent == "") {
                bottomResult.textContent = "Enter numbers pls";
                flag = 1;
                return;
            } else if(displayValue == "") {
                bottomResult.textContent = "Syntax Error";
                flag = 1;
                return;
            }
            const value = operate(displayValue, bottomResult.textContent, op);

            // If the user divides by 0
            if(value == "Infinity") {
                bottomResult.textContent = "lmao";
                flag = 1;
            } else bottomResult.textContent = value;
            
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