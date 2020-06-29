import React, {useState} from 'react';
import {connect} from "react-redux";

const TodoItem = (props) => {
    const todo = props.todo;
    const [title, setTitle] = useState(todo.title);
    const [editMode, setEditMode] = useState(false);

    const cancel = () => {
        setTitle(props.todo.title);
        setEditMode(false);
    }

    const changeStatus = (e) => {
        const updatedTodo = {...todo, done: e.target.checked};
        props.updateTodo(updatedTodo);
    }

    const changeTitle = () => {
        const updatedTodo = {...todo, title: title};
        props.updateTodo(updatedTodo);
        setEditMode(false);
    }

    const deleteTodo = () => {
        props.deleteTodo(todo);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={changeStatus}/>
            {editMode ?
                <>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={changeTitle}>Update</button>
                    <button onClick={cancel}>Cancel</button>
                </>
                :
                <>
                    <span onDoubleClick={()=>setEditMode(true)}>
                        {todo.title}
                    </span>
                    <button onClick={deleteTodo}>Delete</button>
                </>
            }
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