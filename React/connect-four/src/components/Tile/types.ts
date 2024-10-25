export interface Props {
    id: string; //It has to provide an id through the component’s props.
    chipType?: string; //It could send a chipType to the component. As we mentioned above, Tiles can have a Chip or not.
    onClick: (id: string) => any; //It has to attach a function to the onClick prop, that will be triggered when the user clicks on a Tile.
}