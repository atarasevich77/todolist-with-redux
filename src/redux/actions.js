export const GET_TODOS = 'GET_TODOS';
export const POST_CREATE_TODO = 'POST_CREATE_TODO';
export const PUT_STATUS_UPDATE_TODO = 'PUT_STATUS_UPDATE_TODO';
// export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_FAILURE = 'GET_FAILURE';

export const getFailure = (error) => ({
    type: GET_FAILURE,
    payload: error
});

export const getTodos = (todos) => ({
    type: GET_TODOS,
    payload: todos
});

export const createTodo = (todo) => ({
    type: POST_CREATE_TODO,
    payload: todo
});

export const updateStatusTodo = (data) => ({
    type: PUT_STATUS_UPDATE_TODO,
    payload: data
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

