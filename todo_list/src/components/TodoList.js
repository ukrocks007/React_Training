import React from 'react';
import axios from 'axios';
import CreateTodo from './createTodo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: "",
            tasks: []
        }
    }
    componentDidMount() {
        axios.get('https://1234-purple-canid-1h78y7w3.ws-us17.gitpod.io/api/todo', {
            headers: {
                "Authorization": localStorage.getItem('token') || "-"
            }
        }).then(res => console.log(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <CreateTodo />
            </div>
        );
    }
}