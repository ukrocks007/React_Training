import React from 'react';
import axios from 'axios';
import CreateTodo from './createTodo';
import {Card, Stack, ListGroupItem, ListGroup, Badge, Row, Col, Button, Form} from 'react-bootstrap';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: "",
            tasks: [],
            isUpdate: false,
            todoId: undefined
        }
        this.getLists = this.getLists.bind(this);
        this.logout = this.logout.bind(this);
        let token = localStorage.getItem('token');
        if(!token) {
            window.location.replace('/');
        }
    }

    delete(id) {
        axios.delete('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo?id=' + id, {
            headers: {
                "Authorization": localStorage.getItem('token') || "-"
            }
        }).then(res => this.getLists())
            .catch(err => console.log(err));
    }

    edit(id) {
        let todo = this.state.todos.filter(a => a.id == id)[0];
        this.setState(
            {
                eName: todo.name,
                isUpdate: true,
                todoId: id
            }
        )
    }

    logout() {
        localStorage.clear();
        window.location.replace('/');
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    getLists() {
        axios.get('https://63af-2409-4042-4d32-6d94-a5e4-2ceb-ff06-6b44.ngrok.io/api/todo', {
            headers: {
                "Authorization": localStorage.getItem('token') || "-"
            }
        }).then(res => this.setState({todos: res.data}))
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.getLists();
    }
    render() {
        return (
            <div>
                <br />
                <Row>
                    <Col md={{ span: 3, offset: 10 }} ><Button onClick={this.logout}>Logout</Button></Col>
                </Row>
                <CreateTodo refreshLists={ this.getLists } />
                <Stack direction="horizontal" gap={ 3 }>
                    { this.state.todos.map(t =>
                        <Card key={t.id} style={ { width: '18rem' } }>
                            <Card.Body>
                                {
                                    this.state.isUpdate ?
                                        <Form.Group className="mb-3" controlId="createTodoList">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" name="eName" placeholder="Enter Todo List Name"
                                                value={ this.state.eName } onChange={ this.handleChange } />
                                        </Form.Group>
                                        :
                                        <Card.Title>{ t.name }</Card.Title>
                                }
                                <ListGroup className="list-group-flush">
                                {
                                    t.list.map((tsk, i) =>
                                        <ListGroupItem key={'tsk' + i}>{ tsk.data }  { tsk.isDone && <Badge pill bg="success">
                                            Done
                                        </Badge> }
                                        </ListGroupItem>
                                    )
                                }
                            </ListGroup>
                            <Card.Link onClick={e => this.edit(t.id)} href="#">Edit</Card.Link>
                            <Card.Link onClick={e => this.delete(t.id)} href="#">Delete</Card.Link>
                        </Card.Body>
                    </Card>) }
                </Stack>
            </div>
        );
    }
}