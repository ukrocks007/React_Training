import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import TodoList from './components/TodoList';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path="/" element={ <Login /> } />
                    <Route path="home" element={ <TodoList /> } />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
