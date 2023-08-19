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

var slideIndex = 1;  //Initialise the variable slideIndex to 1
showSlides(slideIndex); //Calls the main function 'showSlides', and passes in the 1 from slideIndex above - So it says to show the first slide
//How this function works is that it loops through the given gallery and show the image with the index passed to the function, and hides other images.


//Next and previous controls

function plusSlides(n) { //This function gets called when user clicks the next/previous button. This function will skip ahead n slides and show that slide.
    showSlides(slideIndex += n); // It adds n to the index, and calls the main function 'showSlides' again. If slideIndex was 3 calling on plusSlides(n) will look for the forth index
}

//Thumbnail image controls
function currentSlide(n) {  //currentSlide(n) works with the showSlides(n) function, any value passed to currentSlide(n) will be the current image to show.
    showSlides(slideIndex = n); //This sets slideIndex to n and then shows the nth slide
}

function showSlides(n) {
    let i; //This variable is for iterating (adding), it's an empty variable
    let slides = document.getElementsByClassName("mySlides"); //This variable selects the mySlides element from the DOM HTML, basically each img
    let dots = document.getElementsByClassName("dot"); //This variable selects the dot element from the DOM HTML, the 3 dots
    if (n > slides.length) {slideIndex = 1} //If we've reached the end of the list (gone past the last slide) we set the slideIndex back to 1.
    if (n < 1) {slideIndex = slides.length} //If we've gone back past the first slide, go back to the end
 
    for (i = 0; i < slides.length; i++) { //Iterate through all of the slides, and do what's in the {} to each slide. Set the display style to none to hide them.
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) { //Iterate through all of the dots, and do what's in the {} to each dot element. Remove the class name 'active' for CSS.
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block"; //Set the display style of the slide before (-1) to 'block' - This makes it visible
    dots[slideIndex-1].className += " active"; //Set the class name of the dot before (-1) to 'active' - Styled in CSS
}