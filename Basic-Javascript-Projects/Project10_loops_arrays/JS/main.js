function Call_Loop() {
    var X = ""; //empty variable as this is the result
    var Y = 1; //initial value of Y is 1
    while (Y < 11) { //as long as Y is less than 11
        X += "<br>" + Y; //as long as Y is less than 11, execute this code: X = X + "<br>"" + Y, so we add Y to X. <br> means new line
        Y++; //as long as Y is less than 11, also execute this line of code: Y = Y + 1
    }
    document.getElementById("Loop").innerHTML= X;
}

let text = "Hello";
let length = text.length; //The length property returns the length of a string
document.getElementById("string_Length").innerHTML = length;

var Instruments = ["Guitar", "Bass", "Ukulele", "Drum", "Chello"]; //"Guitar" is at index 0 with a value of "Guitar"
var X = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        X += Instruments[Y] + "<br>";
    }
    document.getElementById("Lists_of_Instruments").innerHTML = X;
}

function array_Function() {
    var Cats = [];
    Cats[0] = "eating";
    Cats[1] = "sleeping";
    Cats[2] = "purring";
    Cats[3] = "sitting";

    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cats[1] + ".";
}