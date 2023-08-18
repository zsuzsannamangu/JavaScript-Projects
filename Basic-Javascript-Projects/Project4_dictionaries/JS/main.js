function plant_Dictionary() {
    var Plant = {
        Name: "Philodendron",
        Type: "Congo",
        Pot_color: "Red",
        Place: "Room2",
        Place: "Room3",
    }
    document.getElementById("dictionary").innerHTML = Plant.Place;
}