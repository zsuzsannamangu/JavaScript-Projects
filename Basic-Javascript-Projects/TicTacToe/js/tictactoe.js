//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    //The array .some() method iterates thru the array and checks if there is anyhing in a square
    //! is a logic reversal operator, if something was true it will change it to false, if something is false, it will change to true.
    //The includes() method returns true if a string contains a specified string. Otherwise it returns false.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        //this variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            //select is the name of variable defined above, that retrieves the HTML element id that was clicked.
            //.style property returns the values of an element's style attribute. You can change the color, add a pic, add a border, etc.
            select.style.backgroundImage = 'url("images/x2.png")';
            //Active player may only be 'X' or 'O' so, if not 'X', it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o2.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        //The push() method adds new items to the end of an array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change active player to 'O'
            activePlayer = 'O';
            //If active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }


        //This function plays placement sound.
        audio('./media/place2.mp3');
        //This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            //This function disables the current player from clicking for the computer's turn.
            disableClick();
            //This function waits 1 second (= 1000 miliseconds) before the computer places an img and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }

    //This function results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        //!success = as long as success is true
        while (!success) {
            //a random number btw 0 and 8 is selected
            //string() returns a string primitive
            //Math. random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. 
            //To get a number, for example between 0 and 9, multiply your answer by 10: Math. random() * 10 
            //To get it to be a whole number, apply Math.floor, which rounds down to the nearest whole number
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random numnber evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            };
        }
    }       
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met
//The checkWinConditions() function will check which player wins, based on where an X or an O is placed
  // It checks for every possible winning scenario of either an X or an O placed in a square.
  //Each square has its own index number starting from 0 - 8.
  // 0 1 2
  // 3 4 5
  // 6 7 8

function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie2.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawWinLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function will disable the current player from being able to click a square until the computer has had its turn
function disableClick() {
    //This makes our body unclickable;
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for 
//placement sound('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    //The HTMLMediaElement play() method attempts to begin playback of the media.
    //.pause() stops the playback
    audio.play();
}

//This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element. win-lines is the id of the <canvas> in HTML
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    //getContext() method returns a drawing context on the canvas.
    //To draw in the canvas you need to create a 2D context object by using .getContext('2d');
      //ex: const myCanvas = document.getElementById("myCanvas");
      //ex: const ctx = myCanvas.getContext("2d");
    const c = canvas.getContext('2d');

    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y= y1;


    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable creates a loop.
        //requestAnimationFrame function that allows you to create smooth and fluid animations
        //Whenever you want to redraw your screen, simply call it along with the name of your animation loop function
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration
        //The clearRect() method clears specified pixels on the canvas.
        //The clearRect() method does not change the current path. The cleared area is set to transparent rgba(0,0,0,0).
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path
        c.beginPath();
        //This method moves us to the starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //this method sets the color of our line.
        c.strokeStyle = 'rgba(152, 68, 230, 0.8)';
        //This method draws everything we laid out above.
        c.stroke();
        //This condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            //This condition adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10; }
            //This condition is similar to the one above.
            //This is necessary for the 6, 4, 2 win conditions.
            //cancels an animation frame request previously scheduled
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 index squares if either X or O won 
        //on the diagonal line from right to left. 
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }

    //This line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds
    audio('./media/winGame2.mp3');
    //This line calls our main animation loop
    animateLineDrawing();
    //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);

}

//This function resets the game in teh event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our element's backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
