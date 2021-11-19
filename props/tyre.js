class Tyre extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //return html
        return <>
            <h2>{ props.brand }</h2>
            <h2>{ props.number }</h2>
        </>
    }
}