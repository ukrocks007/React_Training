import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.post("https://1234-purple-canid-1h78y7w3.ws-us17.gitpod.io/api/user/login", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            // <center>
                <div>
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email"
                                onChange={ this.handleChange } value={ this.state.email } />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password"
                                onChange={ this.handleChange } value={ this.state.password } />
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            // </center>
        );
    }
}