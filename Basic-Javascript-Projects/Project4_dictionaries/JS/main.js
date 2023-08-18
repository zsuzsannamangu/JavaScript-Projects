function plant_Dictionary() {
    var Plant = {
        Name: "Philodendron",
        Type: "Congo",
        Pot_color: "Red",
        Place: "Room3",
    };
    delete Plant.Place;
    document.getElementById("dictionary").innerHTML = Plant.Place;
}