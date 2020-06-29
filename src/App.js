import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";

function App(props) {

    const [title, setTitle] = useState('');

    const addTodo = () => {
        props.addTodo(title);
        setTitle('');
    }

    return (
        <div className="App">
            React/Redux Todo list
            <ul>
                {
                    props.todos.map((el, idx) =>
                        <li key={idx}>
                            <TodoItem todo={el}/>
                        </li>
                    )
                }
            </ul>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => (
    {
        addTodo:
            (todo) => dispatch({type: 'TODO_ADD', title: todo})
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
