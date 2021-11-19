/**
 * You can pass a function name to onClick attribute
 */
class ButtonClickDemo_Function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment(e) {
        this.setState({
            counter: Number(this.state.counter) + 1
        });
    }

    render() {
        return (
            <>
                <h1>Counter: { this.state.counter }</h1>
                <button onClick={ this.increment }>Increment</button>
            </>
        );
    }
}

/**
 * Inline code (anonymous function) which executes the handler function
 */
class ButtonClickDemo_inline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment(e) {
        this.setState({
            counter: Number(this.state.counter) + 1
        });
    }

    render() {
        return (
            <>
                <h1>Counter: { this.state.counter }</h1>
                <button onClick={ (e) => this.increment(e) }>Increment</button>
            </>
        );
    }
}