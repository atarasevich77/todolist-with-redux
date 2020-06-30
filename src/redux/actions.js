import api from '../api/config';

export const GET_TODOS = 'GET_TODOS';
export const POST_CREATE_TODO = 'POST_CREATE_TODO';
// export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_FAILURE = 'GET_FAILURE';

export const getFailure = () => ({
    type: GET_FAILURE,
});

export const getTodos = (todos) => ({
    type: GET_TODOS,
    payload: todos
});

export function fetchTodos() {
    return async (dispatch) => {
        api.get('todo')
            .then(response => {
                dispatch(getTodos(response.data));
            })
            .catch(() => {
                dispatch(getFailure());
            })
    }
}

export const createTodo = (todo) => ({
    type: POST_CREATE_TODO,
    payload: todo
});

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
            .catch(() => {
                dispatch(getFailure());
            })
    }
}

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

export function fetchDeleteTodo(id) {
    return async (dispatch) => {
        api.delete(`todo/${id}`)
            .then(() => {
                dispatch(fetchTodos());
                dispatch(deleteTodo(id));
            })
            .catch(() => {
                dispatch(getFailure());
            })
    }
}
