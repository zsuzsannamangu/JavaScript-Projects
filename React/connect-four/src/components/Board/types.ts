import { ChipsPositions } from "../App/types";

export interface Props { //describes the shape of the data that will be passed to component
    columns: number; //it has to provide the number of rows and columns that the board will have
    rows: number;
    chipPositions: ChipsPositions;
    onTileClick: (id: string) => any;
}