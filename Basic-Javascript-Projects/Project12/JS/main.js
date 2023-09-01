function validateForm() {
    let x = document.forms["myForm"] ["firstname"].value;
    if (x == "") { //If a form field (firstname here) is empty
        alert("Name must be filled out"); //this function alerts a message
        return false; //and returns false, to prevent the form from being submitted
    }
}

showType = function(animal) {
    var animalType = animal.getAttribute("data-animal-type"); //created variable that equals to the data attribute
    //The getAttribute() method returns the value of an element's attribute.
    alert("A(n) " + animal.innerHTML + " is a(n) " + animalType + ".");
}

//arrow function:
//showType = (animal) => {
    //var animalType = animal.getAttribute("data-animal-type"); //created variable that equals to the data attribute
    //The getAttribute() method returns the value of an element's attribute.
   //alert("A(n) " + animal.innerHTML + " is a(n) " + animalType + ".");
//}


//var ages = [2, 10, 18, 20, 13, 15, 30];
//using the arrow function to pass in parameter of age
//checkAge = (age) => age >= 18;
//function myFunction() {
    //Use the array .some() method to iterate thru the array of ages and display the results.
    //document.getElementById('displayAge').innerHTML = ages.some(checkAge);
//}

const ages = [2, 10, 18, 20, 13, 15, 30];
let isThere18 = ages.some(someMethod);

document.getElementById("displayAge").innerHTML = "It is " + isThere18;

function someMethod(value, index, array) {
    return value >= 18;
}