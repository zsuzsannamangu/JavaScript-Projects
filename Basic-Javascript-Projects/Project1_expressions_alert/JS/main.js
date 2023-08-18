document.write("Hello, World. "); //displaying text Hello, World
var A ="This is a string. "; //defining a variable and giving it a string value
document.write(A); //displaying content of variable A
window.alert(A); //A will display in pop-up box
var B = "This is \"another string\". "; //defining variable B
document.write(B); //displaying variable B
var C = "This is a long paragraph. " //defining variable C
+ "There are 3 sentences in this paragraph. "
+ "This is the last sentence. ";
document.write(C); //displaing variable C
var D = "Family names are as follows: "; mom = "Zsuzsi"; olderKid="Cora"; youngerKid="Hugo";
document.write(D);
document.write(mom);
document.write(3*3); //writing an expression
var Sent1 = "This is the beginnning of the string. ";
var Sent2 = "This is the end of the string.";
document.write(Sent1+Sent2);

function displayDate() {
    document.getElementById("name").innerHTML = Date();
}

function displayMessage() {
    var str = "You got this message since you moved your mouse over an HTML element.";
    document.getElementById("message").innerHTML = str;
}