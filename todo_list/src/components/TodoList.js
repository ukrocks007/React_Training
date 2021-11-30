import React from 'react';
import axios from 'axios';
import CreateTodo from './createTodo';
import {Card, Stack, ListGroupItem, ListGroup, Badge, Row, Col, Button} from 'react-bootstrap';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: "",
            tasks: []
        }
        this.getLists = this.getLists.bind(this);
        this.logout = this.logout.bind(this);
        let token = localStorage.getItem('token');
        if(!token) {
            window.location.replace('/');
        }
    }

    logout() {
        localStorage.clear();
        window.location.replace('/');
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
                <CreateTodo refreshLists={this.getLists} />
                <Stack direction="horizontal" gap={3}>
                { this.state.todos.map(t =>
                    <Card style={ { width: '18rem' } }>
                        <Card.Body>
                            <Card.Title>{ t.name }</Card.Title>
                            <ListGroup className="list-group-flush">
                                {
                                    t.list.map(tsk =>
                                        <ListGroupItem>{ tsk.data }  { tsk.isDone && <Badge pill bg="success">
                                            Done
                                        </Badge> }
                                        </ListGroupItem>
                                    )
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>) }
                </Stack>
            </div>
        );
    }
}