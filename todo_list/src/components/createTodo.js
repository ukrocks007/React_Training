import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Form, InputGroup, FormControl, Card } from 'react-bootstrap';

const colors = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
];

var oneTimeFlag = false;
export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            name: (props.isUpdate && props.todoItem) ? props.todoItem.name : "",
            tasks: (props.isUpdate && props.todoItem) ? props.todoItem.list : [],
            newTask: "",
            isUpdate: props.isUpdate || false,
            item: props.todoItem || undefined,
            oneTimeFlag: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.getTasksList = this.getTasksList.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            name: (this.props.isUpdate && this.props.todoItem) ? this.props.todoItem.name : "",
            tasks: (this.props.isUpdate && this.props.todoItem) ? this.props.todoItem.list : [],
            newTask: "",
            isUpdate: this.props.isUpdate || false,
            item: this.props.todoItem || undefined
        });
    }

    addTodo(e) {
        let user = localStorage.getItem('user');
        user = user ? JSON.parse(user) : undefined;
        if (user) {
            if (this.state.isUpdate) {
                axios.put('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo', {
                    name: this.state.name,
                    list: this.state.tasks,
                    user: user.id
                }, {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })
                    .then(res => { console.log(res.data); this.props.refreshLists(); this.setState({ tasks: [] }); })
                    .catch(err => console.log)
            } else {
                axios.post('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo', {
                    name: this.state.name,
                    list: this.state.tasks,
                    user: user.id
                }, {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })
                    .then(res => { console.log(res.data); this.props.refreshLists(); this.setState({ tasks: [] }); })
                    .catch(err => console.log)
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    getTasksList() {
        this.state.tasks.map(t => t.data).join('\n');
    }

    render() {
        if(this.props.isUpdate && !oneTimeFlag) {
            debugger;
            this.state = {
                name: (this.props.isUpdate && this.props.todoItem) ? this.props.todoItem.name : "",
                tasks: (this.props.isUpdate && this.props.todoItem) ? this.props.todoItem.list : [],
                newTask: "",
                isUpdate: this.props.isUpdate || false,
                item: this.props.todoItem || undefined,
            };
            oneTimeFlag=true;
        }
        return (
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="createTodoList">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Todo List Name"
                                value={ this.state.name } onChange={ this.handleChange } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Task Name</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="New Task Name"
                                    aria-label="New Task Name"
                                    aria-describedby="basic-addon2"
                                    name="newTask"
                                    value={ this.state.newTask } onChange={ this.handleChange }
                                />
                                <Button variant="outline-primary" onClick={
                                    e =>
                                        this.setState({
                                            tasks: [...this.state.tasks, { data: this.state.newTask, isDone: false }],
                                            newTask: ""
                                        })
                                }

                                >Add New Task</Button>{ ' ' }
                            </InputGroup>
                        </Form.Group>
                        <Button onClick={ this.addTodo }>{this.state.isUpdate ? "Save" : "Add List"}</Button>
                    </Form>
                    <br />
                    {
                        this.state.tasks.map((t, i) => <Card bg={ colors[i % colors.length].toLowerCase() } body>{ t.data }</Card>)
                    }
                </div>
        );
    }
}