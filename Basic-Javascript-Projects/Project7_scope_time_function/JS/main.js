var c = 5; //global variables
var d = 4;

function Subtraction () {
    var subtract = c - d;
    document.getElementById("subtract_Numbers").innerHTML = "5 - 4 is " + subtract;
}

function Addition() {
    var a = 2; // a and b are local variables
    var b = 2;
    var add = a + b + c;
    document.getElementById("add_Numbers").innerHTML = "2 + 2 + 5 is " + add;
}

function Multiplication() {
    var multiply = a * c; //a is a local variable in another function so it can't be used in this function, I used DevTools for debugging
    document.getElementById("multiply_Numbers").innerHTML = "2 * 5 is " + multiply;
}

document.write(new Date());

function getDate() {
    if (new Date().getHours() < 16) { //new Date() is a built in function that displays the date, .getHours() displays the hours passed, 
        //13 means it's between 1-2pm
    document.getElementById("hours").innerHTML = "Good afternoon!";
    }
}

function ifStatement() {
    if (10 > 5); {
    document.getElementById("if").innerHTML = "correct"; //if statement = if 10 > 5, write correct
    }
}

function age_Function() {
    Age = document.getElementById("input_Age").value; //if and else statements = depending on user input, display one or the other message
    if (Age>=18) {
        Vote = "You are old enough to vote.";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("age").innerHTML = Vote;
}

function Time_function() { //if, else if, and else statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // == means AND
        Reply = "It is morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //depending on the current time, it will display the correct message
}