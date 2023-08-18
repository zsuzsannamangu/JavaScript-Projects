function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //ternary operator syntax = Name_of_variable = (condition) ? Value_1:Value_2, if it's true displays left, if it's false, displays right
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voter_Function() {
    var Age = document.getElementById("Age").value; //The value property sets or returns the value of the value attribute of a text field. The value property contains the default value OR the value a user types in (or a value set by a script).
    var Can_vote = (Age >= 18) ? "You can" : "You can't";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";
}