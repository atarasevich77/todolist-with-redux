import React, {useState} from 'react';
import api from '../../api/config';
import {connect} from "react-redux";

const CreateTodo = (props) => {
    const [isValidData, setIsValidData] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        api.post('todo',
            {
                name: name,
                description: description
            })
            .then(() => {
                props.addTodo({name: name, description: description});
                setName('');
                setDescription('');
            })
            .catch(error => {
                console.log(error)
                props.getError(error);
            });
    }

    return (
        <form className="form-inline">
            <div className="form-group mb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" className="form-control" placeholder="Name"
                       value={name}
                       onChange={(e) => {
                           setName(e.target.value)
                           setIsValidData(e.target.value.length > 0 && description.length > 0)
                       }}
                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="desc" className="sr-only">Description</label>
                <input type="text" className="form-control" placeholder="Description"
                       value={description}
                       onChange={(e) => {
                           setDescription(e.target.value);
                           setIsValidData(name.length > 0 && e.target.value.length > 0)
                       }}
                />
            </div>
            <button className="btn btn-success mb-2" onClick={addTodo} disabled={!isValidData}>Add</button>
        </form>
    );
};

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({type: 'API_TODO_ADD', payload: todo}),
        getError: (error) => dispatch({type: 'API_TODO_ERROR', payload: error})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);