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

function Vehicle(Make, Model, Year, Color) { //The function “Vehicle()” is an object constructor.
    this.Vehicle_Make = Make; //The “this” keyword allows you to essentially create a placeholder of undetermined values until the new object is created from the object constructor.
    this.Vehicle_Model = Model; //this.Vehicle_Model = Model; would translate to Erik.Vehicle_Model = “Pinto”;
    this.Vehicle_Year = Year; //so this is the placeholder for Jack, Emily and Erik
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //“new” keyword is used to create objects of the Vehicle function. Then we have defined the values for each Make, Model, Year, and Color.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

function Camp(Date, Address, Theme) { //Object constructor function
    this.Camp_Date = Date;
    this.Camp_Address = Address;
    this.Camp_Theme = Theme;
}

var week_One = new Camp("July 12-16", "123 A street", "storybook"); //Objects of the same type are created by calling the constructor function with the "new" keyword
var week_Two = new Camp("Aug 1-5", "456 B street", "magic");
var week_Three = new Camp("Aug 20-24", "789 C street", "piano");
function Camp_Function() {
    document.getElementById("New_and_This").innerHTML = "Between " + week_One.Camp_Date + ", Cora will be at " + week_One.Camp_Theme + " camp, located at " + week_One.Camp_Address + ".";
}

