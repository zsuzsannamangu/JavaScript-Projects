import React from "react";
import Column from "../Column/Column";
import styles from "./Board.module.css";
import { Props } from "./types";

export default class Board extends React.PureComponent<Props> {

    renderColumns() {
        const { columns, rows, chipPositions, onTileClick } = this.props;
        const columnsComponents = []; //An empty array is initialized to store the rendered Column components, which will represent the individual columns on the game board.

        for (let column = 0; column < columns; column++) { //we create multiple columns, passing the required information to them
            columnsComponents.push(
                <Column
                    key={column}
                    column={column} //the current column number
                    rows={rows} //the number of rows in each column
                    chipsPositions={chipPositions} //the object holding the positions of chips on the board
                    onTileClick={onTileClick} //The click handler function for when a tile inside the column is clicked.
                />
            );
        }
        return <>{columnsComponents}</>; //after all the Column components have been created and added to columnsComponents, the method returns a React Fragment which is used to group multiple elements together without adding extra DOM elements like a <div>
        //we are using the shorthand “<></>” for React.Fragment, which is an equivalent of “<React.Fragment></React.Fragment>”.
    }
    render() { //this render() method returns the component's JSX
        return <div className={styles.board}>{this.renderColumns()}</div> //<div className={styles.board}>: The root div is rendered with a CSS class from the component's CSS Module. Inside the <div>, the renderColumns() method is called. This method generates
        //and returns all the Column components that make up the board.
    }
}