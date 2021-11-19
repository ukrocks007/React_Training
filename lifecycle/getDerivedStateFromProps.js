/**
 * favoritecolor value will be updated before rendering
 */

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red", display: false };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol, display: !state.display };
    }
    render() {
        return (
            this.state.display && <h1>My Favorite Color is { this.state.favoritecolor }</h1>
        );
    }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById('root'));