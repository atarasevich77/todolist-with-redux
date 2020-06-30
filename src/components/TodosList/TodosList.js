import React, {useEffect} from 'react';
import api from '../../api/config';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = (props) => {

    useEffect(() => {
        api.get('todo')
            .then(response => {
                props.getData(response.data);
            })
            .catch(error =>
                props.getError(error)
            )
        ;
    }, []);

    return (
        <ul>
            {
                props.todos.map((el, idx) =>
                    <li key={idx}>
                        <TodoItem todo={el}/>
                    </li>
                )
            }
        </ul>
    );
};

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (data) => dispatch({type: 'API_TODO_INIT', payload: data}),
        getError: (error) => dispatch({type: 'API_TODO_ERROR', payload: error})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);