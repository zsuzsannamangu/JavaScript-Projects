function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
        if (seconds == -1) {
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}