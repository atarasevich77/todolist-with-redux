import React, {useState} from 'react';
import api from '../../api/config';
import {connect} from "react-redux";

const TodoItem = (props) => {
    const todo = props.todo;
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description);
    const [editMode, setEditMode] = useState(false);

    const cancel = () => {
        setName(props.todo.name);
        setDescription(props.todo.description);
        setEditMode(false);
    }

    const changeStatus = (e) => {
        const updatedTodo = {...todo, done: e.target.checked};
        props.updateTodo(updatedTodo);
    }

    const changeTitle = () => {
        // const updatedTodo = {...todo, title: title};
        // props.updateTodo(updatedTodo);
        // setEditMode(false);
    }

    const deleteTodo = () => {
        // e.preventDefault();
        const id = todo._id;
        api.delete(`todo/${id}`)
            .then(() => {
                props.deleteTodo(id);
            })
            .catch(error =>{
                console.log(error)
                props.getError(error)
            })
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={changeStatus}/>
            {editMode ?
                <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button onClick={changeTitle}>Update</button>
                    <button onClick={cancel}>Cancel</button>
                </>
                :
                <>
                    <span onDoubleClick={()=>setEditMode(true)}>
                        {todo.name}
                        &nbsp;
                        {todo.description}
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
        updateTodo: (todo) => dispatch({type: 'API_TODO_UPDATE', payload: todo}),
        deleteTodo: (id) => dispatch({type: 'API_TODO_DELETE', id: id}),
        getError: (error) => dispatch({type: 'API_TODO_ERROR', payload: error})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);