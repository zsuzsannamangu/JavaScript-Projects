import { ChipsPositions } from "../App/types";

//In TypeScript, you define the Props interface to describe the shape of the data that will be passed as props to the component. 
export interface Props { //Props is short for properties. Props are a fundamental concept in React that allows you to pass data from a parent component to a child component. They are essentially the input values to a component.
    column: number; //tells the component's consumer that it needs to provide a column number, the ID of the element
    rows: number; //needs to define how many rows the Column component will have
    chipsPositions: ChipsPositions; //The chipPositions prop is an object that knows the position of each chip, it can tells us whether there is a chip inside of a tile or not
    onTileClick: (id: string) => any; //Tells the parent when the user clicks on a specific tile. The onTileClick function has one parameter: id which is of type string.
    //=>: This is the arrow function syntax, which is used to specify the return type of the function: function could return a value of any data type, or even nothing at all.
}

/*Components in React are similar to functions and Props are similar to parameters of functions, that is why they are essentially input values to components. You pass props to a React component to customize how it renders and behaves.

js:

function greet(name) {
  return `Hello, ${name}`;
}

greet("Zsuzsi"); // "Hello, Zsuzsi"

jsx:

function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greet name="Zsuzsi" />  // Renders: Hello, Zsuzsi
*/




