import React from 'react';
import axios from 'axios';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tasks: [],
            newTask: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.getTasksList = this.getTasksList.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        let user = localStorage.getItem('user');
        user = user ? JSON.parse(user) : undefined;
        if (user) {
            axios.post('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo', {
                name: this.state.name,
                list: this.state.tasks,
                user: user.id
            }, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
                .then(res => console.log)
                .catch(err => console.log)
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    getTasksList() {
        this.state.tasks.map(t => t.data).join('\n');
    }

    render() {
        return (
            <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <label>Task:</label>
                    <input type="text" name="newTask" value={ this.state.newTask } onChange={ this.handleChange } />
                    <button onClick={
                        e =>
                            this.setState({
                                tasks: [...this.state.tasks, { data: this.state.newTask, isDone: false }],
                                newTask: ""
                            })
                    }
                    
                    >+</button>
                    <br />
                    <button onClick={this.addTodo}>Add List</button>
                    <br />
                    {
                        this.state.tasks.map(t => <p><input type="text" readOnly={true} value={t.data} /></p>)
                    }
            </div>
        );
    }
}