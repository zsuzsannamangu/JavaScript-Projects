//The ChipsPositions object: a dictionary containing in each position one of these values of Player type: “red”, “yellow” or “” (representing an empty value).
export interface ChipsPositions {
    [key : string]: Player;
}

export type Player = "red" | "yellow" | "";

export interface Props { //tells us that we need to provide the number of columns and rows for the App component to initialize
    columns: number;
    rows: number;
}

export interface State { //tells us all the information that will be stored by the component
    chipsPositions: ChipsPositions;
    gameStatus: string;
    playerTurn: Player;
    gameOver: boolean; //tracks whether the game is over, initialize to false
}