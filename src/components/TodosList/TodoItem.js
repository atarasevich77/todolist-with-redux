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

    const updateTodo = (e) => {
        e.preventDefault();
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
        <span onDoubleClick={()=>setEditMode(true)}>
            <div className="input-group flex-nowrap p-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" checked={todo.done} onChange={changeStatus} />
                    </div>
                </div>
                {editMode ?
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    :
                    <>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} readOnly="readonly"/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" onClick={deleteTodo}>Delete</button>
                        </div>
                    </>
                }
            </div>
            {editMode ?
                <>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className="row justify-content-end">
                        <button className="btn btn-success m-2" onClick={updateTodo}>Update</button>
                        <button className="btn btn-secondary m-2" onClick={cancel}>Cancel</button>
                    </div>
                </>
                :
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} readOnly="readonly" />
            }
        </span>
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