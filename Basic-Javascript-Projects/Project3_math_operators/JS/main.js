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
    document.getElementById("Modulus").innerHTML = "When you divide 45 by 6, you have a remainder of: " + simple_Math;
}
