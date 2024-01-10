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
            }
            else if(buttonValue === "*")
            {
                multiply()
            }
            else if(buttonValue === "-")
            {
                subtract()
            }
            else if(buttonValue === "+")
            {
                add()
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
                divide()
            }
            else if(buttonValue === "*")
            {
                multiply()
            }
            else if(buttonValue === "-")
            {
                subtract()
            }
            else if(buttonValue === "+")
            {
                add()
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

}
function multiply()
{

}
function subtract()
{

}
function add()
{

}

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", clicked);
});