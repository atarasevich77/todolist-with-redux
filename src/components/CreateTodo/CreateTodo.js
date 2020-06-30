import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTodo = (props) => {
    const [title, setTitle] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    return (
        <form className="form-inline">
            <div className="form-group mb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" className="form-control" placeholder="Name"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}

                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="desc" className="sr-only">Description</label>
                <input type="password" className="form-control" placeholder="Description"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className="btn btn-success mb-2" onClick={addTodo}>Add</button>
        </form>
    );
};

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => (
    {
        addTodo:
            (todo) => dispatch({type: 'TODO_ADD', title: todo})
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);