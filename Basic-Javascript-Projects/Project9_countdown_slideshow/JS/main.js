function countdown() {
    var seconds = document.getElementById("seconds").value; //the variable called seconds is equal to the value entered into the input box by user

    function tick() { //nested function
        seconds = seconds - 1;
        timer.innerHTML = seconds; //A timer is a function that enables us to execute a task after a particular time interval. So we can delay the code execution. 
        //It would be stored somewhere else and when the timer expired then that function would be executed. 
        //JavaScript provides 2 functions to delay the execution of tasks: setTimeout and setInterval
        var time = setTimeout(tick, 1000); //The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
        //setTimeout() function: It is an API provided by the browser to interact with the outer environment, it's not part of JavaScript
        if (seconds == -1) { //0 will be last number, once it would be -1, an alert comes up saying "Time is up"
            alert("Time is up!");
            clearTimeout(time); //It is used to stop the setTimeout function.
            timer.innerHTML = "";
        }
    }
    tick();
}