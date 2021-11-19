class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    updateEmail(e) {
        this.setState({ email: e.target.value.trim() })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value.trim() })
    }

    submitLogin(e) {
        //Overrides default submit behaviour
        e.preventDefault();
        const {email, password} = this.state;
        if(email !== "" && password !== "") {
            //Submit the data to server
        } else {
            //show error
        }
    }

    render() {
        return (
            <form onSubmit={ this.submitLogin }>
                Email: <input value={ this.state.email } type="email" onChange={ this.updateEmail } />
                Password: <input value={ this.state.password } type="password" onChange={ this.updatePassword } />
                <button>Login</button>
            </form>
        );
    }
}