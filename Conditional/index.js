class Conditional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            milestone: props.milestone
        }
    }

    increment = (e) => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <>
                <h1>Counter: { this.state.counter }</h1>
                <button onClick={ this.increment }>Increment</button>
                <h1>{ counter % 2 == 0 ? "even" : "odd" }</h1>
                {counter > milestone &&
                    <h2>
                    You have reached your milestone!
                    </h2>
                }
            </>
        );
    }
}

//Function based component

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

ReactDOM.render(
    <Goal isGoal={ false } />,
    document.getElementById('root')
);