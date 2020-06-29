import React from 'react';
import './App.css';
import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
    return (
        <div className="App">
            React/Redux Todo list
            <TodosList />
            <CreateTodo />
        </div>
    );
}

export default App;
