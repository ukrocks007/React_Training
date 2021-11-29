import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
    let token = localStorage.getItem('token');
    return (
        token ? <TodoList /> : <Login />
    );
}

export default App;
