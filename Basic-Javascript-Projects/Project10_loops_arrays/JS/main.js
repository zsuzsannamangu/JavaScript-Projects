function Call_Loop() {
    var X = ""; //empty variable as this is the result
    var Y = 1; //initial value of Y is 1
    while (Y < 11) { //as long as Y is less than 11. While loop is used vs for loop when the number of iterations (repetitions) is unknown
        X += "<br>" + Y; //as long as Y is less than 11, execute this code: X = X + "<br>"" + Y, so we add Y to X. <br> means new line
        Y++; //as long as Y is less than 11, also execute this line of code: Y = Y + 1
    }
    document.getElementById("Loop").innerHTML= X;
}

//syntax of while loop:
//while ([condition]) {
    //[loop]
//}

let text = "Hello";
let length = text.length; //The length property returns the length of a string
document.getElementById("string_Length").innerHTML = length;

var Instruments = ["Guitar", "Bass", "Ukulele", "Drum", "Chello"]; //"Guitar" is at index 0 with a value of "Guitar"
var X = "";
var Y;

function for_Loop() { //For loop is used when the number of iterations (repetitions) is known
    for (Y = 0; Y < Instruments.length; Y++) {
        X += Instruments[Y] + "<br>";
    }
    document.getElementById("Lists_of_Instruments").innerHTML = X;
}

//syntax of for loop:
//for ([initialization]; [condition]; [iteration]) {
    //[loop]
//}

function array_Function() {
    var Cats = [];
    Cats[0] = "eating";
    Cats[1] = "sleeping";
    Cats[2] = "purring";
    Cats[3] = "sitting";

    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cats[1] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "brown";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

var X = 5; //it wouldn't work to use let here, I'd get an error message that X has already been defined
function subtraction() {
    let Y = 4;
    let Z = X - Y;
    document.getElementById("subtract").innerHTML = Z;
}

function new_Subtraction() {
    let Y = 9;
    let Z = X - Y;
    document.getElementById("new_subtract").innerHTML = Z;
}

document.getElementById("multiply").innerHTML = Multiplication(2, 3);

function Multiplication(a, b) {
    return a * b;
}

document.getElementById("names").innerHTML = Naming("Lili");

function Naming(firstname) {
    return "Hello " + firstname;
}

let plant = { //Object with properties and a method
    name : "Philodendron",
    type: "Congo",
    pot_Type: "ceramic",
    light: "sunny",
    description: function() { //this is always function(), you can't name it something else
        return "This plant is a " + this.name + " " + this.type + " in a " + this.pot_Type + " pot."; //return statement and this keyword to be able to perform the method on the object defined above
        }
};
document.getElementById("Plant_Object").innerHTML = plant.description();


//break statement can be used to jump out of a loop
//continue statement can be used to jump over one iteration in the loop

let sentence = "";
for (let i = 0; i < 10; i++) { //we start with i being zero, keep looping, as long as i is less than 10, add 1 to i
    if (i === 3) { break; } //however if i equals 3, jump out of the loop
    sentence += "The number is " + i + "<br>";

    document.getElementById("break").innerHTML = sentence;
}

let next_sentence = "";
for (let i = 0; i < 10; i++) {
    if (i === 4) { continue; } //when i = 4, skip that and continue the loop with the next one
    next_sentence = next_sentence + "The number is " + i + "<br>" + ".";

    document.getElementById("continue").innerHTML = next_sentence;
}

