function validateForm() {
    let x = document.forms["myForm"] ["firstname"].value;
    if (x == "") { //If a form field (firstname) is empty
        alert("Name must be filled out"); //this function alerts a message
        return false; //and returns false, to prevent the form from being submitted
    }
}