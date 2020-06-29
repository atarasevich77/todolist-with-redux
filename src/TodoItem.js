import React from 'react';
import {connect} from "react-redux";

const TodoItem = (props) => {
    const todo = props.todo;

    const changeStatus = (e) => {
        const updatedTodo = {...todo, done: e.target.checked};
        props.updateTodo(updatedTodo);
    }

    const deleteTodo = () => {
        props.deleteTodo(todo);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={changeStatus}/>
            {todo.title}
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state) => (
    { todos: state.todos }
);

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (todo) => dispatch({type: 'TODO_UPDATE', todo: todo}),
        deleteTodo: (todo) => dispatch({type: 'TODO_DELETE', todo: todo})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);