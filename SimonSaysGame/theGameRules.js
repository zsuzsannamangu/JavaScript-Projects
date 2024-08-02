$(function() {
    var colors = $('#colors li'); // Select all list items under the element with the ID 'colors'.
    var start = $('#start'); // Select the element with the ID 'start'.
    var gameState = 'waiting'; // Initialize the game state to 'waiting'.
    var gameSequence = new Array(); // Create an array to store the game sequence.
    var level = 1; // Initialize the level to 1.
    var flashNo; // Declare a variable flashNo to track the number of flashes.
    var clickedNo; // Declare a variable clickedNo to track the number of user clicks.

    // Position the squares off-screen to the left initially
    colors.css({position: 'relative', left: '-250px'});

    var setupLightSequence = function() {
        var randomNum = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3.
        gameSequence[level-1] = randomNum; // Add the random number to the game sequence for the current level.
        showLightSequence(); // Call the function to show the light sequence.
    };

    var lightOn = function(no) {
        colors.eq(gameSequence[no]).addClass('on'); // Add the 'on' class to the list item at the position of the current sequence number.
    };

    var lightOff = function() {
        colors.removeClass('on'); // Remove the 'on' class from all list items.
    };

    var showLightSequence = function() {
        lightOff(); // Turn off all lights.

        if(flashNo < level) { // If the current flash number is less than the level number:
            var on = setTimeout(function() { // Set a timeout to turn on the light:
                var off = setTimeout(function() { // Set a timeout to turn off the light after 500ms:
                    showLightSequence(); // Call the function again to show the next light in the sequence.
                    flashNo++; // Increment the flash number.
                }, 500);
                lightOn(flashNo); // Turn on the light for the current flash number.
            }, 500);
        }
        else { // If the flash number is not less than the level number:
            gameState = 'playing'; // Set the game state to 'playing'.
            $('body').addClass('playing'); // Add the 'playing' class to the body.
            start.text("Your turn..."); // Update the start button text to indicate the player's turn.
            clearTimeout(on); // Clear the timeout for turning on the light.
        }
    };

    colors.click(function() {
        if(gameState == 'playing') { // If the game state is 'playing':
            var selectedSquare = $(this).index(); // Get the index of the clicked list item.

            if(gameSequence[clickedNo] == selectedSquare) { // If the clicked list item matches the game sequence:
                if(clickedNo == level-1) { // If the clicked number matches the level number:
                    gameState = 'waiting'; // Set the game state to 'waiting'.
                    $('body').removeClass('playing'); // Remove the 'playing' class from the body.
                    start.text('WELL DONE. Go to the next level. > '); // Update the start button text.
                    level++; // Increment the level.
                }

                $(this).fadeOut(500).fadeIn(500); // Fade out and then fade back in the clicked square.
                var off = setTimeout(function() { // Set a timeout to turn off the light after 200ms:
                    lightOff(); // Turn off the light.
                    clickedNo++; // Increment the clicked number.
                }, 200);
            }
            else { // If the clicked list item does not match the game sequence:
                gameState = 'waiting'; // Set the game state to 'waiting'.
                $('body').removeClass('playing'); // Remove the 'playing' class from the body.
                start.text('GAME OVER. Try again?'); // Update the start button text to indicate game over.
                $('body').removeClass('playing').addClass('game-over'); // Add the 'game-over' class to the body.
                gameSequence = new Array(); // Reset the game sequence.
                level = 1; // Reset the level to 1.
            }
        }
    });

    var init = function() {
        $('#level').text('Level ' + level); // Update the level display with the current level.
        flashNo = 0; // Reset the flash number to 0.
        clickedNo = 0; // Reset the clicked number to 0.
        $(this).text('Simon says...'); // Update the start button text.
        $('body').removeClass('game-over'); // Remove the 'game-over' class from the body.
        setupLightSequence(); // Call the function to set up the light sequence.
    };

    start.click(function() {
        colors.animate({left: '0px'}, 1000); // Animate the squares to slide in from the left over 1 second
        init(); // Initialize the game
    });
});
