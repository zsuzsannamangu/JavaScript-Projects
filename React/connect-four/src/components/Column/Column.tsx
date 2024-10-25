//React's Component logic:

import React from "react";
import Tile from "../Tile/Tile";
import styles from "./Column.module.css";
import { Props } from "./types";

export default class Column extends React.PureComponent<Props> { //Here, Props is capitalized because it's a TypeScript type (or interface) that defines the structure of the props object, defined in the types.ts file
    
    render() { //This code renders a <div> element containing as many Tile components as the rows value indicates (sent via props). 
        const { column, rows, chipsPositions, onTileClick } = this.props; //inside class components, React automatically passes the props object to the component and attaches it to this.props
        /*The line above uses object destructuring to extract specific properties from this.props, which is the object that holds all the props passed to the component.
        The four props being extracted are:
        column: Likely the current column index of the grid or board being rendered.
        rows: The number of rows to be rendered (essentially how many Tile components will be created vertically).
        chipsPositions: An object that stores the current positions of the chips on the grid. It uses a unique identifier for each tile (likely as keys) and associates each tile with a specific chip type (like "red" or "yellow").
        onTileClick: A function that handles what happens when a tile is clicked. This function is passed down to each Tile component.*/
        
        const tiles = []; //initializing tiles array, this will be used to store the rendered Tile components after the loop

        for (let row = 0; row < rows; row++) { //this loop runs from 0 to rows -1, for each iteration it creates a Tile component for each row in a column
            const tileId = `${row}:${column}`; //a unique tileId is defined here by combining the values of row and column
            const chipType = chipsPositions[tileId]; // The chipType is determined by looking up the tileId in the chipsPositions object. chipsPositions[tileId] retrieves the chip's type at the current position (if any).
            tiles.push( //Inside the loop, the code creates a Tile component for each row and adds it to the tiles array using the push() method.
                <Tile
                key={tileId} //React requires a unique key prop for each component in a list
                id={tileId}
                chipType={chipType} //Each tile will receive a chipType (red, yellow or undefined) and the onTileClick() function.
                onClick={onTileClick} //The onTileClick function is passed as a prop to the Tile, allowing the tile to respond when it's clicked. When a tile is clicked, this function is invoked with the tileId.
                />
            );
        }

        return <div className={styles.column}>{tiles}</div>; //the render() function returns a <div> element with a className of styles.column
    }
}