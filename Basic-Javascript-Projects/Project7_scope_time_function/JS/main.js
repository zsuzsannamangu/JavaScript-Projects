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

