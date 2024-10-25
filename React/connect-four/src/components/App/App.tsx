import React from "react";
import Board from "../Board/Board";
import { Props, State, ChipsPositions } from "./types";
import styles from "./App.module.css";

export default class App extends React.PureComponent<Props, State> { //State is internal to the component, while Props are external data passed down from parent component. State is mutable, Props is immutable within the child, but can change externally
    state: State = { //initializes the component's state with 3 properties
        chipsPositions: {}, //object to store the positions of chips
        playerTurn: "red", //a string to track the current player's turn
        gameStatus: "It's red's turn!", //a string that displays the game's current status
        gameOver: false
    };

    calculateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => { //This function returns a string, which is either: A message declaring the winning player or a message indicating it’s the next player’s turn if no win condition is met.
        
        const { columns, rows } = this.props; //Retrieves columns and rows from the component’s props to define the grid’s dimensions.

        //Horizontal check:
        for (let row = 0; row < rows; row++) {
            let count = 0;
            let lastChip = "";
        
            for (let column = 0; column < columns; column++) {
                const chip = chipsPositions[`${row}:${column}`];
        
                if (chip && chip === lastChip) {
                    count++;
                } else {
                    count = 1; // Reset count for new chip or empty space
                    lastChip = chip;
                }
        
                // If count reaches 4, we have a win
                if (count === 4) {
                    return `Player ${lastChip} won!`;
                }
            }
        }

        //Vertical check:
        for (let column = 0; column < columns; column++) {
            let count = 0;
            let lastChip = "";
        
            for (let row = 0; row < rows; row++) {
                const chip = chipsPositions[`${row}:${column}`];
        
                if (chip && chip === lastChip) {
                    count++;
                } else {
                    count = 1; // Reset count for new chip or empty space
                    lastChip = chip;
                }
        
                // If count reaches 4, we have a win
                if (count === 4) {
                    return `Player ${lastChip} won!`;
                }
            }
        }

        // Check four in a row diagonally (top-left to bottom-right)
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) { //iterates over each cell looking at rows and columns
                const chip = chipsPositions[`${row}:${column}`];
                if (chip) {
                    // Check top-left to bottom-right
                    if (
                        row + 3 < rows &&
                        column + 3 < columns && //Ensures we don’t go out of bounds when moving diagonally downwards and to the right.
                        chip === chipsPositions[`${row + 1}:${column + 1}`] &&
                        chip === chipsPositions[`${row + 2}:${column + 2}`] &&
                        chip === chipsPositions[`${row + 3}:${column + 3}`]
                    ) {
                        return `Player ${chip} won!`;
                    }

                    // Check bottom-left to top-right
                    if (
                        row - 3 >= 0 &&
                        column + 3 < columns &&
                        chip === chipsPositions[`${row - 1}:${column + 1}`] &&
                        chip === chipsPositions[`${row - 2}:${column + 2}`] &&
                        chip === chipsPositions[`${row - 3}:${column + 3}`]
                    ) {
                        return `Player ${chip} won!`;
                    }
                }
            }
        }

        //check if the board is full, which is another way for the game to end
        const isBoardFull = Object.keys(chipsPositions).length === rows * columns; //The length of this array (Object.keys(chipsPositions).length) tells us exactly how many tiles are filled. If this length matches the total number of cells (rows * columns), the board is full.
        //Object.keys = returns an array of an object's own property names (keys), in this case the object is chipPositions. The keys of chipsPositions are "0:0", "0:1", "1:0", "2:2", etc, each property name is formatted as a row and column identifier.  Object.keys provides the count of occupied positions.
        if (isBoardFull) {
            return "It's a draw!";
        }

        //If there is no win and the board is not full, it's the next player's turn
        return `It's ${playerTurn}'s turn`;
    };

    handleTileClick = (tileId: string) => { //This function updates the game state by placing a chip in the tile that is clicked
        if (this.state.gameOver) { //check whether the game is over
            return; //exit the function if the game is over
        }
        const { chipsPositions, playerTurn } = this.state;

        //Get the last empty tile of the column
        const column = parseInt(tileId.split(":")[1]); //split the tileId string at the colon (:), so we can see the row and column (as tile id is x:y, x for row and y for column), and accessing the second element [1], to get the column part. 
        //And convert it to a number with parseInt(). So column const now contains the number value of the clicked column
        let lastEmptyTileId = this.getLastEmptyTile(column); //refers to the getLastEmptyTile() function that is specified below that identifies the lowest empty/available tile in a specified column

        //If there is no empty tile in the column, do nothing
        if (!lastEmptyTileId) { //Checks if lastEmptyTileId is falsy, meaning that there is no empty tile in the colum
            return; //if true, exits the function
        }

        //Add chip to empty tile
        const newChipsPositions = {
            ...chipsPositions, //The ...chipsPositions syntax is the spread operator in JavaScript. Means that all properties from the chipsPositions object are being copied into a new object, newChipsPositions. Modifications in newChipsPositions won't affect chipsPositions
            [lastEmptyTileId]: playerTurn //adding a new property to newChipsPositions with the key [lastEmptyTileId] and the value playerTurn, effectively placing the current player's chip in the lowest available column
        };

        //Change player turn
        const newPlayerTurn = playerTurn == "red" ? "yellow" : "red"; //determines who the next player is by checking the current playerTurn, if it's red, set to yellow, otherwise it's red

        //Calculate game status
        const gameStatus = this.calculateGameStatus(newPlayerTurn, newChipsPositions); //calls calculateGameStatus() function to determine whether there is a win

        //Determine if the game is over by checking whether the gameStatus string contains the word "won".
        const gameOver = gameStatus.includes("won");

        //Save new state
        this.setState({ chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus, gameOver }); //the React built-in setState() method updates the component's state with new values. This method is inherited from React.PureComponent
        //setState() tells React that the component’s state has changed and that it needs to update. React then schedules a re-render of the component with the updated state values. Then it merges the new state with the current state. this.state will contain the updated state values.
    };

    getLastEmptyTile(column: number) { //identifies the lowest empty/available tile in a specified column
        const { rows } = this.props;
        const { chipsPositions } = this.state;
        
        for(let row = rows - 1; row >= 0; row--) { //this loops is going downward, starting at the total number of rows minus 1, until it reaches zero
            const tileId = `${row}:${column}`; //

            if (!chipsPositions[tileId]) { //Each key in chipsPositions is a tile ID (formatted as "row:column"), and the value represents the player’s chip at that position (for example, "red" or "yellow").
                //chipsPositions[tileId] checks if there is a chip in the specified tile. tileId is the current tile's ID. ! negates this check.
                //So !chipPositions[tileId] will be true if the tile is empty and in that case it returns the tileId
                return tileId;
                //This effectively ends the function early, providing the ID of the first empty tile it encounters.
            }
        }
    }
   
    renderBoard() {
        const { columns, rows } = this.props;
        const { chipsPositions } = this.state;
        return (
            <Board
            columns={columns}
            rows={rows}
            chipPositions={chipsPositions}
            onTileClick={this.handleTileClick}
            />
        );
    }

    renderStatusMessage() {
        const { gameStatus, gameOver } = this.state;
        return <div className={styles.statusMessage}>{gameStatus} {gameOver && <p>Game over</p>}</div>;
        //The statusMessage styles are applied to the div element, ensuring the styles are isolated and applied only within this component.
    }

    render() {
        return (
            <div className={styles.app}>
                {this.renderBoard()}
                {this.renderStatusMessage()}
            </div>
        );
    }
}