function Call_Loop() {
    var X = "";
    var Y = 1;
    while (Y < 11) {
        X += "<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML= X;
}