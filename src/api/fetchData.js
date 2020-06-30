import api from "./config";
import {createTodo, deleteTodo, getFailure, getTodos, updateStatusTodo} from "../redux/actions";

export function fetchTodos() {
    return async (dispatch) => {
        api.get('todo')
            .then(response => {
                dispatch(getTodos(response.data));
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchCreateTodo(todo) {
    return async (dispatch) => {
        api.post('todo',
            {
                name: todo.name,
                description: todo.description
            })
            .then(() => {
                dispatch(fetchTodos());
                dispatch(createTodo(todo));
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchStatusUpdateTodo({id, status}) {
    return async (dispatch) => {
        api.put(`todo/${id}`,
            {
                done: status
            })
            .then(() => {
                dispatch(updateStatusTodo({id, status}));
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchDeleteTodo(id) {
    return async (dispatch) => {
        api.delete(`todo/${id}`)
            .then(() => {
                dispatch(deleteTodo(id));
                dispatch(fetchTodos());
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}