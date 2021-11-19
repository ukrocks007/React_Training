//Update state inline
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <form>
                Email: <input value={ this.state.email } type="email" onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                Password: <input value={ this.state.password } type="password" onChange={ (e) => { this.setState({ password: e.target.value }) } } />
                <button>Login</button>
            </form>
        );
    }
}

//Update state with functions
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    updateEmail(e) {
        this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <form>
                Email: <input value={ this.state.email } type="email" onChange={ this.updateEmail } />
                Password: <input value={ this.state.password } type="password" onChange={ this.updatePassword } />
                <button>Login</button>
            </form>
        );
    }
}

//Generic function
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    updateData(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form>
                Email: <input value={ this.state.email }
                    name="email"
                    type="email"
                    onChange={ this.updateData } />

                Password: <input value={ this.state.password }
                    name="password"
                    type="password"
                    onChange={ this.updateData } />

                <button>Login</button>
            </form>
        );
    }
}