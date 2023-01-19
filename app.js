const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumuCalculation

function calculate(button) {
    const value = button.textContent
    if (value == "CLEAR") {
        calculation = []
        screenDisplay.textContent = ' . '
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumuCalculation)
    } else {
        calculation.push(value)
        accumuCalculation = calculation.join('')
        screenDisplay.textContent = accumuCalculation
    }
    

    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))