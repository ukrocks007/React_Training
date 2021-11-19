/**
 * getSnapshotBeforeUpdate get called just before update
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red", updated: false };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        this.setState({
            updated: true
        });
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is { this.state.favoritecolor }</h1>
                {this.state.updated && (
                    <p>Updated</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));