import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Inside Login component");
        return (
            this.props.isLoggedIn ?
                (<h1>Welcome to the React Demo Page</h1>) :
                <>
                    <input type="email" />
                    <input type="password" />
                    <button>Submit</button>
                </>
        );
    }
}

export default Login;