function addition() {
    var addition_variable = 2+2;
    document.getElementById("Math").innerHTML="2 + 2 equals " + addition_variable;
}

A = "Always ";
B = "remember: ";
document.write(A + B);

X="you ";
Y="are ";
document.write(X + Y);

M="unique, " ;
N="just like everyone else.";
document.write(M + N);

function count_To_Ten() { //count to ten with JavaScript
    var Digit = " "; //this is the result
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; //Digit = Digit + "<br>" + X; <br> is for spacing btw lines of text
        X++; //X = X + 1
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
}