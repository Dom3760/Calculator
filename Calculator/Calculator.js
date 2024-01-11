// const buttons = document.querySelectorAll(".class")
//make variables for all buttons?
//to enter ten's possibly multiply num enterd by ten then add second num pressed.

const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById("display")
// console.log(buttonsArray)
var currentNum = 0
var newNum = 0
display.textContent = 0
var decimal = false
var operater = false

var add = false
var subtract = false
var multiply = false
var divide = false
var equal = false

function clicked()
{
    if (operater === false)
    {
        const buttonValue = event.target.textContent;
        if (!isNaN(buttonValue) || buttonValue === ".")
        {
            // console.log ("button clicked:", buttonValue)
            if(!isNaN(buttonValue))
            {
                if(decimal === false)
                {   
                currentNum = parseFloat(currentNum * 10) + parseFloat(buttonValue)
                }else{
                    currentNum += buttonValue
                    display.textContent = currentNum;
                }
                display.textContent = currentNum;
            }
            else if (buttonValue === ".")
            {
                decimal = true
                currentNum += "."
                display.textContent = currentNum
            }else
            {
                currentNum = parseFloat(buttonValue)
                display.textContent = currentNum;
            }
        }else
        {
            // console.log("button clicked:", buttonValue)
            if(buttonValue === "/")
            {
                divide()
                divide = true

                multiply = false
                subtract = false
                add = false
            }
            else if(buttonValue === "*")
            {
                multiply()
                multiply = true

                divide = false
                subtract = false
                add = false
            }
            else if(buttonValue === "-")
            {
                subtract()
                subtract = true

                divide = false
                multiply = false
                add = false
            }
            else if(buttonValue === "+")
            {
                add()
                add = true

                divide = false
                multiply = false
                subtract = false
            }
            else if(buttonValue === "=")
            {
                display.textContent = (currentNum)
            }
            else
            {
                newNum = 0 
                currentNum = 0
                decimal = false
                operater = false
                display.textContent = currentNum
            }
        }
    }
    else
    {
        const buttonValue = event.target.textContent;
        if (!isNaN(buttonValue) || buttonValue === ".")
        {
            // console.log ("button clicked:", buttonValue)
            if(!isNaN(buttonValue))
            {
                if(decimal === false)
                {   
                    newNum = parseFloat(newNum * 10) + parseFloat(buttonValue)
                }else{
                    newNum += buttonValue
                    display.textContent = newNum;
                }
                display.textContent = newNum;
            }
            else if (buttonValue === ".")
            {
                decimal = true
                newNum += "."
                display.textContent = newNum
            }else
            {
                newNum = parseFloat(buttonValue)
                display.textContent = newNum;
            }
        }else
        {
            // console.log("button clicked:", buttonValue)
            if(buttonValue === "/")
            {
                divide = true
            }
            else if(buttonValue === "*")
            {
                multiply = true
            }
            else if(buttonValue === "-")
            {
                subtract = true
            }
            else if(buttonValue === "+")
            {
                add = true
            }
            else if(buttonValue === "=")
            {
                equal = true
                answer()
            }
            else
            {
                newNum = 0 
                currentNum = 0
                decimal = false
                operater = false
                display.textContent = newNum
         
            }   
        }
    }
}

function divide()
{
    display.innerText = newNum
    buttons[3].style.backgroundColor = "rgb(255, 195, 122)";
    operater = true

    buttons[7,11,15].style.backgroundColor = "orange";
}
function multiply()
{
    display.innerText = newNum
    buttons[7].style.backgroundColor = "rgb(255, 195, 122)";
    operater = true

    buttons[3,11,15].style.backgroundColor = "orange";
}
function subtract()
{
    display.innerText = newNum
    buttons[11].style.backgroundColor = "rgb(255, 195, 122)";
    operater = true

    buttons[3,7,15].style.backgroundColor = "orange";
}
function add()
{
    display.innerText = newNum
    buttons[15].style.backgroundColor = "rgb(255, 195, 122)";
    operater = true

    buttons[3,7,11].style.backgroundColor = "orange";
}

function answer ()
{
    if (add && equal === true)
    {
        currentNum = parseFloat(currentNum)+ parseFloat(newNum)
        display.innerText = currentNum
    }
    if (subtract && equal === true)
    {
        currentNum = parseFloat(currentNum)- parseFloat(newNum)
        display.innerText = currentNum   
    }
    if (multiply && equal === true)
    {
        currentNum = parseFloat(currentNum)* parseFloat(newNum)
        display.innerText = currentNum
    }
    if (divide && equal === true)
    {
        currentNum = parseFloat(currentNum)/ parseFloat(newNum)
        display.innerText = currentNum
    }
}

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", clicked);
});