function validateForm() {
    let x = document.forms["myForm"] ["firstname"].value;
    if (x == "") { //If a form field (firstname here) is empty
        alert("Name must be filled out"); //this function alerts a message
        return false; //and returns false, to prevent the form from being submitted
    }
}

function showType(animal) { //created function with object "animal"
    var animalType = animal.getAttribute("data-animal-type"); //created variable that equals to the data attribute
    //The getAttribute() method returns the value of an element's attribute.
    alert("A(n) " + animal.innerHTML + " is a(n) " + animalType + ".");
}