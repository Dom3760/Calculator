// const buttons = document.querySelectorAll(".class")
//make variables for all buttons?
//to enter ten's possibly multiply num enterd by ten then add second num pressed.

//declaring all of the variables to make buttons work properly

const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById("display")

var currentNum = 0
var newNum = 0
display.textContent = 0

//used booleans to make sure buttons; oporators work.
var decimal = false
var operator = false
var add = false
var subtract = false
var multiply = false
var divide = false
var equal = false

//this function checks if the buttons were pushed and if so, it will launch this
function clicked()
{
    //if number is entered before operator is picked then this will change value.
    if (operator === false)
    {
        const buttonValue = event.target.textContent;
        // if the button pushed is a number or is a decimal point then it will launch this
        if (!isNaN(buttonValue) || buttonValue === ".")
        {
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
            //otherwise it will launch this.
        }else
        {
            // if it is any of the operations then it will change the oporator to the one clicked.
            if(buttonValue === "/")
            {
                dividef()
                divide = true

                multiply = false
                subtract = false
                add = false
            }
            else if(buttonValue === "*")
            {
                multiplyf()
                multiply = true

                divide = false
                subtract = false
                add = false
            }
            else if(buttonValue === "-")
            {
                subtractf()
                subtract = true

                divide = false
                multiply = false
                add = false
            }
            else if(buttonValue === "+")
            {
                addf()
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
                operator = false
                display.textContent = currentNum
            }
        }
    }
    //if the oporator is active then it will add the buttons pressed to the second number.
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
            if(buttonValue === "/")
            {
                dividef()
                divide = true

                multiply = false
                subtract = false
                add = false
            }
            else if(buttonValue === "*")
            {
                multiplyf()
                multiply = true

                divide = false
                subtract = false
                add = false
            }
            else if(buttonValue === "-")
            {
                subtractf()
                subtract = true

                divide = false
                multiply = false
                add = false
            }
            else if(buttonValue === "+")
            {
                addf()
                add = true

                divide = false
                multiply = false
                subtract = false
            }
            else if(buttonValue === "=")
            {
                equal = true
                answerf()
                newNum = 0
                buttons[3,7,11,15].style.backgroundColor = "orange";
            }
            else
            {
                newNum = 0 
                currentNum = 0
                decimal = false
                operator = false
                display.textContent = newNum
         
            }   
        }
    }
}
// divide function that will change oporator to true and change the background color and change the display.
function dividef()
{
    display.innerText = newNum
    buttons[3].style.backgroundColor = "rgb(255, 195, 122)";
    operator = true

    buttons[7,11,15].style.backgroundColor = "orange";
}
function multiplyf()
{
    display.innerText = newNum
    buttons[7].style.backgroundColor = "rgb(255, 195, 122)";
    operator = true

    buttons[3,11,15].style.backgroundColor = "orange";
}
function subtractf()
{
    display.innerText = newNum
    buttons[11].style.backgroundColor = "rgb(255, 195, 122)";
    operator = true

    buttons[3,7,15].style.backgroundColor = "orange";
}
function addf()
{
    display.innerText = newNum
    buttons[15].style.backgroundColor = "rgb(255, 195, 122)";
    operator = true

    buttons[3,7,11].style.backgroundColor = "orange";
}

//if the answer button is presses while oporator is active it will do the calculation
function answerf ()
{
    if (add && equal === true)
    {
        currentNum = parseFloat(currentNum)+ parseFloat(newNum)
        display.innerText = currentNum

        divide = false
        multiply = false
        subtract = false
        add = false

        buttons[3,7,11,15].style.backgroundColor = "orange";
    }
    if (subtract && equal === true)
    {
        currentNum = parseFloat(currentNum)- parseFloat(newNum)
        display.innerText = currentNum  
        
        divide = false
        multiply = false
        subtract = false
        add = false

        buttons[3,7,11,15].style.backgroundColor = "orange";
    }
    if (multiply && equal === true)
    {
        currentNum = parseFloat(currentNum)* parseFloat(newNum)
        display.innerText = currentNum

        divide = false
        multiply = false
        subtract = false
        add = false

        buttons[3,7,11,15].style.backgroundColor = "orange";
    }
    if (divide && equal === true)
    {
        if (newNum === 0)
        {
            display.textContent = "Error"
        }
        else
        {
            currentNum = parseFloat(currentNum)/ parseFloat(newNum)
            display.innerText = currentNum
    
            divide = false
            multiply = false
            subtract = false
            add = false
    
            buttons[3,7,11,15].style.backgroundColor = "orange";
        }
    }
    //if anything happens it will display error
    else
    {
        display.textContent = "Error"
    }
}

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", clicked);
});