//Creates an object to keep track of values.
//Curly brackets ‘{ }’ are used to destructure the JavaScript Object properties.
const Calculator = {
    //this will display 0 on the calculator screen.
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    //this checks whether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //This will hold the operator, we set it to null for now. Null means the absense of a value.
    //You assign null to a variable with the intention that currently this variable 
    //does not have any value but it will have later on. It is like a placeholder for a value.
    operator: null,
};

//This modifies values each time a button is clicked on
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        //this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it.
        //The ? operator is used in conditional statements, and when paired with a :,
        //can function as a compact alternative to if...else statements.
        //Condition ? True : False
        //Condition to test goes before ? 
        //If true, value will be the left side
        //If false, value will be the right side
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't
    //cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not contain a decimal point
        //we want to add a decimal point.
        Calculator.Display_Value += dot;
    } 
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we convert the current number
    //displayed on the screen to a number and then store the result in
    //Calculator.First_Operand if it doesn't already exist
    //parseFloat converts a string to a floating point number
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exists from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //Checks if an operator already exists, so true or false, but the value is returned rather than just true or false
        const Value_Now = First_Operand || 0;
        // this means = if it's true, it equals First_Operand, if not, it equals zero

        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed

        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed (9);
        //When used as a function, Number(value) converts a string or other value to the Number type.
        //toFixed() formats a number to a given length after the decimal point by rounding off to 
        //reduce the length or by adding zeros to increase the length.
        
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand 
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Update_Display() {
    //Makes use of the calculator-screen class to target the
    //input tag in the HTML document
    //The document.querySelector() method returns the first element within a 
    //file that matches the selector specified.
    //document.querySelector(“p”) would return 
    //the first paragraph element in a document.
    //.calculator-screen is the input part
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();

//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
//The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second
//argument to be called whenever the described event gets fired. 
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element that was clicked.
    const { target } = event;
    //If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    //The classList property returns the CSS classnames of an element. 'operator' is an HTML class
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
        ///.value returns an array containing all the enumerable property values of the given object
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})