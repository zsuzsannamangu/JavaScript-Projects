function displayMessage() {
    var str = "This is your message.";
    document.getElementById("message").innerHTML = str;
}

function myFunction() {
    var sentence = "This is my sentence";
    sentence += " that I want to concatenate.";
    document.getElementById("together").innerHTML = sentence;
}