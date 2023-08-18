function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //ternary operator syntax = Name_of_variable = (condition) ? Value_1:Value_2, if it's true display left, if it's false, display right
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}