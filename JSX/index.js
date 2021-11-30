/**
 * JSX supercharges JS with capcity to create & manipulate UI elements
 * using JavaScript
 */
// Basic JSX element
const myelement = <h1>Lets learn React!</h1>;

// JSX element with an expression
// we can use {<JS Expression>} in JSX
const myelement = <h1>1 plus 1 is equal to {1 + 1}</h1>;

// JSX element for an unordered list
const myelement = (
    <ul>
        <li>MongoDB</li>
        <li>Node.JS</li>
        <li>React.JS</li>
    </ul>
);

// JSX expression must have a single parent 
// element like div, p etc or <> can be used as well
const myelement = (
    <>
        <p>First</p>
        <p>Second</p>
    </>
);

//You can close empty elements with /> 
const myelement = <input type="text" />;

//Invalid JSX
const myelement = (
        <p>First</p>
        <p>Second</p>
);

//Using ternary operator
const x = 5;

const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;