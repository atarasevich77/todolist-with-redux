import React, {useState} from 'react';
import {connect} from "react-redux";
import {fetchDeleteTodo, fetchStatusUpdateTodo, fetchUpdateTodo} from "../../api/fetchData";

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
        e.preventDefault();
        const id = todo._id;
        props.updateStatus({id: id, status: e.target.checked});
    }

    const updateTodo = () => {
        const updatedTodo = {...todo, name: name, description: description};
        props.updateTodo(updatedTodo);
        setEditMode(false);
    }

    const deleteTodo = (e) => {
        e.preventDefault();
        const id = todo._id;
        props.deleteTodo(id);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={changeStatus}/>
            {editMode ?
                <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button onClick={updateTodo}>Update</button>
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
        updateTodo: (todo) => dispatch(fetchUpdateTodo(todo)),
        updateStatus: (data) => dispatch(fetchStatusUpdateTodo(data)),
        deleteTodo: (id) => dispatch(fetchDeleteTodo(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);