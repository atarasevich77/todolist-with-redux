import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTodo = (props) => {
    const [title, setTitle] = useState('');

    const addTodo = () => {
        props.addTodo(title);
        setTitle('');
    }

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
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