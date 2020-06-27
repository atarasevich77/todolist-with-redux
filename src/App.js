import React, {useState} from 'react';
import {connect} from "react-redux";
import './App.css';

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
                    props.todos.map((el, idx)=>
                        <li key={idx}>
                            {el.title}
                        </li>
                    )
                }
            </ul>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({ type: 'TODO_ADD', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
