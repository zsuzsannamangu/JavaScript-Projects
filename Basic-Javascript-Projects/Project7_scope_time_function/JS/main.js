var c = 5;
var d = 4;

function Subtraction () {
    var subtract = c - d;
    document.getElementById("subtract_Numbers").innerHTML = "5 - 4 is " + subtract;
}

function Addition() {
    var a = 2;
    var b = 2;
    var add = a + b + c;
    document.getElementById("add_Numbers").innerHTML = "2 + 2 + 5 is " + add;
}

function Multiplication() {
    var multiply = a * c;
    document.getElementById("multiply_Numbers").innerHTML = "2 * 5 is " + multiply;
}

document.write(new Date());

function getDate() {
    if (new Date().getHours() < 16) {
    document.getElementById("hours").innerHTML = "Good afternoon!";
    }
}

function ifStatement() {
    if (10 > 5); {
    document.getElementById("if").innerHTML = "correct";
    }
}

function age_Function() {
    Age = document.getElementById("input_Age").value;
    if (Age>=18) {
        Vote = "You are old enough to vote.";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("age").innerHTML = Vote;
}

function Time_function() {
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
    document.getElementById("Time_of_day").innerHTML = Reply;
}