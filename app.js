// elements
const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");

let firstNumber = null;
let currentNumber = "";
let operator = null;


//events
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const target = event.target;
        const value = target.innerText;
        
        switch (target.id) {
            case "clean":
                firstNumber = null;
                currentNumber = "";
                operator = null;
                display.innerText = "";
                break;
            case "plus-minus":
                display.innerText = parseFloat(display.innerText) * -1;
                break; 
            case "percentage":
                display.innerText = parseFloat(display.innerText) / 100;
                break;
            case "plus":
            case "minus":
            case "divide":
            case "times":
                operator = value;
                firstNumber = parseFloat(display.innerText);
                console.log(firstNumber)
                currentNumber = "";
                break;
            case "equals":
                if(operator) {
                    const secondNumber = parseFloat(display.innerText);
                    if(operator == "+") {
                        display.innerText = firstNumber + secondNumber;
                    } else if(operator == "−") {
                        display.innerText = firstNumber - secondNumber;
                    } else if(operator == "÷") {
                        display.innerText = firstNumber / secondNumber;
                    } else if(operator == "×") {
                        display.innerText = firstNumber * secondNumber;
                    }

                    if(display.innerText % 1 != 0) {
                        display.innerText = Number(display.innerText).toFixed(2);
                    }
                    
                }
                break;
            default:
                currentNumber += value;
                display.innerText = currentNumber;
                break;
        }
    })
})
