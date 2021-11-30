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
        let token = localStorage.getItem('token');
        if(token) {
            window.location.replace('/home');
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.post("https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/user/login", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            window.location.replace('/home');
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            // <center>
                <div>
                    <h1>Login</h1>
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