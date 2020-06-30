import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";
import {fetchTodos} from "../../api/fetchData";

const TodosList = (props) => {

    useEffect(() => {
        props.initData()
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
        initData: () => dispatch(fetchTodos()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);