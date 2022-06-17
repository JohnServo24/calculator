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

const result = document.getElementById("result")
const pad = document.getElementById("buttons");
const padContents = pad.querySelectorAll("button");

let val1 = "";
let val2 = "";
padContents.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id === "clear") {
            clearResults(result);
            return;
        } else if (item.id >= "0" && item.id <= "9") {
            result.textContent += item.id;
            val1 = result.textContent;
        } else if (item.id === "delete") {
            result.textContent = result.textContent.slice(0, result.textContent.length - 1);
        } else {
            
        }
            
    });
});