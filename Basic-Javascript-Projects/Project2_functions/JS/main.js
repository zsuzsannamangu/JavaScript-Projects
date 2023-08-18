function displayMessage() { //created the displayMessage function
    var str = "This is your message."; //created a variable, added the message here that will be displayed to the user
    document.getElementById("message").innerHTML = str; //we want to display the HTML element that has the message Id. 
                                                        //That element should have the content of the variable named str
}

function myFunction() {
    var sentence = "This is my sentence"; //created variable
    sentence += " that I want to concatenate."; //added more lines to that variable
    document.getElementById("together").innerHTML = sentence; //innerHTML modifies the content of an HTML element, in this case the element that has the together id. 
                                                                //That will be modified to whatever the variable called sentence holds.
}