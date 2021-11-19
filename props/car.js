import Type from './tyre';

class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //return html
        return
        <>
            <h2>Car Brand: {props.name}</h2>
            <Tyre number={4} brand="MRF" />
        </>;
    }
}