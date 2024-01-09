// const buttons = document.querySelectorAll(".class")
//make variables for all buttons?
//to enter ten's possibly multiply num enterd by ten then add second num pressed.

const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById("display")
// console.log(buttonsArray)
var currentNum = 0
display.textContent = 0
var decimal = false

function clicked()
{
    const buttonValue = event.target.textContent;
    if (!isNaN(buttonValue) || buttonValue === ".")
    {
        // console.log ("button clicked:", buttonValue)
        if(currentNum != 0)
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
            currentNum=0
            display.textContent = currentNum
        }
    }
}

function divide()
{

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