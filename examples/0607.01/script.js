const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

let output = "";

function calculate (buttonValue) {
    if(buttonValue == "=" && output !== "") {
        output = eval(output)
    } else if (buttonValue == "C") {
        output = ""
    } else if (buttonValue == "+/-") {
        output = eval(output) * -1
    } else if (buttonValue == "del") {
    
    } else {
        output += buttonValue
    }
    display.value = output
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.dataset.value);
        
        calculate(e.target.dataset.value)
    })
})