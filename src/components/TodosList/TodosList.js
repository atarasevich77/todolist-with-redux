import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TodoItem from "./TodoItem";
import {fetchTodos} from "../../api/fetchData";

const TodosList = (props) => {

    useEffect(() => {
        props.initData()
    }, []);

    return (
        <ul className="list-group w-75">
            {
                props.todos.map((el, idx) =>
                    <li key={idx} className={el.done ? 'list-group-item list-group-item-success' : 'list-group-item'}>
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