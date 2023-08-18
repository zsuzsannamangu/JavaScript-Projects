function plant_Dictionary() { //created function named plant_Dictionary()
    var Plant = { //created dictionary
        Name: "Philodendron",
        Type: "Congo",
        Pot_color: "Red",
        Place: "Room3",
    };
    delete Plant.Place; //deleted a KVP from the dictionary
    document.getElementById("dictionary").innerHTML = Plant.Place; //asked to display one KVP of the dictionary
    //since it's now deleted Plant.Place will be displayed as undefined
}