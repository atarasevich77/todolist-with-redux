import React from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
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

export default connect(mapStateToProps, null)(TodosList);