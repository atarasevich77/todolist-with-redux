import api from "./config";
import {getTodos, getFailure} from "../redux/actions";

export function fetchTodos() {
    return (dispatch) => {
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
    return (dispatch) => {
        api.post('todo',
            {
                name: todo.name,
                description: todo.description
            })
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchStatusUpdateTodo({id, status}) {
    return (dispatch) => {
        api.put(`todo/${id}`,
            {
                done: status
            })
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchUpdateTodo(todo) {
    return (dispatch) => {
        api.patch(`todo/${todo._id}`,
            {
                name: todo.name,
                description: todo.description
            })
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}

export function fetchDeleteTodo(id) {
    return (dispatch) => {
        api.delete(`todo/${id}`)
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch(error => {
                dispatch(getFailure(error));
            })
    }
}