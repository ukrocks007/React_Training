/**
 * 
 * Class based components
 * Create a class 
 * extents React.Component class
 * render is the function which returns html
 * 
 */
class Car extends React.Component {
    render() {
        //return html
        return <h2>Audi</h2>;
    }
}

/**
 * 
 * Function based components
 * Returns html
 * 
 */
function Car() {
    return <h2>BMW</h2>;
}

/**
 * 
 * Nested Component
 * Car component can be used in Garage Component
 * It is similar to calling a function inside other
 * 
 */
function Car() {
    return <h2>Honda</h2>;
}

function Garage() {
    return (
        <>
            <h1>Sky Honda</h1>
            <Car />
        </>
    );
}

ReactDOM.render(<Garage />, document.getElementById('root'));