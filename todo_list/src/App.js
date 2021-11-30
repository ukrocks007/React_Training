import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import {Container} from 'react-bootstrap';

function App() {
    let token = localStorage.getItem('token');
    return (
        token ? 
        <Container>
            <TodoList />
        </Container> : 
        <Container>
            <Login />
        </Container>
    );
}

export default App;
