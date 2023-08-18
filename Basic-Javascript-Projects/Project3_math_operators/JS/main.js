function Addition() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML="2 + 2 = " + addition;
}

function Multiplication() {
    var multiply = 2 * 2;
    document.getElementById("Next").innerHTML="2 * 2 = " + multiply;
}

function Subtraction() {
    var subtractnumbers = 5 - 3;
    document.getElementById("Subtract").innerHTML="5 - 3 = " + subtractnumbers;
}

function Division() {
    var dividenumbers = 6 / 3;
    document.getElementById("Divide").innerHTML="6 / 3 = " + dividenumbers;
}

function moreOperations() {
    var morenumbers = (3-2) + 1 / 2 * 2;
    document.getElementById("More").innerHTML="3 minus 2, plus 1, divided by 2, times 2 equals " + morenumbers;
}

function modulusOperator() {
    var simple_Math = 45 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 45 by 6, you have a remainder of: " + simple_Math; //returns the remainder
}

function negationOperator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = "The negative of 10 is " + -x; //returns the opposite or negative of x
}

function incrementOperator() {
    var a = 10;
    a++;
    document.getElementById("Increment").innerHTML = "10 + 1 is " + a; //a++ adds one
}

function decrementOperator() {
    var b = 5;
    b--;
    document.getElementById("Decrement").innerHTML = "5 - 1 is " + b; //b-- subtracts one
}

window.alert(Math.random()); //returns a random number between 0 and 1

window.alert(Math.random() * 200); //returns a random number between 0 and 200

function math_Object() {
    document.getElementById("mathObject").innerHTML = Math.trunc(2.111); //returns integer part of x number
}