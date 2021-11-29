import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(e) {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        console.log(`Username: ${this.state.email} Password: ${this.state.password} 
        rememberMe: ${this.state.rememberMe}`)
    }

    render() {
        console.log("Inside Login component");
        return (
            this.props.isLoggedIn ?
                (<h1>Welcome to the React Demo Page</h1>) :
                <>
                    <h2>Login Form</h2>
                    <input type="email" value={ this.state.email }
                        name="email" onChange={ this.handleTextChange } />

                    <input type="password" value={ this.state.password }
                        name="password" onChange={ this.handleTextChange } />

                    Remember Me!<input type="checkbox" name="rememberMe" checked={ this.state.rememberMe }
                        onChange={ this.handleCheckboxChange } />

                    <button onClick={ this.handleSubmit }>Submit</button>
                </>
        );
    }
}

export default Login;