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
        axios.get('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo', {
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